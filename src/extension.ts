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
                // Escape backslashes first, then other special characters
                const escaped = text
                    .replace(/\\/g, '\\\\')     // Backslashes must be escaped first
                    .replace(/"/g, '\\"')       // Double quotes
                    .replace(/\r/g, '\\r')      // Carriage returns
                    .replace(/\n/g, '\\n')      // Newlines
                    .replace(/\t/g, '\\t')      // Tabs
                    .replace(/\b/g, '\\b')      // Backspace
                    .replace(/\f/g, '\\f')      // Form feed
                    .replace(/\v/g, '\\v');     // Vertical tab
                const stringified = `"${escaped}"`;
                editBuilder.replace(selection, stringified);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}