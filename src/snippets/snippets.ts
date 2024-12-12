import * as vscode from 'vscode';
import { Function, FunctionSnippet } from './function';
import { ScriptSide } from '../enums/script-side';
import { clientSnippets } from './data/client';
import { sharedSnippets } from './data/shared';
import { serverSnippets } from './data/server';

export class SnippetCompletionItemProvider implements vscode.CompletionItemProvider {
    private snippets: FunctionSnippet[] = [];

    constructor() {
        console.log('Loading snippets...');
        this.loadSnippets(clientSnippets, ScriptSide.Client);
        this.loadSnippets(sharedSnippets, ScriptSide.Shared);
        this.loadSnippets(serverSnippets, ScriptSide.Server);
    }

    private loadSnippets(snippets: Function[], scriptSide: ScriptSide) {
        snippets.forEach((snippet: Function) => {
            let snippetItem = new FunctionSnippet(snippet, scriptSide);
            this.snippets.push(snippetItem);
        });
    }

    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
        return this.snippets.map(snippet => snippet.completionItem);
    }
}