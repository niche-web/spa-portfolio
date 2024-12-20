export const isNotEmail = (value) => {
  return !value.includes("@");
};

export const isEmpty = (value) => {
  return value.trim().length === 0;
};
