import { actions } from '@/store/actions';
import { pollDataList } from '../__fixtures__';

jest.mock('@/apis/client')

describe('actions', () => {
  const contextMock = {
    commit: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchPolls', () => {
    it('should return list of fetched polls', async () => {
      // @ts-ignore
      const result = await actions.fetchPolls(contextMock)

      expect(result).toEqual(pollDataList.map(pollData => ({
        id: pollData.pk,
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
})
