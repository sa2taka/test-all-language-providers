import * as vscode from "vscode";

export class ReferenceProvider implements vscode.ReferenceProvider {
  provideReferences(
    document: vscode.TextDocument,
    position: vscode.Position,
    context: vscode.ReferenceContext,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Location[]> {
    const workspaceRoot = vscode.workspace.workspaceFolders?.[0];

    if (workspaceRoot) {
      const uri = vscode.Uri.joinPath(workspaceRoot.uri, "package.json");
      return [new vscode.Location(uri, new vscode.Position(0, 0))];
    }
  }
}
