import { ScoresResponse } from "./interfaces";

export const getScores = async () => {
  const res = await fetch("/api/scores");
  return (await res.json()) as ScoresResponse;
};
