import * as vscode from 'vscode';
import { ResourceTreeProvider } from './resources/view-provider';
import { ResourceExport } from './resources/export';
import { SnippetCompletionItemProvider } from './snippets/snippets';
import { SignatureHelpProvider } from './snippets/signatures';
import { FunctionDefinitionProvider } from './definitions/function';
import { ErrorLens } from './error-lens/error-lens';

function activate(context: vscode.ExtensionContext) {
    let disposables = ResourceExport.registerCommands(context);
    context.subscriptions.push(...disposables);
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
        { language: 'mtalua' },
        new SnippetCompletionItemProvider()
    ));

    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(
        { language: 'mtalua' },
        new SignatureHelpProvider(), '(', ')', ',', ' '
    ));

    context.subscriptions.push(vscode.languages.registerDefinitionProvider(
        { language: 'mtalua' },
        new FunctionDefinitionProvider()
    ));

    context.subscriptions.push(ErrorLens.activate());

    const resourceTreeProvider = new ResourceTreeProvider();
    vscode.window.registerTreeDataProvider('exportsView', resourceTreeProvider);

    // Watch for changes in the workspace
    const watcher = vscode.workspace.createFileSystemWatcher('**/*', false, false, false);
    watcher.onDidCreate(() => resourceTreeProvider.refresh());
    watcher.onDidDelete(() => resourceTreeProvider.refresh());
    watcher.onDidChange(() => resourceTreeProvider.refresh());
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};