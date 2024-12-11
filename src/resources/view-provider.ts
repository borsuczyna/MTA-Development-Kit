import * as vscode from 'vscode';
import { ResourceItem } from './item';
import { Resource } from './resource';

export class ResourceTreeProvider {
	private _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined | void> = new vscode.EventEmitter<vscode.TreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | void> = this._onDidChangeTreeData.event;
	
	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: ResourceItem): vscode.TreeItem {
		return element;
	}

	async getChildren(element?: ResourceItem): Promise<ResourceItem[]> {
		if (!element) {
			let items = await Resource.getResourceItems();
            if (items.length === 0) {
                return [new vscode.TreeItem('No resources found')];
            }

            return items;
		}
		
		return element.children || [];
	}
}