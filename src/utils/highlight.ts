import * as vscode from 'vscode';

export async function highlightCode(file: string, startLine: number, endLine: number) {
    let uri = vscode.Uri.file(file);
    let document = await vscode.workspace.openTextDocument(uri);
    let editor = await vscode.window.showTextDocument(document);

    editor.revealRange(
        new vscode.Range(startLine - 1, 0, endLine - 1, 0),
        vscode.TextEditorRevealType.InCenter
    );

    // Highlight the range to make it blink
    const decorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255,180,0,0.2)' // yellow highlight
    });

    const range = new vscode.Range(startLine - 1, 0, endLine - 1, 0);
    editor.setDecorations(decorationType, [range]);

    // Remove the highlight after a short delay
    setTimeout(() => {
        decorationType.dispose();
    }, 500);
}