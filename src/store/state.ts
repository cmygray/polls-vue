import { Choice, Poll } from '@/models';

export interface State {
  polls: {
    [id: string]: Poll;
  };
  choices: {
    [pollId: string]: Choice;
  };
}

export const state: State = {
  polls: {},
  choices: {},
};
