import Vue from 'vue';
import Vuex from 'vuex';

import { State, state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  state,
  getters,
  actions,
  mutations,
});
