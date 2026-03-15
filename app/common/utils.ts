import { ScoresOptions } from "../scores/interfaces";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export const formatDate = (input: string) => {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }
  return dateFormatter.format(date);
};

export const createQueryString = (filters: ScoresOptions) => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    searchParams.set(key, value);
  }
  return searchParams.toString();
};
