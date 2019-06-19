import { poll, pollList } from '../../../tests/unit/__fixtures__';

export const client = {
  get: (path: string) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: pollList,
      });
    }
  },

  post: (path: string, body: any) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: {
          ...poll,
          poll_title: body.poll_title,
        },
      });
    }
  },
};
