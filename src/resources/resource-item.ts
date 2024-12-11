import * as vscode from 'vscode';
import { Resource } from './resource';

export class ResourceItem extends vscode.TreeItem {
	children?: vscode.TreeItem[];

    constructor(resource: Resource) {
        super(
            resource.name,
            vscode.TreeItemCollapsibleState.Collapsed
        );
    }
}