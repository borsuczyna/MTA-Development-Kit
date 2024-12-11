import * as fs from 'fs';
import luaparse from 'luaparse';
import { Resource } from "./resource";
import { ResourceFunction } from './function';
import { FunctionParameter } from './parameter';

export class ResourceScript {
    public parent: Resource;
    public path: string;
    public fullPath: string;
    public type: string = 'shared';
    public functions: ResourceFunction[] = [];
    public compiled: boolean = false;

    constructor(parent: Resource, fullPath: string, path: string, type: string = 'shared') {
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

        this.loadFunctions();
    }

    private loadFunctions() {
        try {
            const lua = fs.readFileSync(this.fullPath, 'utf8');
            const ast = luaparse.parse(lua, { locations: true });

            const functions = ast.body.filter((node: any) => node.type === 'FunctionDeclaration');
            this.functions = functions.map((node: any) => {
                const functionName = node.identifier.name;
                const parameters = node.parameters.map((param: any) => new FunctionParameter('any', param.name));

                return new ResourceFunction(this, functionName, parameters, node.loc.start.line, node.loc.end.line);
            });
        } catch (error) {
            // console.error('Error loading script:', this.fullPath, error);
        }
    }

    public getFunction(name: string): ResourceFunction | null {
        return this.functions.find(func => func.functionName === name) || null;
    }
}