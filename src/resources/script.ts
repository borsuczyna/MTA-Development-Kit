import * as fs from 'fs';
import * as vscode from 'vscode';
import luaparse, { AssignmentStatement, CallExpression, Comment, FunctionDeclaration, IndexExpression, LocalStatement, MemberExpression, Node } from 'luaparse';
import { Resource } from "./resource";
import { ResourceFunction } from './function';
import { FunctionParameter } from './parameter';
import { ScriptSide } from '../enums/script-side';
import { ErrorLens } from '../error-lens/error-lens';
import { SnippetCompletionItemProvider } from '../snippets/snippets';
import { pathCompare } from '../utils/pathCompare';
import { DeclarationDocumentation, readDocs } from '../docs/docs';

interface ScriptError {
    line: number;
    column: number;
    lineLength?: number;
    message: string;
    type: vscode.DiagnosticSeverity;
}

interface ScriptCall {
    functionName: string;
    line: number;
    column: number;
    definition: ResourceFunction | null;
}

export class ResourceScript {
    public parent: Resource;
    public path: string;
    public fullPath: string;
    public type: ScriptSide = ScriptSide.Shared;
    public functions: ResourceFunction[] = [];
    public compiled: boolean = false;
    private nodes: Node[] = [];
    private calls: ScriptCall[] = [];
    private errors: ScriptError[] = [];
    private comments: Comment[] = [];

    constructor(parent: Resource, fullPath: string, path: string, type: ScriptSide = ScriptSide.Shared) {
        if (path.endsWith('.luac') || fullPath.endsWith('.luac')) {
            if (path.startsWith('compiled/scripts/')) {
                path = path.replace('compiled/scripts/', '').slice(0, -1);
                fullPath = fullPath.replace('compiled/scripts/', '').slice(0, -1);
            } else if (path.startsWith(`${parent.name}/compiled/scripts/`)) {
                path = path.replace('compiled/scripts/', '').slice(0, -1);
                fullPath = fullPath.replace('compiled/scripts/', '').slice(0, -1);
            } else if (fs.existsSync(fullPath.slice(0, -1))) {
                path = path.slice(0, -1);
                fullPath = fullPath.slice(0, -1);
            } else {
                this.compiled = true;
            }
        }

        this.parent = parent;
        this.fullPath = fullPath;
        this.path = path;
        this.type = type;
    }

    public async load() {
        if (this.compiled) {
            return;
        }

        const content = fs.readFileSync(this.fullPath, 'utf8');
        this.setCode(content);
    }

    public setCode(content: string) {
        this.errors = [];
        
        this.loadNodes(content);
        this.loadComments();
        this.loadFunctions();
        this.loadCalls();
        this.loadErrors();
    }

    private forceParse(code: string): { nodes: Node[]; errors: ScriptError[] } {
        let linesLeft: string[] = code.split('\n');
        let nodes: Node[] = [];
        let errors: ScriptError[] = [];
        let currentLineOffset = 0;
    
        while (linesLeft.length > 0) {
            let codeToParse = linesLeft.join('\n');
            try {
                const ast = luaparse.parse(codeToParse, {
                    locations: true,
                    onCreateNode: (node) => {
                        // do line fixup
                        if (node.loc) {
                            node.loc.start.line += currentLineOffset;
                            node.loc.end.line += currentLineOffset;
                        }

                        nodes.push(node);
                    }
                });
    
                linesLeft = [];
            } catch (error: any) {
                let lineLength = 0;
                
                if (error.line) {
                    let line = linesLeft[error.line - 1];
                    lineLength = line.length;
                }

                const errorLine = error.line ? currentLineOffset + error.line : currentLineOffset + linesLeft.length;
                let column = error.column ?? 1;
                let message = error.message ?? 'Unknown error';

                if (error.message.startsWith('[')) {
                    let endBracket = error.message.indexOf(']');
                    if (endBracket !== -1) {
                        message = error.message.slice(endBracket + 1).trim();
                    }
                }

                errors.push({
                    line: errorLine,
                    column,
                    lineLength,
                    message,
                    type: vscode.DiagnosticSeverity.Error
                });
    
                const problematicLine = error.line ? Math.max(1, error.line - 1) : 1;
                currentLineOffset += problematicLine;
                linesLeft = linesLeft.slice(problematicLine);
            }
        }

        // remove duplicate errors on same line
        errors = errors.filter((error, index, self) => index === self.findIndex((t) => t.line === error.line));
    
        return { nodes, errors };
    }

