import * as vscode from 'vscode';
import { firstLetterUppercase } from "../utils/firstLetterUppercase";
import { Resource } from "./resource";
import { FunctionParameter } from './parameter';

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

    constructor(parent: Resource, functionName: string, returnType: FunctionParameter, parameters: FunctionParameter[], description: string | null, type: string = 'shared') {
        this.parent = parent;
        this.functionName = functionName;
        this.returnType = returnType;
        this.parameters = parameters;
        this.description = description;
        this.type = type;
    }

    public toTreeItem(): vscode.TreeItem {
        let returnType = this.returnType.type ? `${this.returnType.type} ` : '';
        let parameters = `(${this.parameters.map(param => param.toString()).join(', ')})`;
        let functionPreview = `${returnType}${this.functionName}${parameters}`;

        let treeItem = new vscode.TreeItem(
            functionPreview,
            vscode.TreeItemCollapsibleState.None,
        );

        treeItem.tooltip = this.description || '';
        treeItem.command = {
            title: 'Show Description',
            command: 'extension.useExport',
            arguments: [this.parent.name, this.functionName, this.returnType, this.parameters],
        };

        return treeItem;
    }

    public static registerCommands(context: vscode.ExtensionContext): vscode.Disposable {
        return vscode.commands.registerCommand('extension.useExport', (resourceName: string, functionName: string, returnType: FunctionParameter, parameters: FunctionParameter[]) => {
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
        });
    }
}