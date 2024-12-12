import * as vscode from 'vscode';
import { ResourceItem } from './resource-item';
import { Resource } from './resource';

export class ResourceTreeProvider {
	private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | void> = this._onDidChangeTreeData.event;
	private static _resources: Resource[] | undefined;

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: ResourceItem): vscode.TreeItem {
		return element;
	}

	async getChildren(element?: ResourceItem): Promise<ResourceItem[]> {
		if (!element) {
			await ResourceTreeProvider.loadResources();
			if (!ResourceTreeProvider._resources) {
				return [new vscode.TreeItem('Failed to load resources, open any directory in the workspace')];
			}

			let items = await Resource.getResourceItems(ResourceTreeProvider._resources, true);
            if (items.length === 0) {
                return [new vscode.TreeItem('No exports found')];
            }

            return items;
		}
		
		return element.children || [];
	}

	private static async loadResources() {
		this._resources = await Resource.getResources();
	}

	public static async getResources(): Promise<Resource[]> {
		if (!this._resources) {
			await this.loadResources();
		}

		if (!this._resources) {
			return [];
		}

		return this._resources;
	}

	public static getResourcesCached(): Resource[] {
		return this._resources || [];
	}
}