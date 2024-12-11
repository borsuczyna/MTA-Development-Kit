import * as vscode from 'vscode';
import { ResourceExport } from "./export";

export class ResourceExportItem extends vscode.TreeItem {
    public item: ResourceExport;
    
    constructor(item: ResourceExport) {
        let returnType = item.returnType.type ? `${item.returnType.type} ` : '';
        let parameters = `(${item.parameters.map(param => param.toString()).join(', ')})`;
        let functionPreview = `${returnType}${item.functionName}${parameters}`;

        super(
            functionPreview,
            vscode.TreeItemCollapsibleState.None
        );

        let pathDescription = item.path ? ` in ${item.path} (${item.startLine}:${item.endLine})` : '';
        this.item = item;
        this.tooltip = `${item.description || ''}${pathDescription}`.trim();
        this.contextValue = 'export';

        this.command = {
            title: 'Show Description',
            command: 'extension.useExport',
            arguments: [item.parent.name, item.functionName, item.returnType, item.parameters],
        };
    }
}