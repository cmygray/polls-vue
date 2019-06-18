import { ActionTree } from 'vuex';

import { State } from '@/store/state';
import { Choice, Poll } from '@/models';
import { createPoll, fetchChoices, fetchPolls } from '@/apis';

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

  async fetchChoices({ commit }, pollId: string): Promise<Choice[]> {
    const { data } = await fetchChoices(pollId);

    return data.map(choiceData => {
      const choice = {
        ...choiceData.fields,
        id: String(choiceData.pk),
        poll_id: String(choiceData.fields.poll_id),
      };

      commit('SET_CHOICE', choice);
      return choice;
    });
  },

  async createPoll({ commit }, title): Promise<Poll> {
    const { data } = await createPoll(title);

    const poll = {
      id: String(data.pk),
      ...data.fields,
    };

    commit('SET_POLL', poll);

    return poll;
  },
};
