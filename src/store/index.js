import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations,
  actions,
  getters: {
    NOTES(state) {
      return state.notes;
    }
  }
});
