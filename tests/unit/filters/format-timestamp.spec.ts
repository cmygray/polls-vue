import { formatTimestamp } from '@/filters/format-timestamp';

describe('formatTimestamp', () => {
  const TIME_STAMP = '2019-06-18T11:00:00'

  it('should return "yyyy-mm-dd HH:MM" string', () => {
    expect(formatTimestamp(TIME_STAMP)).toEqual('2019-06-18 11:00')
  })
})
