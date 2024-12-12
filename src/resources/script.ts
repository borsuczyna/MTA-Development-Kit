import * as fs from 'fs';
import luaparse, { Node } from 'luaparse';
import { Resource } from "./resource";
import { ResourceFunction } from './function';
import { FunctionParameter } from './parameter';
import { ScriptSide } from '../enums/script-side';

export class ResourceScript {
    public parent: Resource;
    public path: string;
    public fullPath: string;
    public type: ScriptSide = ScriptSide.Shared;
    public functions: ResourceFunction[] = [];
    public compiled: boolean = false;

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
        this.loadFunctions(content);
    }

    private forceParse(code: string): Node[] {
        let linesLeft: string[] = code.split('\n');
        let nodes: Node[] = [];
        
        while (linesLeft.length > 0) {
            let codeToParse = linesLeft.join('\n');
            try {
                const ast = luaparse.parse(codeToParse, {
                    locations: true,
                    onCreateNode: (node) => {
                        nodes.push(node);
                    }
                });

                linesLeft = [];
            } catch (error: any) {
                // console.error('Error parsing script at line', error.line, linesLeft[error.line-1]);

                const line = (error.line ? Math.max(1, error.line - 1) : null) ?? linesLeft.length;
                linesLeft = linesLeft.slice(line);
            }
        }

        return nodes;
    }

    private loadFunctions(content: string) {
        let nodes = this.forceParse(content);
        let functions = nodes.filter((node: any) => node.type === 'FunctionDeclaration');

        this.functions = functions.map((node: any) => {
            const functionName = node.identifier.name;
            const parameters = node.parameters.map((param: any) => new FunctionParameter('any', param.name));

            return new ResourceFunction(this, functionName, parameters, node.loc.start.line, node.loc.end.line);
        });
    }

    public getFunction(name: string): ResourceFunction | null {
        return this.functions.find(func => func.functionName === name) || null;
    }
}