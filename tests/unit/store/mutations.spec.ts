import { state } from '@/store/state';
import { mutations } from '@/store/mutations';
import { poll } from '../__fixtures__';

describe('mutations', () => {
  describe('SET_POLL', () => {
    it('should set poll to expected path', () => {
      const PATH = poll.id

      mutations.SET_POLL(state, poll);

      expect(state).toMatchSnapshot();
      expect(state.polls[PATH]).toEqual(poll)
    });
  });
});
