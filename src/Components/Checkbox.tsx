import { ChangeEvent } from 'react';

type checkboxType = {
  removeProductFromList: (id: string, category: string) => void;
  id: string;
  category: string;
};

export const Checkbox = ({
  removeProductFromList,
  id,
  category,
}: checkboxType) => {
  const pressCheckbox = (id: string, category: string) => {
    removeProductFromList(id, category);
  };
  return (
    <div>
      <label htmlFor="item"></label>
      <input
        checked
        type="checkbox"
        name="item"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          pressCheckbox(id, category)
        }
      />
    </div>
  );
};
