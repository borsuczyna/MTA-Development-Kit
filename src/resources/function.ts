import { FunctionParameter } from "./parameter";
import { ResourceScript } from "./script";

export class ResourceFunction {
    public parent: ResourceScript;
    public functionName: string;
    public parameters: FunctionParameter[];
    public startLine: number | null;
    public endLine: number | null;

    constructor(parent: ResourceScript, functionName: string, parameters: FunctionParameter[], startLine: number | null = null, endLine: number | null = null) {
        this.parent = parent;
        this.functionName = functionName;
        this.parameters = parameters;
        this.startLine = startLine;
        this.endLine = endLine;
    }
}