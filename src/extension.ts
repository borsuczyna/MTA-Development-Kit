import * as vscode from 'vscode';
import { ResourceTreeProvider } from './resources/view-provider';
import { ResourceExport } from './resources/export';
import { SnippetCompletionItemProvider } from './snippets/snippets';
import { SignatureHelpProvider } from './snippets/signatures';

function activate(context: vscode.ExtensionContext) {
    let disposables = ResourceExport.registerCommands(context);
    context.subscriptions.push(...disposables);

    // context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
    //     { language: 'lua' }, // Target language
    //     {
    //         provideCompletionItems(document, position, token, context) {
    //             let def = new vscode.CompletionItem('add', vscode.CompletionItemKind.Function);
    //             def.detail = "Scriptside: Server";
    //             def.documentation = new vscode.MarkdownString();
    //             def.documentation.appendCodeblock('function add(a, b)\n  return a + b\nend', 'lua');

    //             return [def];
    //         }
    //     }
    // ));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
        { language: 'lua' },
        new SnippetCompletionItemProvider()
    ));

    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(
        { language: 'lua' },
        new SignatureHelpProvider(),
        '(',
        ',',
        ' '
    ));

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