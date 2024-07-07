import * as vscode from "vscode";

export class DocumentSymbolProvider implements vscode.DocumentSymbolProvider {
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {
    // ""で囲まれている文字列をDocumentSymbolとして返す
    const symbols: vscode.DocumentSymbol[] = [];
    const regExp = /".*?"/g;
    let match;
    while ((match = regExp.exec(document.getText()))) {
      const symbol = new vscode.DocumentSymbol(
        match[0].slice(1, -1),
        "",
        vscode.SymbolKind.String,
        new vscode.Range(document.positionAt(match.index + 1), document.positionAt(match.index + match[0].length - 1)),
        new vscode.Range(document.positionAt(match.index + 1), document.positionAt(match.index + match[0].length - 1))
      );
      symbols.push(symbol);
    }
    return symbols;
  }
}
