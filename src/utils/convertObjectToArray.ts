import { sectionsType } from '../stores/storeTypes';
import { helper } from './helper';

export type optionsType = { value: string; label: string };
//временно (проверить можно ли объединить эти две функции в одну универсальную)
export const convertObjectToArrayForSelect = (obj: {
  [key: string]: {
    name: string;
    category: string;
  };
}) => {
  return Object.keys(obj).reduce((acc, m) => {
    acc.push({
      value: obj[m].name,
      label: obj[m].name,
      id: m,
      category: obj[m].category,
    });
    return acc;
  }, [] as { value: string; label: string; id: string; category: string }[]);
};

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
