import { client } from '@/apis/client';
import { Poll } from '@/models';

export async function fetchPolls(): Promise<{ data: Poll[] }> {
  return client.get('polls/');
}

export async function createPoll(title: string): Promise<{ data: Poll }> {
  return client.post('polls/', {
    poll_title: title,
  });
}
