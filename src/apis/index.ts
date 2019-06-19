import { client } from '@/apis/client';
import { Choice, Poll, PollAttrs } from '@/models';

export async function fetchPolls(): Promise<{ data: Poll[] }> {
  return client.get('polls/');
}

export async function createPoll(title: string): Promise<{ data: Poll }> {
  return client.post('polls/', {
    poll_title: title,
  });
}

export async function updatePoll(poll: PollAttrs): Promise<{ data: Poll }> {
  return client.patch(`polls/${poll.id}`, poll);
}

export async function voteToPoll(choice: Choice): Promise<{ data: Poll }> {
  return client.post(`polls/${choice.poll_id}/actions/vote`, {
    choice_id: choice.id,
  });
}
