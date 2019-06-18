import { client } from '@/apis/client';

interface PollData {
  pk: string;
  fields: {
    poll_title: string;
    created_at: string;
    starts_at: string;
    ends_at: string;
  };
}

export async function fetchPolls(): Promise<{ data: PollData[] }> {
  return client.get('polls/');
}

export async function createPoll(title: string): Promise<{ data: PollData }> {
  return client.post('polls/', {
    poll_title: title,
  });
}
