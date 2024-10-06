import _ from "lodash"

export function stringify(value?: string, fallback?: string) {
    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
        return fallback || "";
    }
    return _.toString(value);
}

export function sluggify(word?: string) {
    const __word = stringify(word);
    const modifiedWord = __word?.toString()?.replace(/[^a-zA-Z0-9]/g, '-');
    return modifiedWord.toLowerCase();
}

export function getInitials(word?: string): string {
    const __word = stringify(word)

    const names = __word.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
    
}