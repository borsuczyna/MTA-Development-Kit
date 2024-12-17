import * as vscode from 'vscode';
import { ResourceTreeProvider } from './resources/view-provider';
import { ResourceExport } from './resources/export';
import { SnippetCompletionItemProvider } from './snippets/snippets';
import { SignatureHelpProvider } from './snippets/signatures';
import { FunctionDefinitionProvider } from './definitions/function';
import { ErrorLens } from './error-lens/error-lens';

function activate(context: vscode.ExtensionContext) {
    // Resource export commands
    context.subscriptions.push(...ResourceExport.registerCommands(context));

    // Snippets
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
        { language: 'mtalua' },
        new SnippetCompletionItemProvider()
    ));

    // Signature
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(
        { language: 'mtalua' },
        new SignatureHelpProvider(), '(', ')', ',', ' '
    ));

    // Definitions
    context.subscriptions.push(vscode.languages.registerDefinitionProvider(
        { language: 'mtalua' },
        new FunctionDefinitionProvider()
    ));

    // Error lens
    context.subscriptions.push(ErrorLens.activate());

    // Document change
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(SnippetCompletionItemProvider.onActiveFileChange));

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