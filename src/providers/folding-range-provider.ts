import * as vscode from "vscode";

export class FoldingRangeProvider implements vscode.FoldingRangeProvider {
  provideFoldingRanges(
    document: vscode.TextDocument,
    context: vscode.FoldingContext,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.FoldingRange[]> {
    // private ... = ...; で表される行を全て閉じれるようにする
    const targetLineRegexp = /\s*private\s.*=.*;?/;
    const ranges: vscode.FoldingRange[] = [];
    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      if (targetLineRegexp.test(line.text) || line.text.trim() === "") {
        const start = line.range.start;
        let end = new vscode.Position(i + 1, 0);
        while (i + 1 < document.lineCount) {
          if (!targetLineRegexp.test(document.lineAt(i + 1).text) && line.text.trim() !== "") {
            break;
          }
          i++;
          end = new vscode.Position(i + 1, 0);
        }
        ranges.push(new vscode.FoldingRange(start.line, end.line - 1, vscode.FoldingRangeKind.Region));
      }
    }
    return ranges;
  }
}
