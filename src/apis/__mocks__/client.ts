import {
  choiceDataList,
  pollData,
  pollDataList,
} from '../../../tests/unit/__fixtures__';

export const client = {
  get: (path: string) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: pollDataList,
      });
    }

    if (path.endsWith('choices/')) {
      return Promise.resolve({
        data: choiceDataList,
      });
    }
  },

  post: (path: string, body: any) => {
    if (path === 'polls/') {
      return Promise.resolve({
        data: {
          ...pollData,
          fields: {
            ...pollData.fields,
            poll_title: body.poll_title,
          },
        },
      });
    }
  },
};
