export interface Poll {
  id: string;
  poll_title: string;
  choices: Choice[];
  created_at: string;
  starts_at: string;
  ends_at: string;
}

export interface PollAttrs {
  id: string;
  poll_title: string;
  choices: Choice[];
  starts_at: string;
  ends_at: string;
}

export interface Choice {
  id: string;
  poll_id: number;
  choice_text: string;
  votes_count: number;
}
