import { DeclarationDocumentation } from "../docs/docs";
import { FunctionSnippet } from "../snippets/function";
import { FunctionParameter } from "./parameter";
import { ResourceScript } from "./script";

export class ResourceFunction {
    public parent: ResourceScript;
    public functionName: string;
    public parameters: FunctionParameter[];
    public startLine: number | null;
    public endLine: number | null;
    public isLocal: boolean = false;
    public documentation?: DeclarationDocumentation;

    constructor(
        parent: ResourceScript,
        functionName: string,
        parameters: FunctionParameter[],
        startLine: number | null = null,
        endLine: number | null = null,
        isLocal: boolean = false,
        documentation?: DeclarationDocumentation
    ) {
        this.parent = parent;
        this.functionName = functionName;
        this.parameters = parameters;
        this.startLine = startLine;
        this.endLine = endLine;
        this.isLocal = isLocal;
        this.documentation = documentation;
    }

    public static fromSnippet(script: ResourceScript, snippet: FunctionSnippet): ResourceFunction {
        return snippet.toResourceFunction(script);
    }

    public toSnippetFunction(): FunctionSnippet {
        return FunctionSnippet.fromResourceFunction(this);
    }
    
    get requiredParameters(): FunctionParameter[] {
        return this.parameters.filter(param => !param.isOptional);
    }

    get optionalParameters(): FunctionParameter[] {
        return this.parameters.filter(param => param.isOptional);
    }
}