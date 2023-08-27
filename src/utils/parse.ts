export const stringToInt = (value: string) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? undefined : parsed;
};

export const stringToFloat = (value: string) => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
};
