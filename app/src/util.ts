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

export function isDecimalSeparator(str: string) : boolean {
    return str && (str === "." || str === ",");
}

export function gcd(...rest: number[]) {
    let a,b;
    if (rest.length > 2) {
        a = rest.shift();
        b = gcd(...rest);
    } else {
        [a,b] = rest;
    }
    let h;
    while (b !== 0) {
        h = a % b;
        a = b;
        b = h;
    }
    return a;
}