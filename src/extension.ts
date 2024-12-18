import * as vscode from 'vscode';
import { ResourceTreeProvider } from './resources/view-provider';
import { ResourceExport } from './resources/export';
import { SnippetCompletionItemProvider } from './snippets/snippets';
import { SignatureHelpProvider } from './snippets/signatures';
import { FunctionDefinitionProvider } from './definitions/function';
import { ErrorLens } from './error-lens/error-lens';
import { Resource } from './resources/resource';

function activate(context: vscode.ExtensionContext) {
    // Resource export commands
    context.subscriptions.push(...ResourceExport.registerCommands(context));

    // Snippets
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
        { language: 'mtalua' },
        new SnippetCompletionItemProvider(), ':'
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

    const resourceTreeProvider = new ResourceTreeProvider();
    vscode.window.registerTreeDataProvider('exportsView', resourceTreeProvider);

    const refresh = async () => {
        resourceTreeProvider.refresh();
        await ResourceTreeProvider.loadResources();

        const document = vscode.window.activeTextEditor?.document;
        if (document) {
            SnippetCompletionItemProvider.onActiveFileChange(document);
        }
    };

    // Watch for changes in the workspace
    const watcher = vscode.workspace.createFileSystemWatcher('**/*', false, false, false);
    watcher.onDidCreate(refresh);
    watcher.onDidDelete(refresh);
    watcher.onDidChange(refresh);
    
    // Document change
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(refresh));

    // On file open
    refresh();
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};