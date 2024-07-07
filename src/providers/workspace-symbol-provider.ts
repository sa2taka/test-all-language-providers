import * as vscode from "vscode";

export class WorkspaceSymbolProvider implements vscode.WorkspaceSymbolProvider {
  provideWorkspaceSymbols(query: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SymbolInformation[]> {
    // ワークスペース内の全てのシンボルを返す
    const symbols: vscode.SymbolInformation[] = [];
    for (const document of vscode.workspace.textDocuments) {
      const regExp = /".*?"/g;
      let match;
      while ((match = regExp.exec(document.getText()))) {
        const symbol = new vscode.SymbolInformation(
          match[0].slice(1, -1),
          vscode.SymbolKind.String,
          "",
          new vscode.Location(
            document.uri,
            new vscode.Range(document.positionAt(match.index + 1), document.positionAt(match.index + match[0].length - 1))
          )
        );
        symbols.push(symbol);
      }
    }
    return symbols;
  }
}
