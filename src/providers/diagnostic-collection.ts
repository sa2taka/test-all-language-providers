import * as vscode from "vscode";

export const activateDiagnosticCollection = (createDiagnosticCollection: vscode.DiagnosticCollection) => {
  vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (editor?.document.fileName) {
      const firstLineCharacters = editor.document.lineAt(0).text.length;
      const secondLineCharacters = editor.document.lineAt(1).text.length;
      const thirdLineCharacters = editor.document.lineAt(2).text.length;
      const fourthLineCharacters = editor.document.lineAt(3).text.length;

      createDiagnosticCollection.set(vscode.Uri.parse(editor.document.fileName), [
        {
          code: "diagnostic-code",
          message: "This is a diagnostic error",
          range: new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, firstLineCharacters)),
          severity: vscode.DiagnosticSeverity.Error,
          source: "diagnostic-source",
        },
        {
          code: "diagnostic-code",
          message: "This is a diagnostic warning",
          range: new vscode.Range(new vscode.Position(1, 0), new vscode.Position(1, secondLineCharacters)),
          severity: vscode.DiagnosticSeverity.Warning,
          source: "diagnostic-source",
        },
        {
          code: "diagnostic-code",
          message: "This is a diagnostic information",
          range: new vscode.Range(new vscode.Position(2, 0), new vscode.Position(2, thirdLineCharacters)),
          severity: vscode.DiagnosticSeverity.Information,
          source: "diagnostic-source",
        },
        {
          code: "diagnostic-code",
          message: "This is a diagnostic hint",
          range: new vscode.Range(new vscode.Position(3, 0), new vscode.Position(3, fourthLineCharacters)),
          severity: vscode.DiagnosticSeverity.Hint,
          source: "diagnostic-source",
        },
      ]);
    }
  });
};
