import * as vscode from 'vscode';
import { Resource } from './resource';
import { ExportsSide } from './export';

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