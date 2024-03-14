import { sectionListType } from '../store/storeTypes';

export type optionsType = { value: string; label: string };

export const convertObjectToArrayForSelect = (obj: {
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

export const convertArrayForSelectSection = (item: sectionListType[]) => {
  return item.reduce(
    (acc, item) => {
      acc.push({ value: item.sectionId, label: item.sectionName });
      return acc;
    },
    [{}] as {
      value: string;
      label: string;
    }[]
  );
};
