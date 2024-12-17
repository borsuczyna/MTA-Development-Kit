import * as vscode from 'vscode';
import * as fs from 'fs';
import { ResourceItem } from './resource-item';
import { DOMParser } from 'xmldom';
import { ResourceExport } from './export';
import { ResourceScript } from './script';
import { FunctionParameter } from './parameter';
import { ResourceFunction } from './function';
import { ResourceTreeProvider } from './view-provider';
import { pathCompare } from '../utils/pathCompare';
import { ScriptSide } from '../enums/script-side';

export class Resource {
    public name: string;
    public fullPath: string;
    public path: string;
    public scripts: ResourceScript[] = [];
    public exports: ResourceExport[] = [];

    constructor(fullPath: string, path: string) {
        this.fullPath = fullPath;
        this.name = path.split('/').pop() || '';
        this.path = path;
    }

    public async load() {
        await this.loadMeta();
    }

    public toResourceItem(): ResourceItem {
        return new ResourceItem(this);
    }

    public getFunction(name: string, type: ScriptSide | null, includeLocal: boolean = false, localParent: string | null = null): ResourceFunction | null {
        let possibleScripts = (type && type !== ScriptSide.Shared) ? this.scripts.filter(script => script.type === type) : this.scripts;

        for (const script of possibleScripts) {
            let functionItem = script.getFunction(name, includeLocal, localParent);
            if (functionItem) {
                return functionItem;
            }
        }

        return null;
    }

    public getFunctions(includeLocal: boolean = false, localParent: string | null = null): ResourceFunction[] {
        let functions = this.scripts.reduce((acc, script) => [...acc, ...script.functions], [] as ResourceFunction[]);
        return includeLocal ? functions : functions.filter(func => !func.isLocal || pathCompare(func.parent.fullPath, localParent || ''));
    }
    
    public getExports(): ResourceExport[] {
        return this.exports;
    }

    public getExport(name: string): ResourceExport | null {
        return this.exports.find(exp => exp.functionName === name) || null;
    }

    private async loadScripts(scriptNodes: HTMLCollectionOf<Element>) {
        this.scripts = await Promise.all(Array.from(scriptNodes).map(async scriptNode => {
            const scriptPath = scriptNode.getAttribute('src') || '';
            const scriptType = scriptNode.getAttribute('type') as ScriptSide || ScriptSide.Shared;
            const fullPath = `${this.fullPath}/${scriptPath}`;
            const path = `${this.path}/${scriptPath}`;

            const script = new ResourceScript(this, fullPath, path, scriptType);
            await script.load();

            return script;
        }));
    }

    private loadExports(exportsNodes: HTMLCollectionOf<Element>) {
        this.exports = Array.from(exportsNodes).map(exportNode => {
            const functionName = exportNode.getAttribute('function') || '';
            const returnValue = FunctionParameter.parse(exportNode.getAttribute('retval') ?? '');
            const parameters = (exportNode.getAttribute('params') || '').split(',').map(param => FunctionParameter.parse(param));
            const description = exportNode.getAttribute('description') || null;
            const type = exportNode.getAttribute('type') as ScriptSide || ScriptSide.Shared;

            // find possible function
            const possibleFunction = this.getFunction(functionName, type);
            if (possibleFunction) {
                FunctionParameter.sync(parameters, possibleFunction.parameters);
            }

            const resourceExport = new ResourceExport(this, functionName, returnValue, parameters, description, type);

            if (possibleFunction) {
                resourceExport.path = possibleFunction.parent.path;
                resourceExport.fullPath = possibleFunction.parent.fullPath;
                resourceExport.startLine = possibleFunction.startLine;
                resourceExport.endLine = possibleFunction.endLine;
                resourceExport.functionReference = possibleFunction;
                
                if (possibleFunction.documentation) {
                    resourceExport.description = resourceExport.description || possibleFunction.documentation.description || null;
                    if (possibleFunction.documentation.returns && possibleFunction.documentation.returns !== 'any' && possibleFunction.documentation.returns !== '') {
                        resourceExport.returnType = FunctionParameter.parse(possibleFunction.documentation.returns);
                    }
                }
            }

            return resourceExport;
        });
    }

    private async loadMeta() {
        const metaPath = `${this.fullPath}/meta.xml`;
        if (!fs.existsSync(metaPath)) {
            return;
        }

        try {
            const meta = await fs.promises.readFile(metaPath, 'utf8');
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(meta, 'text/xml');
            const exports = xmlDoc.getElementsByTagName('export');
            const scripts = xmlDoc.getElementsByTagName('script');

            await this.loadScripts(scripts);
            this.loadExports(exports);
        } catch (error) {
            const errorMessage = (error as Error).message;
            vscode.window.showErrorMessage(`Error loading meta.xml: ${errorMessage}`);
            vscode.window.showErrorMessage(`Stack: ${(error as Error).stack}`);
        }
    }

    public getExportByName(name: string): ResourceExport | null {
        return this.exports.find(exportItem => exportItem.functionName === name) || null;
    }

    public static async getResources(): Promise<Resource[]> {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            return [];
        }

        const rootPath = workspaceFolders[0].uri.fsPath;
        try {
            const dirEntries = await fs.promises.readdir(rootPath, { withFileTypes: true });
            const directories = [];

            for (const dirEntry of dirEntries) {
                if (!dirEntry.isDirectory()) {
                    continue;
                }

                const metaPath = `${rootPath}/${dirEntry.name}/meta.xml`;
                if (!fs.existsSync(metaPath)) {
                    continue;
                }

                const resource = new Resource(`${rootPath}/${dirEntry.name}`, dirEntry.name);
                await resource.load();

                directories.push(resource);
            }
            
            return directories;
        } catch (error) {
            const errorMessage = (error as Error).message;
            vscode.window.showErrorMessage(`Error reading directories: ${errorMessage}`);
            return [];
        }
    }

    public static async getResourceItems(resources: Resource[], onlyWithExports: boolean = false): Promise<ResourceItem[]> {
        if (onlyWithExports) {
            return resources
                .filter(resource => resource.exports.length > 0)
                .map(resource => new ResourceItem(resource));
        }
        
        return resources.map(resource => new ResourceItem(resource));
    }

    public static async getActiveScript(): Promise<ResourceScript | null> {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return null;
        }

        const fullPath = editor.document.fileName;
        const resources = await ResourceTreeProvider.getResources();

        for (const resource of resources) {
            for (const script of resource.scripts) {
                if (pathCompare(script.fullPath, fullPath)) {
                    return script;
                }
            }
        }

        return null;
    }

    public static async getScriptByPath(path: string): Promise<ResourceScript | null> {
        const resources = await ResourceTreeProvider.getResources();

        for (const resource of resources) {
            for (const script of resource.scripts) {
                if (pathCompare(script.fullPath, path)) {
                    return script;
                }
            }
        }

        return null;
    }

    public static getActiveScriptCached(): ResourceScript | null {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return null;
        }

        const fullPath = editor.document.fileName;
        const resources = ResourceTreeProvider.getResourcesCached();

        for (const resource of resources) {
            for (const script of resource.scripts) {
                if (pathCompare(script.fullPath, fullPath)) {
                    return script;
                }
            }
        }

        return null;
    }

    public static getResourceByName(name: string): Resource | null {
        const resources = ResourceTreeProvider.getResourcesCached();
        return resources.find(resource => resource.name === name) || null;
    }
}