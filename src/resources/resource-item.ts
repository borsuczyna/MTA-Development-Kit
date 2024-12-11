import * as vscode from 'vscode';
import { Resource } from './resource';

export class ResourceItem extends vscode.TreeItem {
	children?: vscode.TreeItem[];

    constructor(resource: Resource) {
        super(
            resource.name,
            vscode.TreeItemCollapsibleState.Collapsed
        );

        this.children = resource.exports.map(exportItem => exportItem.toTreeItem());
        this.tooltip = `Resource ${resource.name} (${resource.exports.length} exports)`;
    }
}