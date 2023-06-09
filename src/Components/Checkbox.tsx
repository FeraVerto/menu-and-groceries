//libraries
import { ReactElement } from 'react';

//styles
import stl from './Checkbox.module.css';

type checkboxType = {
  id: string;
  label: string;
  checked: boolean;
  productFromList?: (id: string) => void;
};

export const Checkbox = ({
  productFromList,
  id,
  label,
  checked,
}: checkboxType): ReactElement => {
  const pressCheckbox = (id: string) => {
    productFromList && productFromList(id);
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
          onChange={() => pressCheckbox(id)}
        />
        {label}
      </label>
    </div>
  );
};
