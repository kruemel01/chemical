export function isUpperCase(str: string) : boolean {
    return str && str === str.toUpperCase();
};

export function isLowerCase(str: string) : boolean {
    return str && str === str.toLowerCase();
};

export function isAlphanumeric(str: string) : boolean {
    return str && str && /^[0-9a-zA-z]$/.test(str);
}

export function isNumeric(str: string) : boolean {
    return str && /^[0-9]$/.test(str);
}

export function isLetter(str: string) : boolean {
    return str && /^[a-zA-z]$/.test(str);
}

export function isDot(str: string) : boolean {
    return str && /^\.$/.test(str);
}
