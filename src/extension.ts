import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('stringifier.stringifySelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const selections = editor.selections;
        editor.edit(editBuilder => {
            for (const selection of selections) {
                const text = editor.document.getText(selection);
                // Escape backslashes, then double quotes, then replace newlines
                const escaped = text
                    .replace(/\\/g, '\\\\')
                    .replace(/"/g, '\\"')
                    .replace(/\n/g, '\\n');
                const stringified = `"${escaped}"`;
                editBuilder.replace(selection, stringified);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}