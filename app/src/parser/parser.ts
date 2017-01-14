import { isUpperCase, isLowerCase } from "./util";
import { Operator, MolecularFormula, InvalidElement } from "./chemical";
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
    } else if (/[0-9a-zA-z]/.test(c)) {
        let stringRep = c;
        while (buf.peek() && /[0-9a-zA-z]/.test(buf.peek())) {
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
