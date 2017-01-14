import * as Vue from "vue";
import * as Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    strict: true,
});
