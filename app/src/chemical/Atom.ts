import { Element } from './elements';


export class Atom {

    element: Element;
    isValid: boolean;
    coefficient: number;

    constructor(symbol: string, coefficient: number) {
        this.element = Element.bySymbol(symbol);
        this.coefficient = coefficient;
        if (this.element) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    get molarMass() {
        return this.coefficient * this.element.molarMass;
    }

    get singleMolarMass() {
        return this.element.molarMass;
    }

}
