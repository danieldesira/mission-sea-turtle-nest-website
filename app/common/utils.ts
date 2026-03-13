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
