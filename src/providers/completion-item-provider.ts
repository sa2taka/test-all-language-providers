import * as vscode from "vscode";

export class CompletionItemProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const completionItem1 = new vscode.CompletionItem("Hello World");
    completionItem1.detail = "This is a detail";
    completionItem1.documentation = new vscode.MarkdownString("This is a documentation");
    completionItem1.kind = vscode.CompletionItemKind.Text;
    completionItem1.insertText = "Hello World";

    const completionItem2 = new vscode.CompletionItem("Bye World");
    completionItem2.detail = "This is a detail";
    completionItem2.documentation = new vscode.MarkdownString("This is a documentation");
    completionItem2.kind = vscode.CompletionItemKind.Function;
    completionItem2.insertText = "Bye World";

    return [completionItem1, completionItem2];
  }
}
