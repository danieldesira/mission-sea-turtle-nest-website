import { createQueryString } from "../common/utils";
import { ScoresOptions, ScoresResponse } from "./interfaces";

export const getScores = async (filters: ScoresOptions) => {
  const res = await fetch(`api/scores?${createQueryString(filters)}`);
  return (await res.json()) as ScoresResponse;
};
