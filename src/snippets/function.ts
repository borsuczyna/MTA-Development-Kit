import * as vscode from 'vscode';
import { ScriptSide } from '../enums/script-side';
import { firstLetterUppercase } from '../utils/firstLetterUppercase';

export interface Argument {
    type: string;
    name: string | null;
    default: string | null;
}

export interface Function {
    functionName: string;
    description: string;
    returnValues: string[];
    requiredArguments: Argument[];
    optionalArguments: Argument[];
}

export class FunctionSnippet {
    public completionItem: vscode.CompletionItem;
    public signature: vscode.SignatureInformation;
    public scriptSide: ScriptSide = ScriptSide.Shared;
    public func: Function;

    constructor(func: Function, scriptSide: ScriptSide) {
        this.func = func;
        this.scriptSide = scriptSide;
        this.completionItem = new vscode.CompletionItem(func.functionName, vscode.CompletionItemKind.Function);
        this.completionItem.detail = "Scriptside: " + firstLetterUppercase(this.scriptSide);

        this.completionItem.documentation = new vscode.MarkdownString();
        this.completionItem.documentation.appendCodeblock(this.generateFunctionSnippet(func), 'mtalua');
        this.completionItem.documentation.appendMarkdown(func.description);

        this.signature = new vscode.SignatureInformation(
            this.generateSignature(func),
            new vscode.MarkdownString(func.description)
        );

        func.requiredArguments.forEach(arg => {
            this.signature.parameters.push(new vscode.ParameterInformation(arg.name ?? '', arg.type));
        });
        func.optionalArguments.forEach(arg => {
            this.signature.parameters.push(new vscode.ParameterInformation(arg.name ?? '', arg.type));
        });
    }

    private generateFunctionSnippet(func: Function): string {
        let snippet = `${func.functionName}(`;
        
        if (func.returnValues.length > 0) {
            snippet = `${func.returnValues.join(', ')} = ${snippet}`;
        }

        const requiredArgs = func.requiredArguments.map(arg => this.generateArgumentSnippet(arg)).join(', ');
        const optionalArgs = func.optionalArguments.map(arg => this.generateArgumentSnippet(arg)).join(', ');
        
        snippet += requiredArgs;
        
        if (requiredArgs && optionalArgs) {
            snippet += ', ';
        }

        snippet += optionalArgs;
        snippet += ')';

        return snippet;
    }

    private generateSignature(func: Function): string {
        let signature = `${func.functionName}(`;

        if (func.returnValues.length > 0) {
            signature = `${func.returnValues.join(', ')} = ${signature}`;
        }
        
        const requiredArgs = func.requiredArguments.map(arg => this.generateArgumentSnippet(arg)).join(', ');
        const optionalArgs = func.optionalArguments.map(arg => this.generateArgumentSnippet(arg)).join(', ');

        signature += requiredArgs;
        
        if (requiredArgs && optionalArgs) {
            signature += ', ';
        }
        
        signature += optionalArgs;
        signature += ')';
        return signature;
    }

    private generateArgumentSnippet(arg: Argument): string {
        let snippet = '';
        
        if (arg.type) {
            snippet += `${arg.type} `;
        }
        if (arg.name) {
            snippet += `${arg.name}`;
        }
        if (arg.default) {
            snippet += ` = ${arg.default}`;
        }
        
        return snippet;
    }

    public static filterSnippets(snippets: FunctionSnippet[], scriptSide: ScriptSide): FunctionSnippet[] {
        let uniqueSnippets: Map<string, FunctionSnippet> = new Map();
        let snippetsArray = scriptSide !== ScriptSide.Shared ? snippets.filter(snippet => snippet.scriptSide === scriptSide || snippet.scriptSide === ScriptSide.Shared) : snippets;

        if (scriptSide === ScriptSide.Shared) {
            for (let snippet of snippetsArray) {
                if (!uniqueSnippets.has(snippet.func.functionName) || snippet.scriptSide === ScriptSide.Shared) {
                    uniqueSnippets.set(snippet.func.functionName, snippet);
                }
            }
        } else {
            for (let snippet of snippetsArray) {
                if (!uniqueSnippets.has(snippet.func.functionName) || snippet.scriptSide === scriptSide) {
                    uniqueSnippets.set(snippet.func.functionName, snippet);
                }
            }
        }

        return Array.from(uniqueSnippets.values());
    }
}