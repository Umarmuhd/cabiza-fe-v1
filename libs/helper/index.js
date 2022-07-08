export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const range = (startAt, size) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

export const toMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
};

// console.log(toMonthName(1)); // 👉️ "Jan"
// console.log(toMonthName(2)); // 👉️ "Feb"
// console.log(toMonthName(3)); // 👉️ "Mar"
