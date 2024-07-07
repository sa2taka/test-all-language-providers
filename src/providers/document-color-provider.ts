import * as vscode from "vscode";

const primaryColor = new vscode.Color(0x00 / 0xff, 0x80 / 0xff, 0x80 / 0xff, 1);
const secondaryColor = new vscode.Color(0x80 / 0xff, 0x00 / 0xff, 0x80 / 0xff, 1);

export class DocumentColorProvider implements vscode.DocumentColorProvider {
  provideDocumentColors(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.ColorInformation[]> {
    const colors: vscode.ColorInformation[] = [];
    const regExp = /(primary|secondary)/g;
    let match;
    while ((match = regExp.exec(document.getText()))) {
      const color = match[0] === "primary" ? primaryColor : secondaryColor;
      const range = new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length));
      colors.push(new vscode.ColorInformation(range, color));
    }
    return colors;
  }

  provideColorPresentations(
    color: vscode.Color,
    context: { document: vscode.TextDocument; range: vscode.Range },
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.ColorPresentation[]> {
    return [new vscode.ColorPresentation("primary"), new vscode.ColorPresentation("secondary")];
  }
}
