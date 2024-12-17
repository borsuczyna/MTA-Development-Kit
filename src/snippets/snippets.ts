import * as vscode from 'vscode';
import { Function, FunctionSnippet } from './function';
import { ScriptSide } from '../enums/script-side';
import { clientSnippets } from './data/client';
import { sharedSnippets } from './data/shared';
import { serverSnippets } from './data/server';
import { Resource } from '../resources/resource';

export class SnippetCompletionItemProvider implements vscode.CompletionItemProvider {
    private static snippets: FunctionSnippet[] = [];

    constructor() {
        const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        statusBarItem.text = '$(sync~spin) Loading snippets...';
        statusBarItem.show();

        this.loadSnippets(clientSnippets, ScriptSide.Client);
        this.loadSnippets(sharedSnippets, ScriptSide.Shared);
        this.loadSnippets(serverSnippets, ScriptSide.Server);

        statusBarItem.hide();
    }

    private loadSnippets(snippets: Function[], scriptSide: ScriptSide) {
        snippets.forEach((snippet: Function) => {
            let snippetItem = new FunctionSnippet(snippet, scriptSide);
            SnippetCompletionItemProvider.snippets.push(snippetItem);
        });
    }

    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        let activeScript = await Resource.getActiveScript();
        let snippets = SnippetCompletionItemProvider.snippets;

        if (activeScript) {
            activeScript.setCode(document.getText());
        }
        
        // Neighbour script snippets
        if (activeScript) {
            let functions = activeScript.parent.getFunctions(false, activeScript.fullPath);
            let neighbourSnippets = functions.map(func => func.toSnippetFunction());
            snippets = snippets.concat(neighbourSnippets);
        }

        // Filter snippets
        if (activeScript) {
            let currentScriptSide = activeScript.type;
            snippets = FunctionSnippet.filterSnippets(snippets, currentScriptSide);
        } else {
            snippets = FunctionSnippet.filterSnippets(snippets, ScriptSide.Shared);
        }

        return snippets.map(snippet => snippet.completionItem);
    }

    public static async onActiveFileChange(document: vscode.TextDocument) {
        let activeScript = await Resource.getActiveScript();

        if (activeScript) {
            activeScript.setCode(document.getText());
        }
    }

    public static getFunctions(scriptSide: ScriptSide): FunctionSnippet[] {
        if (scriptSide === ScriptSide.Client || scriptSide === ScriptSide.Server) {
            return SnippetCompletionItemProvider.snippets.filter(snippet => snippet.scriptSide === scriptSide || snippet.scriptSide === ScriptSide.Shared);
        } else {
            return SnippetCompletionItemProvider.snippets.filter(snippet => snippet.scriptSide === scriptSide);
        }
    }
}