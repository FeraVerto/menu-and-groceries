import { convertObjectToArray } from '../../utils/convertObjectToArray';
import Store from '../../store/store';
import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { observer } from 'mobx-react-lite';
import stl from './SelectProduct.module.css';

type SelectProduct = {
  addIngredientToList: (ing: { value: string; label: string }[] | null) => void;
};

interface SelectOption {
  value: string;
  label: string;
}

const customStyles: StylesConfig<SelectOption> = {
  control: (provided, state) => ({
    ...provided,
    height: '60px',
    borderRadius: '15px',
    marginRight: '15px',
  }),
};

export const SelectProduct = observer(
  ({ addIngredientToList }: SelectProduct) => {
    let { ingredients } = Store;
    const [selectedOption, setSelectedOption] = useState(null);
    const options = convertObjectToArray(ingredients);

    return (
      <div className={stl.modal_select_block}>
        <div className={stl.modal_select}>
          <Select
            isMulti
            styles={customStyles}
            className={stl.select}
            defaultValue={selectedOption}
            //@ts-ignore
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <button
          className={stl.modal_select_button}
          onClick={() => addIngredientToList(selectedOption)}
        >
          Добавить в список
        </button>
      </div>
    );
  }
);
