import * as vscode from "vscode";

export class DocumentRangeFormattingEditProvider implements vscode.DocumentRangeFormattingEditProvider {
  provideDocumentRangeFormattingEdits(
    document: vscode.TextDocument,
    range: vscode.Range,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.TextEdit[]> {
    const text = document.getText(range);
    const textEdit = new vscode.TextEdit(range, text.toUpperCase());
    return [textEdit];
  }
}
