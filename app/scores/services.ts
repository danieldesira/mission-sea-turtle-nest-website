import { ScoresResponse } from "./interfaces";

export const getScores = async () => {
  const res = await fetch("https://turtle-quest-api.vercel.app/api/scores");
  return (await res.json()) as ScoresResponse;
};
