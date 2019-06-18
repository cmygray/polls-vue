import { actions } from '@/store/actions';
import { choiceDataList, pollDataList } from '../__fixtures__';

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

      expect(result).toEqual(pollDataList.map(pollData => ({
        id: String(pollData.pk),
        ...pollData.fields,
      })))
    })

    it("should commit expected mutation", async () => {
      // @ts-ignore
      await actions.fetchPolls(contextMock)

      expect(contextMock.commit).toBeCalledWith(
        'SET_POLL', expect.objectContaining({})
      )
      expect(contextMock.commit).toBeCalledTimes(pollDataList.length)
    })
  })

  describe('fetchChoices', () => {
    const POLL_ID = 'blah'
    it('should return list of fetched choices', async () => {
      // @ts-ignore
      const result = await actions.fetchChoices(contextMock, POLL_ID)

      expect(result).toEqual(choiceDataList.map(choiceData => ({
        ...choiceData.fields,
        id: String(choiceData.pk),
        poll_id: String(choiceData.fields.poll_id),
      })))
    })

    it("should commit expected mutation", async () => {
      // @ts-ignore
      await actions.fetchChoices(contextMock, POLL_ID)

      expect(contextMock.commit).toBeCalledWith(
        'SET_CHOICE', expect.objectContaining({})
      )
      expect(contextMock.commit).toBeCalledTimes(choiceDataList.length)
    })
  })
})
