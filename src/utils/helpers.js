export const formatDisplayDate = (dateString, short = false) => {
  const date = new Date(dateString.replace(/\//g, "-")); // Convert to "2024-10-25"
  if (!isNaN(date.getTime())) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: short ? undefined : "long",
      month: short ? "short" : "long",
      day: "numeric",
    }).format(date);
  }
};

export const formatTimeWithAmPm = (time) => {
  return `${time} ${time.split(":")[0] > 11 ? "PM" : "AM"}`;
};
