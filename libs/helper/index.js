export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const range = (startAt, size) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};
