import * as vscode from "vscode";

export class OnTypeFormattingEditorProvider implements vscode.OnTypeFormattingEditProvider {
  provideOnTypeFormattingEdits(
    document: vscode.TextDocument,
    position: vscode.Position,
    ch: string,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.TextEdit[]> {
    const text = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
    const textEdit = new vscode.TextEdit(new vscode.Range(new vscode.Position(position.line, 0), position), text.toUpperCase());
    return [textEdit];
  }
}
