import { ActionContext } from "vuex";

class MenuStates {
  public isOpen = false;
  public shouldAnimate = false;
}

const state = () => new MenuStates();

const mutations = {
  TOGGLE(state: MenuStates) {
    state.isOpen = !state.isOpen;
  },
  SET_MENU_STATE(state: MenuStates, isOpen: boolean) {
    state.isOpen = isOpen;
  },
  TOGGLE_ANIMATION(state: MenuStates) {
    state.shouldAnimate = !state.shouldAnimate;
  },
};

const actions = {
  toggle({ commit }: ActionContext<MenuStates, MenuStates>): void {
    commit("TOGGLE");
  },
  setMenuState(
    { commit }: ActionContext<MenuStates, MenuStates>,
    isOpen: boolean
  ): void {
    commit("SET_MENU_STATE", isOpen);
  },
  toggleAnimation({ commit }: ActionContext<MenuStates, MenuStates>): void {
    commit("TOGGLE_ANIMATION");
  },
};

const getters = {
  isOpen: ({ isOpen }: MenuStates) => isOpen,
  shouldAnimate: ({ shouldAnimate }: MenuStates) => shouldAnimate,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
