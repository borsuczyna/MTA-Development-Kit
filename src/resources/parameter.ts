export class FunctionParameter {
    public type: string;
    public name: string;

    constructor(type: string, name: string) {
        this.type = type.trim();
        this.name = name.trim();
    }
    
    public toString(): string {
        return `${this.type} ${this.name}`;
    }

    public shortString(): string {
        if (this.name.length > 0) {
            return this.name;
        }

        return this.type;
    }

    public static parse(param: string): FunctionParameter {
        const split = param
            .split(' ')
            .map(part => part.trim())
            .filter(part => part.length > 0);
        
        if (split.length === 0) {
            return new FunctionParameter('', '');
        } else if (split.length === 1) {
            return new FunctionParameter(split[0], '');
        } else {
            return new FunctionParameter(split.slice(0, -1).join(' '), split[split.length - 1]);
        }
    }
}