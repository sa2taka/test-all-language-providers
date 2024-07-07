import * as vscode from "vscode";
export class DefinitionProvider implements vscode.DefinitionProvider {
  provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Definition | vscode.DefinitionLink[]> {
    const workspaceRoot = vscode.workspace.workspaceFolders?.[0];

    if (workspaceRoot) {
      const uri = vscode.Uri.joinPath(workspaceRoot.uri, "package.json");
      return new vscode.Location(uri, new vscode.Position(0, 0));
    }
  }
}
