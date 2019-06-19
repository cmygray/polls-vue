import { ActionTree } from 'vuex';

import { State } from '@/store/state';
import { Poll } from '@/models';
import { createPoll, fetchPolls } from '@/apis';

export const actions: ActionTree<State, State> = {
  async fetchPolls({ commit }): Promise<Poll[]> {
    const { data } = await fetchPolls();

    data.forEach(poll => {
      commit('SET_POLL', poll);
    });

    return data;
  },

  async createPoll({ commit }, title): Promise<Poll> {
    const { data } = await createPoll(title);

    commit('SET_POLL', data);

    return data;
  },
};
