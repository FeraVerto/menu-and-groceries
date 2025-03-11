import { ingredientsType, sectionsType } from '../stores/storeTypes';
import { helper } from './helper';

export type optionsType = { value: string; label: string };

export const convertArrayForSelectSection = (item: sectionsType[]) => {
  return item.reduce(
    (acc, item) => {
      acc.push({ value: item.id, label: item.sectionName });
      return acc;
    },
    [{}] as {
      value: string;
      label: string;
    }[]
  );
};
