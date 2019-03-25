import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     count: 0
//   }
// });

export const store = new Vuex.Store({
  //State
  state: {
    count: 3
  },
  //Getters
  getters: {
    evenodd: state => (state.count % 2 === 0 ? 'even' : 'odd')
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    }
  }
});
