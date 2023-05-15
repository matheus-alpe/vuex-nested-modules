import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'hello',
  },
  getters: {
    fullMessage(state) {
      return `${state.message} world`;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
