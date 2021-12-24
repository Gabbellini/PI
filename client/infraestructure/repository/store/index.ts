import { createStore } from "vuex";

class VueState {
  isMenuOpened = false;
}

export default createStore({
  state: new VueState(),
  mutations: {
    TOGGLE_MENU(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
  actions: {
    toggleMenu({ commit }) {
      commit("TOGGLE_MENU");
    },
  },
  getters: {
    isMenuOpened: (state) => state.isMenuOpened,
  },
});
