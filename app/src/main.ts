import * as Vue from "vue";

import * as App from "./App.vue";
import { parseStatement } from "./parser/parser";
import InputStream from './parser/InputStream';

new Vue({
    ...App,
}).$mount("#app");

console.log(parseStatement(new InputStream("N2 + 3H2 + 3.5O2 -- 2NO2 + 3H2O")));
