import { getters } from '@/store/getters';
import { State } from '@/store/state';
import { poll } from '../__fixtures__';

describe('getters', () => {
  let state: State

  beforeEach(() => {
    state = { polls: {} }
  })

  describe('allPolls', () => {
    beforeEach(() => {
      state = {
        polls: {
          'older' : {
            ...poll,
            id: 'older',
            created_at: '2019-06-13T17:47:36.840Z'
          },
          'now': {
            ...poll,
            id: 'now',
            created_at: '2019-06-15T17:47:36.840Z'
          },
          'newer': {
            ...poll,
            id: 'newer',
            created_at: '2019-06-17T17:47:36.840Z'
          }
        },
      }
    })

    it('should return all polls as an array sorted by created at DESC', () => {
      // @ts-ignore
      expect(getters.allPolls(state)).toEqual([
        state.polls.newer,
        state.polls.now,
        state.polls.older,
      ])
    })
  })
})
