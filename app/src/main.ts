import * as Vue from "vue";

import * as App from "./App.vue";
import { parseStatement } from "./parser/parser";
import InputStream from './parser/InputStream';
import { StatementElement } from './parser/interfaces';
import { MolecularFormula } from './chemical/chemical';

new Vue({
    ...App,
}).$mount("#app");

let statement: StatementElement[] = parseStatement(new InputStream("N2 + 3H2 + 3.5O2 -- 2NO2 + 3H2O"));
console.log(statement);