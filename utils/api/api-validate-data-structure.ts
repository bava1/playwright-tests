export function validateDataStructure(data: any, structure: any): boolean {
    for (const key in structure) {
        if (!(key in data) || typeof data[key] !== structure[key]) {
            return false;
        }
    }
    return true;
}
