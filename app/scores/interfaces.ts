export interface ScoresResponse {
  scores: Array<Score>;
  currentPage: number;
  totalPages: number;
}

export interface Score {
  playerProfilePicUrl?: string;
  playerName: string;
  playerAge?: number;
  level: number;
  duration: number;
  points: number;
  outcome: string;
  resetsUsed: number;
}

export interface ScoresOptions {
  outcome?: "WIN" | "LOSS";
  juniors?: boolean;
  items?: number;
  page?: number;
}
