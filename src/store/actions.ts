import { ActionTree } from 'vuex';

import { State } from '@/store/state';
import { Choice, Poll, PollAttrs } from '@/models';
import { createPoll, fetchPolls, updatePoll, voteToPoll } from '@/apis';

export const actions: ActionTree<State, State> = {
  async fetchPolls({ commit }): Promise<Poll[]> {
    const { data } = await fetchPolls();

    data.forEach(poll => {
      // TODO: setPoll 액션으로 분리
      commit('SET_POLL', poll);
    });

    return data;
  },

  async createPoll({ commit }, title): Promise<Poll> {
    const { data } = await createPoll(title);

    commit('SET_POLL', data);

    return data;
  },

  async updatePoll({ commit }, pollAttrs: PollAttrs): Promise<Poll> {
    const { data } = await updatePoll(pollAttrs);

    commit('SET_POLL', data);

    return data;
  },

  async voteToPoll({ commit }, choice: Choice): Promise<Poll> {
    const { data } = await voteToPoll(choice);

    commit('SET_POLL', data);

    return data;
  },
};
