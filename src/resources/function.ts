import { FunctionParameter } from "./parameter";
import { ResourceScript } from "./script";

export class ResourceFunction {
    public parent: ResourceScript;
    public functionName: string;
    public parameters: FunctionParameter[];

    constructor(parent: ResourceScript, functionName: string, parameters: FunctionParameter[]) {
        this.parent = parent;
        this.functionName = functionName;
        this.parameters = parameters;

        console.log('Loading function:', this.functionName, 'with parameters:', this.parameters);
    }
}