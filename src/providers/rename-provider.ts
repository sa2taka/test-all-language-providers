import * as vscode from "vscode";

export class RenameProvider implements vscode.RenameProvider {
  // // author: が先頭にある行の名前の部分を抜き出すための正規表現
  private authorRegexp = /(?<=\s*\/\/\s*author:\s*)([\S].*)$/;

  prepareRename(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Range> {
    const selectedLineText = document.lineAt(position.line).text;
    const match = this.authorRegexp.exec(selectedLineText);
    if (!match) {
      return;
    }

    return new vscode.Range(position.line, match.index, position.line, match.index + match[1].length);
  }

  provideRenameEdits(
    document: vscode.TextDocument,
    position: vscode.Position,
    newName: string,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.WorkspaceEdit> {
    // ファイルの中の author から始まる行のうち、変換対象と同じ名前の行を変換する
    const selectedLineText = document.lineAt(position.line).text;
    const match = this.authorRegexp.exec(selectedLineText);
    if (!match) {
      return;
    }
    const oldName = match[1];

    const workspaceEdit = new vscode.WorkspaceEdit();
    const lineCount = document.lineCount;
    for (let i = 0; i < lineCount; i++) {
      const line = document.lineAt(i);
      const match = this.authorRegexp.exec(line.text);
      if (match && match[1] === oldName) {
        workspaceEdit.replace(document.uri, line.range, line.text.replace(match[1], newName));
      }
    }
    return workspaceEdit;
  }
}