    private loadNodes(content: string) {
        let { nodes, errors } = this.forceParse(content);

        this.nodes = nodes;
        this.errors.push(...errors);
    }

    private loadComments() {
        this.comments = this.nodes.filter((node: Node) => node.type === 'Comment') as Comment[];
    }

    private loadFunctions() {
        // FunctionDeclarations
        this.functions = [];
        
        let functions = this.nodes.filter((node: Node) => node.type === 'FunctionDeclaration') as FunctionDeclaration[];

        for (let node of functions) {
            const functionName = (node.identifier && node.identifier.type === 'Identifier') ? node.identifier.name : 'anonymous';
            const parameters = node.parameters.map((param: any) => new FunctionParameter('any', param.name));
            const documentation = this.readFunctionDocumentation(node.loc?.start.line ?? 0, parameters);

            this.functions.push(new ResourceFunction(
                this,
                functionName,
                parameters,
                node.loc?.start.line,
                node.loc?.end.line,
                node.isLocal,
                documentation
            ));
        }

        // LocalStatement, AssignmentStatement
        let assignmentsAndLocals = this.nodes.filter((node: Node) => node.type === 'AssignmentStatement' || node.type === 'LocalStatement') as (AssignmentStatement | LocalStatement)[];

        for (let statement of assignmentsAndLocals) {
            for (let index in statement.init) {
                let init = statement.init[index];
                if (init.type === 'FunctionDeclaration') {
                    const variable = statement.variables[index];
                    const functionName = variable.type === 'Identifier' ? variable.name : 'anonymous';
                    const parameters = init.parameters.map((param: any) => new FunctionParameter('any', param.name));
                    const documentation = this.readFunctionDocumentation(init.loc?.start.line ?? 0, parameters);

                    this.functions.push(new ResourceFunction(
                        this,
                        functionName,
                        parameters,
                        init.loc?.start.line,
                        init.loc?.end.line,
                        statement.type === 'LocalStatement',
                        documentation
                    ));
                }
            }
        }
    }

    private isExportCall(call: CallExpression): boolean {
        if (call.base.type === 'MemberExpression') {
            let member = call.base as MemberExpression;
            if (member.indexer === ':' && member.base.type === 'IndexExpression') {
                let index = member.base as IndexExpression;
                if (index.base.type === 'Identifier' && index.base.name === 'exports') {
                    return true;
                }
            }
        }

        return false;
    }

    private loadCalls() {
        let calls = this.nodes.filter((node: Node) => node.type === 'CallExpression') as CallExpression[];
        let scriptFunctions = this.getResourceFunctions();
        this.calls = [];

        for (let call of calls) {
            // @TODO: Add exports
            let isExport = this.isExportCall(call);
            if (isExport) {
                continue;
            }

            // if script function does not exist, add error
            if (call.base.type === 'Identifier') {
                let identifier = call.base as any;
                let definition = this.findFunctionInResource(identifier.name);

                // if function is not defined in script
                if (!definition) {
                    this.errors.push({
                        line: identifier.loc.start.line,
                        column: identifier.loc.start.column,
                        message: `Function '${identifier.name}' is not defined`,
                        type: vscode.DiagnosticSeverity.Warning
                    });
                } else {
                    // if argument count is wrong
                    if (call.arguments.length < definition.requiredParameters.length) {
                        let atLeast = definition.requiredParameters.length !== definition.parameters.length ? 'at least ' : '';
                        let argumentsForm = definition.requiredParameters.length === 1 ? 'argument' : 'arguments';

                        this.errors.push({
                            line: identifier.loc.start.line,
                            column: identifier.loc.start.column,
                            message: `Function '${identifier.name}' expects ${atLeast}${definition.requiredParameters.length} ${argumentsForm}, got ${call.arguments.length}`,
                            type: vscode.DiagnosticSeverity.Warning
                        });
                    }
                }

                this.calls.push({
                    functionName: identifier.name,
                    line: identifier.loc.start.line,
                    column: identifier.loc.start.column,
                    definition
                });
            }
        }
    }

