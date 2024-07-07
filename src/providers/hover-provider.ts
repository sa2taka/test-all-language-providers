import * as vscode from "vscode";

export class HoverProvider implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    return new vscode.Hover(new vscode.MarkdownString("This is a hover message").appendCodeblock("const a = 'Hello World';", "typescript"));
  }
}
