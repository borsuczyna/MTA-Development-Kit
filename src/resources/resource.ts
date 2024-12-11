import * as vscode from 'vscode';
import * as fs from 'fs';
import { ResourceItem } from './resource-item';

export class Resource
{
    public name: string;
    public path: string;

    constructor(path: string) {
        this.name = path.split('/').pop() || '';
        this.path = path;
    }

    public toResourceItem(): ResourceItem {
        return new ResourceItem(this);
    }

    public static getResources(): Resource[] {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            return [];
        }

        const rootPath = workspaceFolders[0].uri.fsPath;
        try {
            const directories = fs.readdirSync(rootPath, { withFileTypes: true })
                .filter(dirEntry => dirEntry.isDirectory())
                .map(directory => new Resource(directory.name));
            
            return directories;
        } catch (error) {
            const errorMessage = (error as Error).message;
            vscode.window.showErrorMessage(`Error reading directories: ${errorMessage}`);
            return [];
        }
    }

    public static getResourceItems(): ResourceItem[] {
        const resources = Resource.getResources();
        return resources.map(resource => new ResourceItem(resource));
    }
}