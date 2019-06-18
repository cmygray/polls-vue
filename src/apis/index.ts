import { client } from '@/apis/client';

interface PollData {
  pk: number;
  fields: {
    poll_title: string;
    created_at: string;
    starts_at: string;
    ends_at: string;
  };
}

interface ChoiceData {
  pk: number;
  fields: {
    poll_id: string;
    choice_text: string;
    votes_count: number;
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

export async function fetchChoices(
  pollId: string
): Promise<{ data: ChoiceData[] }> {
  return client.get(`polls/${pollId}/choices/`);
}
