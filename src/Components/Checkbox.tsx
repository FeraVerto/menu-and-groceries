import { ChangeEvent } from 'react';

//styles
import stl from './Checkbox.module.css';

type checkboxType = {
  removeProductFromList: (id: string, category: string) => void;
  id: string;
  category: string;
  label: string;
};

export const Checkbox = ({
  removeProductFromList,
  id,
  category,
  label,
}: checkboxType) => {
  const pressCheckbox = (id: string, category: string) => {
    removeProductFromList(id, category);
  };

  return (
    <div className={stl.checkbox}>
      <label className={stl.check__label}>
        <span className={stl.checkmark}>&#10003;</span>
        <input
          checked
          type="checkbox"
          name="item"
          className={stl.check__input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            pressCheckbox(id, category)
          }
        />
        {label}
      </label>
    </div>
  );
};
