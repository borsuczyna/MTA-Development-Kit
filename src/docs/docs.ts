import { Comment } from "luaparse";

export interface DeclarationDocumentation {
    description?: string;
    args?: string[];
    returns?: string;
}

export function readDocs(comments: string[]): DeclarationDocumentation {
    if (comments.length === 0) {
        return {};
    }

    const docs: DeclarationDocumentation = {};

    let readParam = (key: string): string | undefined => {
        let comment = comments.find(c => c.startsWith(`@${key}`));
        if (comment) {
            comment = comment.slice(key.length + 2);
            if (comment.startsWith(':')) {
                comment = comment.slice(1);
            }

            return comment.trim();
        }

        return undefined;    
    };

    let getParams = (key: string): string[] => {
        return comments.filter(c => c.startsWith(`@${key}`)).map(c => c.slice(key.length + 2));
    };

    docs.description = comments.find(c => !c.startsWith('@')) ?? readParam('description') ?? readParam('desc') ?? readParam('brief') ?? readParam('summary');
    docs.args = getParams('param');
    docs.returns = readParam('return') ?? readParam('returns');

    if (docs.description && docs.description.startsWith('-')) {
        docs.description = docs.description.slice(1).trim();
    }

    return docs;
}