/// <reference path="../VueImport.ts" />

import * as Vue from "vue";

import * as App from "./App.vue";
import { parseStatement, InputStream } from "./parser";

new Vue({
    ...App,
}).$mount("#app");

console.log(parseStatement(new InputStream("H2O+CO2--H3O")));
