import * as vscode from "vscode";

export class DocumentLinkProvider implements vscode.DocumentLinkProvider {
  provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentLink[]> {
    const links: vscode.DocumentLink[] = [];
    const regex = /sa2taka/g;
    const text = document.getText();
    let match;
    while ((match = regex.exec(text))) {
      const start = document.positionAt(match.index);
      const end = document.positionAt(match.index + match[0].length);
      const link = new vscode.DocumentLink(new vscode.Range(start, end), vscode.Uri.parse("https://github.com/sa2taka"));
      links.push(link);
    }
    return links;
  }
}
