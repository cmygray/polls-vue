import { ActionTree } from 'vuex';

import { State } from '@/store/state';
import { Poll } from '@/models';
import { fetchPolls } from '@/apis';

export const actions: ActionTree<State, State> = {
  async fetchPolls({ commit }): Promise<Poll[]> {
    const { data } = await fetchPolls();

    return data.map(pollData => {
      const poll = {
        id: String(pollData.pk),
        ...pollData.fields,
      };

      commit('SET_POLL', poll);
      return poll;
    });
  },
};
