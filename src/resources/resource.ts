import * as vscode from 'vscode';
import * as fs from 'fs';
import { ResourceItem } from './resource-item';
import { DOMParser } from 'xmldom';
import { ResourceExport } from './resource-export';

export class Resource {
    public name: string;
    public fullPath: string;
    public path: string;
    public exports: ResourceExport[] = [];

    constructor(fullPath: string, path: string) {
        this.fullPath = fullPath;
        this.name = path.split('/').pop() || '';
        this.path = path;

        this.loadExports();
    }

    public toResourceItem(): ResourceItem {
        return new ResourceItem(this);
    }

    private loadExports() {
        const metaPath = `${this.fullPath}/meta.xml`;
        if (!fs.existsSync(metaPath)) {
            console.error(`Meta file not found: ${metaPath}`);
            return;
        }

        const meta = fs.readFileSync(metaPath, 'utf8');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(meta, 'text/xml');
        const exports = xmlDoc.getElementsByTagName('export');

        this.exports = Array.from(exports).map(exportElement => {
            const functionName = exportElement.getAttribute('function') || '';
            const returnType = exportElement.getAttribute('retval') || null;
            const parameters = (exportElement.getAttribute('params') || '').split(',');
            const description = exportElement.getAttribute('description') || null;

            return new ResourceExport(this, functionName, returnType, parameters, description);
        });
    }

    public static getResources(): Resource[] {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            return [];
        }

        const rootPath = workspaceFolders[0].uri.fsPath;
        try {
            const directories = fs.readdirSync(rootPath, { withFileTypes: true })
                .filter(dirEntry => dirEntry.isDirectory())
                .filter(dirEntry => fs.existsSync(`${rootPath}/${dirEntry.name}/meta.xml`))
                .map(directory => new Resource(`${rootPath}/${directory.name}`, directory.name));
            
            return directories;
        } catch (error) {
            const errorMessage = (error as Error).message;
            vscode.window.showErrorMessage(`Error reading directories: ${errorMessage}`);
            return [];
        }
    }

    public static getResourceItems(): ResourceItem[] {
        const resources = Resource.getResources();
        return resources.map(resource => new ResourceItem(resource));
    }
}