import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rootMessage: 'hello',
  },

  modules: {
    namespacedModule: {
      namespaced: true,

      state: {
        namespacedMessage: 'message from namespaced module',
      },

      actions: {
        namespacedAction({ state }) {
          console.log('triggered namespacedAction:', state.namespacedMessage);
        },
      },
    },

    anotherModule: {
      state: {
        anotherMessage: 'message from another module',
      },

      actions: {
        anotherAction({ dispatch, state }) {
          console.log('triggered anotherAction:', state.anotherMessage);
          dispatch('namespacedModule/namespacedAction', null, { root: true });
        },
      },
    },

    outerModule: {
      state: {
        outerMessage: 'message from outer module',
      },

      modules: {
        innerModule: {
          namespaced: true,

          state: {
            innerMessage: 'message from inner module',
          },

          actions: {
            innerAction(options) {
              console.log('options', options);
              options.dispatch('anotherAction', null, { root: true });
            },
          },
        },
      },
    },

  },
});
