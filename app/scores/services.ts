import { createQueryString } from "../common/utils";
import { ScoresOptions, ScoresResponse } from "./interfaces";

const baseUrl = "https://turtle-quest-api.vercel.app";

export const getScores = async (filters: ScoresOptions) => {
  const res = await fetch(
    `${baseUrl}/api/scores?${createQueryString(filters)}`,
  );
  return (await res.json()) as ScoresResponse;
};
