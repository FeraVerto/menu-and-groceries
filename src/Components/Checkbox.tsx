import { ChangeEvent } from 'react';

type checkboxType = {
  checkedProduct: (id: string, category: string) => void;
  id: string;
  category: string;
};

export const Checkbox = ({ checkedProduct, id, category }: checkboxType) => {
  const a = (id: string, category: string) => {
    checkedProduct(id, category);
  };
  return (
    <div>
      <label htmlFor="item"></label>
      <input
        checked
        type="checkbox"
        name="item"
        onChange={(e: ChangeEvent<HTMLInputElement>) => a(id, category)}
      />
    </div>
  );
};
