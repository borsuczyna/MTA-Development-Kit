export class FunctionParameter {
    public type: string;
    public name: string;

    constructor(type: string, name: string) {
        this.type = (type ?? '').trim();
        this.name = (name ?? '').trim();
    }
    
    public toString(): string {
        if (this.type.length > 0 && this.type !== 'any') {
            return `${this.type} ${this.name}`.trim();
        } else {
            return this.name;
        }
    }

    public shortString(): string {
        if (this.name.length > 0) {
            return this.name;
        }

        return this.type;
    }

    public static sync(a: FunctionParameter[], b: FunctionParameter[]) {
        for (let [index, parameter] of b.entries()) {
            if (a[index]) {
                a[index].name = parameter.name;
            } else {
                a[index] = parameter;
            }
        }
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