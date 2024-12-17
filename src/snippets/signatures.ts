import * as vscode from 'vscode';
import { Function, FunctionSnippet } from './function';
import { serverSnippets } from './data/server';
import { sharedSnippets } from './data/shared';
import { clientSnippets } from './data/client';
import { ScriptSide } from '../enums/script-side';
import { Resource } from '../resources/resource';

export class SignatureHelpProvider implements vscode.SignatureHelpProvider {
    private snippets: FunctionSnippet[] = [];
    
    constructor() {
        const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        statusBarItem.text = '$(sync~spin) Loading signatures...';
        statusBarItem.show();

        this.loadSnippets(clientSnippets, ScriptSide.Client);
        this.loadSnippets(sharedSnippets, ScriptSide.Shared);
        this.loadSnippets(serverSnippets, ScriptSide.Server);

        statusBarItem.hide();
    }

    private loadSnippets(snippets: Function[], scriptSide: ScriptSide) {
        snippets.forEach((snippet: Function) => {
            let snippetItem = new FunctionSnippet(snippet, scriptSide);
            this.snippets.push(snippetItem);
        });
    }

    public provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {
        const lineText = document.lineAt(position).text;
        const openingParenIndex = lineText.lastIndexOf('(', position.character);

        if (openingParenIndex === -1) {
            return null;
        }

        // Extract function name from the text before the cursor
        const textBeforeCursor = lineText.substring(0, position.character);
        const functionCallMatch = /\w+\s*\(/.exec(textBeforeCursor);
        if (!functionCallMatch) {
            return null;
        }

        const functionName = functionCallMatch[0].replace(/\s*\($/, '');
        let activeScript = Resource.getActiveScriptCached();
        let snippets = this.snippets;

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

        const snippet = snippets.find(s => s.func.functionName === functionName);
        if (!snippet) {
            return null;
        }

        const signatureHelp = new vscode.SignatureHelp();
        signatureHelp.signatures.push(snippet.signature);
        signatureHelp.activeSignature = 0;
        signatureHelp.activeParameter = countCommas(textBeforeCursor);

        if (signatureHelp.activeParameter === -1) {
            return null;
        }

        return signatureHelp;
    }
}

function countCommas(text: string): number {
    let count = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inLongBracket = false;
    let bracketLevel = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextTwo = text.substring(i, i + 2);

        if (char === ')' && !inSingleQuote && !inDoubleQuote && !inLongBracket) {
            return -1;
        } else if (inLongBracket) {
            // Check for end of long bracket
            if (nextTwo === ']]') {
                inLongBracket = false;
                bracketLevel--;
                i++; // Skip next character
                continue;
            }
        } else if (char === '[' && text[i + 1] === '[') {
            inLongBracket = true;
            bracketLevel++;
            i++;
            continue;
        } else if (!inSingleQuote && !inDoubleQuote) {
            if (char === "'") {
                inSingleQuote = true;
            }
            else if (char === '"') {
                inDoubleQuote = true;
            }
        } else if (inSingleQuote && char === "'") {
            inSingleQuote = false;
        } else if (inDoubleQuote && char === '"') {
            inDoubleQuote = false;
        } else {
            continue;
        }

        // Count commas only when not inside a string or long bracket
        if (!inSingleQuote && !inDoubleQuote && !inLongBracket && char === ',') {
            count++;
        }
    }

    return count;
}