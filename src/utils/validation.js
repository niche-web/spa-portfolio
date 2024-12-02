export const isEmail = (value) => {
  return value.includes("@");
};

export const isEmpty = (value) => {
  return value.trim() === "";
};
