import * as vscode from 'vscode';
import { ResourceTreeProvider } from './resources/view-provider';
import { ResourceExport } from './resources/resource-export';

function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(ResourceExport.registerCommands(context));

    const resourceTreeProvider = new ResourceTreeProvider();
    vscode.window.registerTreeDataProvider('exportsView', resourceTreeProvider);

    // Watch for changes in the workspace
    const watcher = vscode.workspace.createFileSystemWatcher('**/*.xml', false, false, false);
    watcher.onDidCreate(() => resourceTreeProvider.refresh());
    watcher.onDidDelete(() => resourceTreeProvider.refresh());
    watcher.onDidChange(() => resourceTreeProvider.refresh());
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};