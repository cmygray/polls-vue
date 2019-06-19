import { actions } from '@/store/actions';
import { poll, pollList } from '../__fixtures__';

jest.mock('@/apis/client')

describe('actions', () => {
  const contextMock = {
    commit: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('createPoll', () => {
    const TITLE = 'poll title'
    it('should return created poll', async () => {
      // @ts-ignore
      const result = await actions.createPoll(contextMock, TITLE)

      expect(result).toEqual(expect.objectContaining({
        poll_title: TITLE,
      }))
    })

    it("should commit expected mutation", async () => {
      // @ts-ignore
      await actions.createPoll(contextMock, TITLE)

      expect(contextMock.commit).toBeCalledWith(
        'SET_POLL', expect.objectContaining({})
      )
    })
  })

  describe('fetchPolls', () => {
    it('should return list of fetched polls', async () => {
      // @ts-ignore
      const result = await actions.fetchPolls(contextMock)

      expect(result).toEqual(pollList)
    })

    it("should commit expected mutation", async () => {
      // @ts-ignore
      await actions.fetchPolls(contextMock)

      expect(contextMock.commit).toBeCalledWith(
        'SET_POLL', expect.objectContaining({})
      )
      expect(contextMock.commit).toBeCalledTimes(pollList.length)
    })
  })

  describe('updatePoll', () => {
    const POLL_ATTRS = {
      poll_title: 'POLL_TITLE',
      choices: poll.choices.map((choice, index) => ({
        ...choice,
        choice_text: `CHOICE_TEXT ${index + 1}`
      }))
    }

    it('should return updated poll', async () => {
      // @ts-ignore
      const result = await actions.updatePoll(contextMock, POLL_ATTRS)

      expect(result).toEqual({
        ...poll,
        ...POLL_ATTRS,
      })
    })

    it('should commit expected mutation', async () => {
      // @ts-ignore
      await actions.updatePoll(contextMock, POLL_ATTRS)

      expect(contextMock.commit).toBeCalledWith(
        'SET_POLL', expect.objectContaining({})
      )
    })
  })
})
