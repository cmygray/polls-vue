import { Poll } from '@/models';

export interface State {
  polls: {
    [id: string]: Poll;
  };
}

export const state: State = {
  polls: {},
};
