import * as vscode from "vscode";

export class DocumentHighlightProvider implements vscode.DocumentHighlightProvider {
  provideDocumentHighlights(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.DocumentHighlight[]> {
    const selectedText = document.getText(document.getWordRangeAtPosition(position));

    if (selectedText === "big") {
      // smallを含む文字列をハイライトする
      const text = document.getText();
      const highlights: vscode.DocumentHighlight[] = [];
      let match: RegExpExecArray | null;
      const regex = /small/g;
      while ((match = regex.exec(text))) {
        const start = document.positionAt(match.index);
        const end = document.positionAt(match.index + match[0].length);
        highlights.push(new vscode.DocumentHighlight(new vscode.Range(start, end), vscode.DocumentHighlightKind.Text));
      }
      return highlights;
    }
    return [];
  }
}
