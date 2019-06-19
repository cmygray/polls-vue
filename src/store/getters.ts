import { GetterTree } from 'vuex';
import { State } from '@/store/state';

export const getters: GetterTree<State, State> = {
  allPolls: state =>
    Object.values(state.polls).sort(
      (currentPoll, nextPoll) =>
        +new Date(nextPoll.created_at) - +new Date(currentPoll.created_at)
    ),
  getPollById: state => (id: string) => state.polls[id],
};
