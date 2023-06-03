//libraries
import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { observer } from 'mobx-react-lite';
//components
import { Button } from '../../../Components/Button/Button';
//styles
import stl from './SelectProduct.module.css';
//store
import Store from '../../../store/store';
//utils
import { convertObjectToArray } from '../../../utils/convertObjectToArray';

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

    const handleButtonClick = () => {
      addIngredientToList(selectedOption);
      setSelectedOption(null);
    };

    return (
      <div className={stl.modal_select_block}>
        <div className={stl.modal_select}>
          <Select
            isMulti
            styles={customStyles}
            className={stl.select}
            value={selectedOption}
            //@ts-ignore
            onChange={setSelectedOption}
            options={options}
          />
        </div>

        <Button
          width={'300px'}
          height={'60px'}
          text={'Добавить'}
          onClick={handleButtonClick}
        />
      </div>
    );
  }
);
