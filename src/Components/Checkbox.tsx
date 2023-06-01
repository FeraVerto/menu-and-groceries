import { ChangeEvent } from 'react';

//styles
import stl from './Checkbox.module.css';

type checkboxType = {
  removeProductFromList?: (id: string, category: string) => void;
  addedProductFromList?: (id: string, category: string) => void;
  id: string;
  category: string;
  label: string;
  checked: boolean;
};

export const Checkbox = ({
  removeProductFromList,
  addedProductFromList,
  id,
  category,
  label,
  checked,
}: checkboxType) => {
  const pressCheckbox = (id: string, category: string) => {
    if (checked) {
      removeProductFromList && removeProductFromList(id, category);
    } else {
      addedProductFromList && addedProductFromList(id, category);
    }
  };

  return (
    <div className={stl.checkbox}>
      <label className={stl.check__label}>
        {checked && <span className={stl.checkmark}>&#10003;</span>}
        <input
          checked={checked}
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
