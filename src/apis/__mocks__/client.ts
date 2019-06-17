import { pollDataList } from '../../../tests/unit/__fixtures__';

export const client = {
  get: (path: string) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: pollDataList,
      });
    }
  },
};
