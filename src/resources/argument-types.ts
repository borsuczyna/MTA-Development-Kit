import { CallExpression, Expression } from "luaparse";
import { FunctionParameter } from "./parameter";
import { ResourceScript } from "./script";

// const typesChecks = {
//     number: (argument: Expression) => {
//         return argument.type === "NumericLiteral" || argument.type === "UnaryExpression" && argument.argument.type === "Identifier";
//     }
// }

// export function checkArgumentTypes(callArguments: Expression[], functionParameters: FunctionParameter[]) {
//     console.log(callArguments, functionParameters);
// }

export class ArgumentTypes {
    static typesChecks = {
        number: (argument: Expression) => {
            return (!this.isString(argument) && !this.isBoolean(argument) && !this.isNil(argument) && !this.isFunction(argument) && !this.isTable(argument));
        },
        string: (argument: Expression) => {
            return (!this.isNumber(argument) && !this.isBoolean(argument) && !this.isNil(argument) && !this.isFunction(argument) && !this.isTable(argument));
        },
        boolean: (argument: Expression) => {
            return (!this.isString(argument) && !this.isNumber(argument) && !this.isNil(argument) && !this.isFunction(argument) && !this.isTable(argument));
        },
        table: (argument: Expression) => {
            return (!this.isString(argument) && !this.isNumber(argument) && !this.isNil(argument) && !this.isFunction(argument) && !this.isBoolean(argument));
        },
        function: (argument: Expression) => {
            return (!this.isString(argument) && !this.isNumber(argument) && !this.isNil(argument) && !this.isTable(argument) && !this.isBoolean(argument));
        },
        nil: (argument: Expression) => {
            return (!this.isString(argument) && !this.isNumber(argument) && !this.isBoolean(argument) && !this.isFunction(argument) && !this.isTable(argument));
        },
        element: (argument: Expression) => {
            return (!this.isString(argument) && !this.isNumber(argument) && !this.isBoolean(argument) && !this.isFunction(argument) && !this.isTable(argument) && !this.isNil(argument));
        }
    };

    public static isString(argument: Expression) {
        return argument.type === "StringLiteral";
    }

    public static isNumber(argument: Expression) {
        return argument.type === "NumericLiteral";
    }

    public static isBoolean(argument: Expression) {
        return argument.type === "BooleanLiteral";
    }

    public static isFunction(argument: Expression) {
        return argument.type === "FunctionDeclaration";
    }

    public static isTable(argument: Expression) {
        return argument.type === "TableConstructorExpression";
    }

    public static isNil(argument: Expression) {
        return argument.type === "NilLiteral";
    }

    public static getArgumentType(argument: Expression) {
        switch (argument.type) {
            case "StringLiteral":
                return "string";
            case "NumericLiteral":
                return "number";
            case "BooleanLiteral":
                return "boolean";
            case "FunctionDeclaration":
                return "function";
            case "TableConstructorExpression":
                return "table";
            case "NilLiteral":
                return "nil";
            default:
                return "unknown";
        }
    }

    public static convertToType(argument: string | undefined): string {
        if (!argument) {
            return 'any';
        }

        if (argument === 's' || argument === 'str' || argument === 'string') {
            return 'string';
        } else if (argument === 'n' || argument === 'num' || argument === 'number' || argument === 'int' || argument === 'integer' || argument === 'float' || argument === 'double' || argument === 'decimal') {
            return 'number';
        } else if (argument === 'b' || argument === 'bool' || argument === 'boolean') {
            return 'boolean';
        } else if (argument === 't' || argument === 'table' || argument === 'dict' || argument === 'dictionary' || argument === 'map' || argument === 'array' || argument === 'list') {
            return 'table';
        } else if (argument === 'f' || argument === 'func' || argument === 'function' || argument === 'delegate' || argument === 'callback') {
            return 'function';
        } else if (argument === 'nil' || argument === 'null' || argument === 'none' || argument === 'nothing' || argument === 'empty' || argument === 'void') {
            return 'nil';
        }

        return 'any';
    }

    public static getCallExpressionReturnType(argument: CallExpression, script: ResourceScript) {
        let callDetails = script.getCallDetails(argument);
        if (callDetails) {
            if (callDetails.definition?.documentation) {
                return this.convertToType(callDetails.definition.documentation.returns);
            }
        }
    }

    public static checkArgumentTypes(callArguments: Expression[], functionParameters: FunctionParameter[], script: ResourceScript) {
        console.log(callArguments, functionParameters);

        for (let [index, argument] of callArguments.entries()) {
            let parameter = functionParameters[index];
            if (parameter) {
                let type = this.convertToType(parameter.type);
                let typeCheck = this.typesChecks[type as keyof typeof this.typesChecks];
                if (typeCheck) {
                    if (argument.type === 'CallExpression') {
                        let returnType = this.getCallExpressionReturnType(argument, script);
                        if (returnType === 'any') {
                            continue;
                        }
                        
                        if (returnType !== type) {
                            return {
                                message: `Expected ${type} at argument ${index + 1}, got ${returnType}`,
                                argument
                            };
                        }
                    }

                    if (!typeCheck(argument)) {
                        return {
                            message: `Expected ${type} at argument ${index + 1}, got ${this.getArgumentType(argument)}`,
                            argument
                        };
                    }
                }
            }
        }

        return {
            message: "All arguments are valid",
            argument: null
        };
    }
}