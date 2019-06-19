import { client } from '@/apis/client';
import { Poll, PollAttrs } from '@/models';

export async function fetchPolls(): Promise<{ data: Poll[] }> {
  return client.get('polls/');
}

export async function createPoll(title: string): Promise<{ data: Poll }> {
  return client.post('polls/', {
    poll_title: title,
  });
}

export async function updatePoll(poll: PollAttrs): Promise<{ data: Poll }> {
  return client.patch(`polls/${poll.id}`, {
    poll_title: poll.poll_title,
    choices: poll.choices,
  });
}
