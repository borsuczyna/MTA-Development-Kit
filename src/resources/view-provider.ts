import * as vscode from 'vscode';
import { ResourceItem } from './resource-item';
import { Resource } from './resource';

export class ResourceTreeProvider {
	private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | void> = this._onDidChangeTreeData.event;
	private static _resources: Resource[] = [];

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: ResourceItem): vscode.TreeItem {
		return element;
	}

	async getChildren(element?: ResourceItem): Promise<ResourceItem[]> {
		if (!element) {
			ResourceTreeProvider._resources = await Resource.getResources();
			let items = await Resource.getResourceItems(ResourceTreeProvider._resources, true);
            if (items.length === 0) {
                return [new vscode.TreeItem('No exports found')];
            }

            return items;
		}
		
		return element.children || [];
	}

	public static getResources(): Resource[] {
		return this._resources;
	}
}