import * as vscode from "vscode";

export class SignatureHelpProvider implements vscode.SignatureHelpProvider {
  provideSignatureHelp(): vscode.ProviderResult<vscode.SignatureHelp> {
    const signatureHelp = new vscode.SignatureHelp();
    const signatureInformation = new vscode.SignatureInformation("This is a signature label", "This is a signature documentation");
    signatureHelp.signatures = [signatureInformation];
    return signatureHelp;
  }
}
