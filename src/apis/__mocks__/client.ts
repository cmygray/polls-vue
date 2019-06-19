import { poll, pollList } from '../../../tests/unit/__fixtures__';
import { Poll, PollAttrs } from '@/models';

export const client = {
  get: (path: string) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: pollList,
      });
    }
  },

  post: (path: string, body: Poll) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: {
          ...poll,
          poll_title: body.poll_title,
        },
      });
    }
  },

  patch: (path: string, body: PollAttrs) => {
    return Promise.resolve({
      data: {
        ...poll,
        ...body,
      },
    });
  },
};