    private loadErrors() {
        let uri = vscode.Uri.file(this.fullPath);
        ErrorLens.setErrors(uri, this.errors.map(error => {
            return {
                range: new vscode.Range(error.line - 1, 0, error.line - 1, error.lineLength ?? 0),
                message: error.message,
                type: error.type
            };
        }));
    }

    public getFunction(name: string, includeLocal: boolean = false, localParent: string | null = null): ResourceFunction | null {
        return this.functions.find(func => func.functionName === name && (includeLocal || !func.isLocal || pathCompare(func.parent.fullPath, localParent || ''))) || null;
    }

    public findFunctionInResource(name: string, includeLocal: boolean = false): ResourceFunction | null {
        let functionDefinition = this.parent.getFunction(name, this.type, includeLocal, this.fullPath);
        if (functionDefinition) {
            return functionDefinition;
        }

        let globalFunction = SnippetCompletionItemProvider.getFunctions(this.type).find(snippet => snippet.func.functionName === name);
        if (globalFunction) {
            return globalFunction.toResourceFunction(this);
        }

        return null;
    }

    private getScriptFunctions(): string[] {
        let scriptFunctions = this.functions.map(func => func.functionName);
        let globalFunctions = SnippetCompletionItemProvider.getFunctions(this.type).map(snippet => snippet.func.functionName);

        return [...new Set([...scriptFunctions, ...globalFunctions])];
    }

    private getResourceFunctions(): string[] {
        let resourceFunctions = this.parent.getFunctions(false, this.fullPath).map(func => func.functionName);
        return resourceFunctions;
    }

    public getCalls(): ScriptCall[] {
        return this.calls;
    }

    public getCall(range: vscode.Range): ScriptCall | null {
        return this.calls.find(call => {
            return range.start.line + 1 === call.line && range.start.character === call.column;
        }) || null;
    }

    public getCommentAtLine(line: number): Comment | null {
        return this.comments.find(comment => comment.loc?.start.line === line) || null;
    }

    public getCommentsAboveLine(line: number): Comment[] {
        let comment = this.getCommentAtLine(line - 1);
        let comments: Comment[] = [];

        while (comment) {
            comments.push(comment);
            line--;
            comment = this.getCommentAtLine(line);
        }

        return comments.reverse();
    }

    public getCommentDocumentationAtLine(line: number): string[] {
        let comments = this.getCommentsAboveLine(line);
       
        return comments.map(comment => {
            let value = comment.value.trim();
            if (value.startsWith('--')) {
                return value.slice(3).trim();
            } else {
                return value.trim();
            }
        });
    }

    private readFunctionDocumentation(line: number, parameters: FunctionParameter[]): DeclarationDocumentation {
        let comments = this.getCommentDocumentationAtLine(line);
        let docs = readDocs(comments);

        for (let [index, arg] of docs.args?.entries() ?? []) {
            let parameter = parameters[index];
            if (!parameter) {
                continue;
            }

            if (arg.startsWith(parameter.name)) {
                arg = arg.slice(parameter.name.length).trim();
            }

            if (arg.startsWith(':')) {
                arg = arg.slice(1).trim();
            }

            if (arg.endsWith('.')) {
                arg = arg.slice(0, -1).trim();
            }

            if (arg.split(' ').filter(a => a.length > 0).length === 1) {
                parameter.type = arg.trim();
            } else {
                parameter.type = `${arg}:`;
            }

            docs.args![index] = arg;
            parameters[index].type = parameter.type;
            parameters[index].name = parameter.name;
        }

        return docs;
    }
}