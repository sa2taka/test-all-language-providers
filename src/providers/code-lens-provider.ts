import * as vscode from "vscode";

export class CodeLensProvider implements vscode.CodeLensProvider {
  provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeLens[]> {
    const codeLens = new vscode.CodeLens(new vscode.Range(0, 0, 0, 0), {
      title: "CodeLens",
      command: "extension.lensAction",
    });
    return [codeLens];
  }
}
