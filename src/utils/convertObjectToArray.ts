import { sectionListType } from '../store/storeTypes';
import { helper } from './helper';

export type optionsType = { value: string; label: string };

export const convertObjectToArrayForSelect = (obj: {
  [key: string]: {
    name: string;
    category: string;
  };
}) => {
  return Object.keys(obj).reduce((acc, m) => {
    acc.push({ value: obj[m].name, label: obj[m].name, id: m });
    return acc;
  }, [] as { value: string; label: string; id: string }[]);
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
