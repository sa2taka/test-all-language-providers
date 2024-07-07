import * as vscode from "vscode";

export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions
  ): vscode.ProviderResult<vscode.TextEdit[]> {
    const firstLine = document.lineAt(0);
    const lastLine = document.lineAt(document.lineCount - 1);
    const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
    const newText = document.getText().toUpperCase();
    return [vscode.TextEdit.replace(textRange, newText)];
  }
}
