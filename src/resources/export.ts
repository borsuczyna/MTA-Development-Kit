import * as vscode from 'vscode';
import { firstLetterUppercase } from "../utils/firstLetterUppercase";
import { Resource } from "./resource";
import { FunctionParameter } from './parameter';
import { ResourceExportItem } from './export-item';
import { highlightCode } from '../utils/highlight';

export class ExportsSide extends vscode.TreeItem {
    children?: vscode.TreeItem[];

    constructor(type: string, exports: ResourceExport[]) {
        super(
            `${firstLetterUppercase(type.trim())} (${exports.length} exports)`,
            vscode.TreeItemCollapsibleState.Collapsed
        );

        this.children = exports.map(exportItem => exportItem.toTreeItem());
    }
}

export class ResourceExport {
    public parent: Resource;
    public functionName: string;
    public returnType: FunctionParameter;
    public parameters: FunctionParameter[];
    public description: string | null;
    public type: string;
    public path: string | null = null;
    public fullPath: string | null = null;
    public startLine: number | null = null;
    public endLine: number | null = null;

    constructor(parent: Resource, functionName: string, returnType: FunctionParameter, parameters: FunctionParameter[], description: string | null, type: string = 'shared') {
        this.parent = parent;
        this.functionName = functionName;
        this.returnType = returnType;
        this.parameters = parameters;
        this.description = description;
        this.type = type;
    }

    public toTreeItem(): ResourceExportItem {
        return new ResourceExportItem(this);
    }

    private static useExport(resourceName: string, functionName: string, returnType: FunctionParameter, parameters: FunctionParameter[]) {
        console.log('Use export', resourceName, functionName, returnType, parameters);
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
    
        let selection = editor.selection;
        let snippetString = new vscode.SnippetString();

        if (returnType.type && returnType.type !== 'void') {
            snippetString.appendText('local ');
            snippetString.appendPlaceholder(returnType.shortString());
            snippetString.appendText(' = ');
        }

        snippetString.appendText(`exports['${resourceName}']:${functionName}(`);

        parameters.forEach((param, index) => {
            snippetString.appendPlaceholder(param.toString());
            if (index < parameters.length - 1) {
                snippetString.appendText(', ');
            }
        });

        snippetString.appendText(')');
        editor.insertSnippet(snippetString, selection);
    }

    private static async goToDefinition(treeItem: ResourceExportItem) {
        if (!treeItem.item.fullPath || !treeItem.item.startLine || !treeItem.item.endLine) {
            vscode.window.showErrorMessage('Wasn\'t able to find the definition of the export.');
            return;
        }

        await highlightCode(treeItem.item.fullPath, treeItem.item.startLine!, treeItem.item.endLine! + 1);
    }

    private static printActiveScript() {
        var active = Resource.getActiveScript();
        console.log(active);
    }

    public static registerCommands(context: vscode.ExtensionContext): vscode.Disposable[] {
        return [
            vscode.commands.registerCommand('extension.useExport', this.useExport),
            vscode.commands.registerCommand('extension.exportGoToDefinition', this.goToDefinition),
            vscode.commands.registerCommand('extension.printActiveScript', this.printActiveScript)
        ];
    }
}