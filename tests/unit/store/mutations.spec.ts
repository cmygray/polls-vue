import { state } from '@/store/state';
import { mutations } from '@/store/mutations';
import { choice, poll } from '../__fixtures__';

describe('mutations', () => {
  describe('SET_POLL', () => {
    it('should set poll to expected path', () => {
      const PATH = poll.id

      mutations.SET_POLL(state, poll);

      expect(state).toMatchSnapshot();
      expect(state.polls[PATH]).toEqual(poll)
    });
  });

  describe('SET_CHOICE', () => {
    it('should set choice to expected path', () => {
      const PATH = choice.id

      mutations.SET_CHOICE(state, choice);

      expect(state).toMatchSnapshot();
      expect(state.choices[PATH]).toEqual(choice)
    })
  })
});
