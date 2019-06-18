import { getters } from '@/store/getters';
import { State } from '@/store/state';
import { choice, poll } from '../__fixtures__';
import { Choice } from '@/models';

describe('getters', () => {
  let state: State

  beforeEach(() => {
    state = { polls: {}, choices: {} }
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
        choices: {}
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

  describe('getChoiceOfPoll', () => {
    const RELATED_POLL_ID = '12345'
    const UNRELATED_POLL_ID = '03049'

    beforeEach(() => {
      state = {
        polls: {},
        choices: {
          '1': {
            ...choice,
            id: '1',
            poll_id: RELATED_POLL_ID
          },
          '2': {
            ...choice,
            id: '2',
            poll_id: UNRELATED_POLL_ID
          },
          '3': {
            ...choice,
            id: '3',
            poll_id: RELATED_POLL_ID
          }
        }
      }
    });

    it('should return function returns choices filtered poll_id', () => {
      // @ts-ignore
      const relatedChoices = getters.getChoicesOfPoll(state)(RELATED_POLL_ID);

      relatedChoices.forEach((c: Choice) => {
        expect(c.poll_id).toEqual(RELATED_POLL_ID)
        expect(c.poll_id).not.toEqual(UNRELATED_POLL_ID)
      })
    })

    it('should return function returns choices sorted by id', () => {
      // @ts-ignore
      const relatedChoices = getters.getChoicesOfPoll(state)(RELATED_POLL_ID);

      const first = relatedChoices[0]
      const last = relatedChoices[relatedChoices.length - 1]

      expect(+first.id > +last.id).toEqual(true)
    })
  })
})
