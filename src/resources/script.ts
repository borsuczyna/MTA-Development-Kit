import * as fs from 'fs';
import * as vscode from 'vscode';
import luaparse, { AssignmentStatement, CallExpression, FunctionDeclaration, IndexExpression, LocalStatement, MemberExpression, Node } from 'luaparse';
import { Resource } from "./resource";
import { ResourceFunction } from './function';
import { FunctionParameter } from './parameter';
import { ScriptSide } from '../enums/script-side';
import { ErrorLens } from '../error-lens/error-lens';
import { SnippetCompletionItemProvider } from '../snippets/snippets';
import { pathCompare } from '../utils/pathCompare';

interface ScriptError {
    line: number;
    column: number;
    lineLength?: number;
    message: string;
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
                    message
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

    private loadFunctions() {
        // FunctionDeclarations
        this.functions = [];
        
        let functions = this.nodes.filter((node: Node) => node.type === 'FunctionDeclaration') as FunctionDeclaration[];

        for (let node of functions) {
            const functionName = (node.identifier && node.identifier.type === 'Identifier') ? node.identifier.name : 'anonymous';
            const parameters = node.parameters.map((param: any) => new FunctionParameter('any', param.name));

            this.functions.push(new ResourceFunction(
                this,
                functionName,
                parameters,
                node.loc?.start.line,
                node.loc?.end.line,
                node.isLocal
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

                    this.functions.push(new ResourceFunction(
                        this,
                        functionName,
                        parameters,
                        init.loc?.start.line,
                        init.loc?.end.line,
                        statement.type === 'LocalStatement'
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
                if (!definition) {
                    this.errors.push({
                        line: identifier.loc.start.line,
                        column: identifier.loc.start.column,
                        message: `Function '${identifier.name}' is not defined`
                    });
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
                message: error.message
            };
        }));
    }

    public getFunction(name: string, includeLocal: boolean = false, localParent: string | null = null): ResourceFunction | null {
        return this.functions.find(func => func.functionName === name && (includeLocal || !func.isLocal || pathCompare(func.parent.fullPath, localParent || ''))) || null;
    }

    public findFunctionInResource(name: string, includeLocal: boolean = false): ResourceFunction | null {
        return this.parent.getFunction(name, this.type, includeLocal, this.fullPath);
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
}