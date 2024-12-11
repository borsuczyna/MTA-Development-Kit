import { Resource } from "./resource";
import * as vscode from 'vscode';

export class ResourceExport {
    public parent: Resource;
    public functionName: string;
    public returnType: string | null;
    public parameters: string[];
    public description: string | null;
    public type: string;

    constructor(parent: Resource, functionName: string, returnType: string | null, parameters: string[], description: string | null, type: string = 'shared') {
        this.parent = parent;
        this.functionName = functionName;
        this.returnType = returnType;
        this.parameters = parameters;
        this.description = description;
        this.type = type;
    }

    public toTreeItem(): vscode.TreeItem {
        let returnType = this.returnType ? `${this.returnType} ` : '';
        let parameters = `(${this.parameters.join(', ')})`;
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
        return vscode.commands.registerCommand('extension.useExport', (resourceName: string, functionName: string, returnType: string, parameters: string[]) => {
            // get current editor
            let editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }
        
            // get current selection
            let selection = editor.selection;
        
            // insert snippet
            let snippetString = new vscode.SnippetString();
    
            if (returnType && returnType !== 'void') {
                snippetString.appendText('local ');
                snippetString.appendPlaceholder('result');
                snippetString.appendText(' = ');
            }
    
            snippetString.appendText(`exports['${resourceName}']:${functionName}(`);
    
            parameters.forEach((param, index) => {
                snippetString.appendPlaceholder(param);
                if (index < parameters.length - 1) {
                    snippetString.appendText(', ');
                }
            });
    
            snippetString.appendText(')');
            editor.insertSnippet(snippetString, selection);
        });
    }
}