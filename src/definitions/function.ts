import * as vscode from 'vscode';
import { Resource } from '../resources/resource';

export class FunctionDefinitionProvider implements vscode.DefinitionProvider {
    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const activeScript = await Resource.getScriptByPath(document.uri.fsPath);
        if (!activeScript) {
            return undefined;
        }

        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return undefined;
        }

        const selectedText = document.getText(wordRange);

        if (selectedText && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(selectedText)) {
            let call = activeScript.getCall(wordRange);
            if (!call || !call.definition) {
                return undefined;
            }

            return new vscode.Location(vscode.Uri.file(call.definition.parent.fullPath), new vscode.Range((call.definition.startLine || 1) - 1, 0, call.definition.endLine || 0, 0));
        }

        return undefined;
    }
}