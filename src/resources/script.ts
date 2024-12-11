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

    constructor(parent: Resource, fullPath: string, path: string, type: string = 'shared') {
        this.parent = parent;
        this.fullPath = fullPath;
        this.path = path;
        this.type = type;
    }

    public async load() {
        console.log('Loading script:', this.fullPath);
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

                return new ResourceFunction(this, functionName, parameters);
            });
        } catch (error) {
            // console.error('Error loading script:', this.fullPath, error);
        }
    }
}