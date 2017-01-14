import { isUpperCase, isLowerCase, isAlphanumeric, isDecimalSeparator } from '../util';
import { Operator, MolecularFormula, InvalidElement } from "../chemical/chemical";
import InputStream from "./InputStream";
import { StatementElement } from "./interfaces";

const keywords: string[] = [
    "balance",
];

function isKeyword(str: string) : boolean {
    return keywords.indexOf(str) !== -1;
}

function readNext(buf: InputStream) : StatementElement {
    let c = buf.read();
    while (c === " ") {
        c = buf.read();
    }

    if (c === "+") {
        return new Operator("PLUS");
    } else if (c === "-") {
        let next = buf.peek();
        if (next === "-") {
            buf.read();
            return new Operator("REACT");
        }
    } else if (isAlphanumeric(c)) {
        let stringRep = c;
        let decimalPoint = false;
        while (isAlphanumeric(buf.peek()) || (isDecimalSeparator(buf.peek()) && !decimalPoint)) {
            if (isDecimalSeparator(buf.peek())) decimalPoint = true;
            stringRep += buf.read();
        }
        return new MolecularFormula(stringRep);
    }
    return new InvalidElement(c, buf.pos);
}

export function parseStatement(buf) {
    let statement: StatementElement[] = [];
    while (buf.peek()) {
        let currentElement = readNext(buf);
        if (currentElement.isValid) {
            statement.push(currentElement);
        } else {
            console.log(`Error: ${currentElement}`);
        }
    }
    return statement;
}
