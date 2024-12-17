import * as vscode from 'vscode';

export class FunctionDefinitionProvider implements vscode.DefinitionProvider {
    provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return undefined;
        }

        const selectedText = document.getText(wordRange);

        if (selectedText && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(selectedText)) {
            let start = wordRange.start.character - 1;
            let text = document.getText(new vscode.Range(new vscode.Position(0, 0), wordRange.end));
            let lastWord = text.split(/\s+/).map(w => w.trim()).filter(w => w).slice(0, -1).pop();
            console.log(lastWord);

            return new vscode.Location(document.uri, wordRange);
        }

        return undefined;
    }
}