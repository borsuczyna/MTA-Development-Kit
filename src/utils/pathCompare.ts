export function pathCompare(a: string, b: string): boolean {
    return a.toLowerCase().replace(/\\/g, '/') === b.toLowerCase().replace(/\\/g, '/');
}