export interface Poll {
  id: string;
  poll_title: string;
  created_at: string;
  starts_at: string;
  ends_at: string;
}

export interface Choice {
  id: string;
  poll_id: string;
  choice_text: string;
  votes_count: number;
}
