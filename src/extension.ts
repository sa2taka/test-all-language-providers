import * as vscode from "vscode";
import { activateDiagnosticCollection } from "./providers/diagnostic-collection";
import { CompletionItemProvider } from "./providers/completion-item-provider";
import { HoverProvider } from "./providers/hover-provider";
import { SignatureHelpProvider } from "./providers/signature-help-provider";
import { DefinitionProvider } from "./providers/definition-provider";
import { TypeDefinitionProvider } from "./providers/type-definition-provider";
import { ImplementationProvider } from "./providers/implementation-provider";
import { ReferenceProvider } from "./providers/reference-provider";
import { DocumentHighlightProvider } from "./providers/document-highlight-provider";
import { DocumentSymbolProvider } from "./providers/document-symbol-provider";
import { CodeActionProvider } from "./providers/code-action-provider";
import { WorkspaceSymbolProvider } from "./providers/workspace-symbol-provider";
import { CodeLensProvider } from "./providers/code-lens-provider";
import { DocumentLinkProvider } from "./providers/document-link-provider";
import { DocumentColorProvider } from "./providers/document-color-provider";
import { DocumentFormattingEditProvider } from "./providers/document-formatting-edit-provider";
import { DocumentRangeFormattingEditProvider } from "./providers/document-range-formatting-edit-provider";
import { OnTypeFormattingEditorProvider } from "./providers/on-type-formatting-editor-provider";
import { RenameProvider } from "./providers/rename-provider";
import { FoldingRangeProvider } from "./providers/folding-range-provider";

export function activate(context: vscode.ExtensionContext) {
  // const createDiagnosticCollection = vscode.languages.createDiagnosticCollection("my diagnostic");
  // activateDiagnosticCollection(createDiagnosticCollection);

  // const registerCompletionItemProvider = vscode.languages.registerCompletionItemProvider(
  //   { language: "typescript", scheme: "file" },
  //   new CompletionItemProvider()
  // );

  // const registerHoverProvider = vscode.languages.registerHoverProvider({ language: "typescript", scheme: "file" }, new HoverProvider());
  // const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
  //   { language: "typescript", scheme: "file" },
  //   new SignatureHelpProvider()
  // );
  // const definitionProvider = vscode.languages.registerDefinitionProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DefinitionProvider()
  // );
  // const typeDefinitionProvider = vscode.languages.registerTypeDefinitionProvider(
  //   { language: "typescript", scheme: "file" },
  //   new TypeDefinitionProvider()
  // );
  // const implementationProvider = vscode.languages.registerImplementationProvider(
  //   { language: "typescript", scheme: "file" },
  //   new ImplementationProvider()
  // );
  // const referencesProvider = vscode.languages.registerReferenceProvider(
  //   { language: "typescript", scheme: "file" },
  //   new ReferenceProvider()
  // );

  // const documentHighlightProvider = vscode.languages.registerDocumentHighlightProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DocumentHighlightProvider()
  // );

  // const documentSymbolProvider = vscode.languages.registerDocumentSymbolProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DocumentSymbolProvider()
  // );
  // const workspaceSymbolProvider = vscode.languages.registerWorkspaceSymbolProvider(new WorkspaceSymbolProvider());

  // const codeActionProvider = vscode.languages.registerCodeActionsProvider(
  //   { language: "typescript", scheme: "file" },
  //   new CodeActionProvider()
  // );

  // const codeLensProvider = vscode.languages.registerCodeLensProvider({ language: "typescript", scheme: "file" }, new CodeLensProvider());
  // const codeLensAction = vscode.commands.registerCommand("extension.lensAction", () => {
  //   vscode.window.showInformationMessage("CodeLens was clicked");
  // });

  // const documentLinkProvider = vscode.languages.registerDocumentLinkProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DocumentLinkProvider()
  // );

  // const documentColorProvider = vscode.languages.registerColorProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DocumentColorProvider()
  // );

  // const documentFormattingEditProvider = vscode.languages.registerDocumentFormattingEditProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DocumentFormattingEditProvider()
  // );
  // const documentRangeFormattingEditProvider = vscode.languages.registerDocumentRangeFormattingEditProvider(
  //   { language: "typescript", scheme: "file" },
  //   new DocumentRangeFormattingEditProvider()
  // );
  // const onTypeFormattingEditProvider = vscode.languages.registerOnTypeFormattingEditProvider(
  //   { language: "typescript", scheme: "file" },
  //   new OnTypeFormattingEditorProvider(),
  //   ";"
  // );

  // const renameProvider = vscode.languages.registerRenameProvider({ language: "typescript", scheme: "file" }, new RenameProvider());

  const foldingRangeProvider = vscode.languages.registerFoldingRangeProvider(
    { language: "typescript", scheme: "file" },
    new FoldingRangeProvider()
  );

  context.subscriptions.push(
    // createDiagnosticCollection,
    // registerCompletionItemProvider,
    // registerHoverProvider,
    // signatureHelpProvider,
    // definitionProvider,
    // typeDefinitionProvider,
    // implementationProvider,
    // referencesProvider,
    // documentHighlightProvider,
    // documentSymbolProvider,
    // workspaceSymbolProvider,
    // codeActionProvider,
    // codeLensProvider,
    // codeLensAction,
    // documentLinkProvider,
    // documentColorProvider,
    // documentFormattingEditProvider,
    // documentRangeFormattingEditProvider,
    // onTypeFormattingEditProvider,
    // renameProvider ,
    foldingRangeProvider
  );
}

export function deactivate() {}
