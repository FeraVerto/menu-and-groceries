export type optionsType = { value: string; label: string };

export const convertObjectToArray = (obj: {
  [key: string]: {
    name: string;
    category: string;
  };
}) => {
  return Object.keys(obj).reduce((acc, m) => {
    acc.push({ value: m, label: obj[m].name });
    return acc;
  }, [] as { value: string; label: string }[]);
};
