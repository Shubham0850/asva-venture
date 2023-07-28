export const dateFormate = (originalDate: string) => {
  const dateObj = new Date(originalDate);

  // Define options for the date formatting
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat(
    "en-US",
    // @ts-ignore
    options
  ).format(dateObj);

  return formattedDate;
};
