import { GetterTree } from 'vuex';
import { State } from '@/store/state';

export const getters: GetterTree<State, State> = {
  allPolls: state =>
    Object.values(state.polls).sort(
      (currentPoll, nextPoll) =>
        +new Date(nextPoll.created_at) - +new Date(currentPoll.created_at)
    ),
  getChoicesOfPoll: state => (pollId: string) =>
    Object.values(state.choices)
      .filter(choice => choice.poll_id === pollId)
      .sort((current, next) => +next.id - +current.id),
};
