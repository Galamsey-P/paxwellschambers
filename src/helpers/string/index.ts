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