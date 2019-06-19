import Vue from 'vue';
import { MutationTree } from 'vuex';

import { Poll } from '@/models';
import { State } from '@/store/state';

export const mutations: MutationTree<State> = {
  SET_POLL(state, poll: Poll) {
    Vue.set(state.polls, poll.id, poll);
  },
};
