export class Operator {

    raw: string;
    operatorType: string;
    isValid: boolean;

    constructor(op: string) {
        if (op === "PLUS" || op === "REACT") {
            this.raw = op;
            this.operatorType = op;
            this.isValid = true;
        }
    }
}

export class MolecularFormula {

    raw: string;
    isValid: boolean;

    constructor(form: string) {
        this.raw = form;
        this.isValid = true;
    }
}

export class InvalidElement {

    raw: string;
    pos: number;
    isValid: boolean;

    constructor(char: string, pos: number) {
        this.raw = char;
        this.pos = pos;
        this.isValid = false;
    }
}

export class Formula {
    constructor ()
}
