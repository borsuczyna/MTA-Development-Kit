import * as vscode from 'vscode';
import { Resource } from './resource';
import { ResourceExport } from './resource-export';
import { firstLetterUppercase } from '../utils/firstLetterUppercase';

export class ResourceItem extends vscode.TreeItem {
	children?: ExportsSide[];

    constructor(resource: Resource) {
        super(
            resource.name,
            vscode.TreeItemCollapsibleState.Collapsed
        );

        let types = new Set(resource.exports.map(exportItem => exportItem.type));
        this.children = Array.from(types).map(type => {
            return new ExportsSide(type, resource.exports.filter(exportItem => exportItem.type === type));
        });

        this.tooltip = `Resource ${resource.name} (${resource.exports.length} exports)`;
    }
}

class ExportsSide extends vscode.TreeItem {
    children?: vscode.TreeItem[];

    constructor(type: string, exports: ResourceExport[]) {
        super(
            `${firstLetterUppercase(type.trim())} (${exports.length} exports)`,
            vscode.TreeItemCollapsibleState.Collapsed
        );

        this.children = exports.map(exportItem => exportItem.toTreeItem());
    }
}