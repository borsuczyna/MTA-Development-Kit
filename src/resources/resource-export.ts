import { Resource } from "./resource";
import * as vscode from 'vscode';

export class ResourceExport {
    public parent: Resource;
    public functionName: string;
    public returnType: string | null;
    public parameters: string[];
    public description: string | null;

    constructor(parent: Resource, functionName: string, returnType: string | null, parameters: string[], description: string | null) {
        this.parent = parent;
        this.functionName = functionName;
        this.returnType = returnType;
        this.parameters = parameters;
        this.description = description;

        vscode.window.showInformationMessage(`Export: ${functionName}`);
        console.log(`Export: ${functionName}`);
    }

    public toTreeItem(): vscode.TreeItem {
        let returnType = this.returnType ? `${this.returnType} ` : '';
        let parameters = this.parameters.length > 0 ? `(${this.parameters.join(', ')})` : '';
        let functionPreview = `${returnType}${this.functionName}${parameters}`;

        let treeItem = new vscode.TreeItem(
            functionPreview,
            this.returnType ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Collapsed,
        );

        treeItem.tooltip = this.description || '';
        treeItem.command = {
            title: 'Show Description',
            command: 'extension.showDescription',
            arguments: [this.description],
        };

        return treeItem;
    }
}