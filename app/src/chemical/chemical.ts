import { StatementElement } from '../parser/interfaces';
import InputStream from '../parser/InputStream';
import { Atom } from './Atom';
import { isNumeric, isDot, isLetter, isUpperCase, isLowerCase } from '../util';

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
    composition: Atom[];
    coefficient: number;

    constructor(form: string) {
        this.raw = form;
        this.isValid = true;
        this.coefficient = 1;
        this.composition = [];

        let buf = new InputStream(form);

        while (buf.peek()) {
            let c = buf.read();
            if (isNumeric(c) && buf.pos === 1) {
                let coefficientStr = c;
                while (isNumeric(buf.peek()) || isDot(buf.peek())) {
                    coefficientStr += buf.read();
                }
                this.coefficient = parseFloat(coefficientStr);
            } else if (isLetter(c) && isUpperCase(c)) {
                let symbolStr = c;
                while (isLetter(buf.peek()) && isLowerCase(buf.peek())) {
                    symbolStr += buf.read();
                }
                let coefficientStr = "";
                while (isNumeric(buf.peek())) {
                    coefficientStr += buf.read();
                }
                let coefficient = coefficientStr !== "" ? parseInt(coefficientStr) : 1;

                this.composition.push(new Atom(symbolStr, coefficient));
            }
        }
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
