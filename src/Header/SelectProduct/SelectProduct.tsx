import { convertObjectToArray } from '../../utils/convertObjectToArray';
import Store from '../../store/store';
import { useState } from 'react';
import Select from 'react-select';

type SelectProduct = {
  addIngredientToList: (ing: { value: string; label: string }[] | null) => void;
};

export const SelectProduct = ({ addIngredientToList }: SelectProduct) => {
  let { ingredients } = Store;
  const [selectedOption, setSelectedOption] = useState(null);
  const options = convertObjectToArray(ingredients);

  return (
    <div>
      <Select
        isMulti
        defaultValue={selectedOption}
        //@ts-ignore
        onChange={setSelectedOption}
        options={options}
      />
      <button onClick={() => addIngredientToList(selectedOption)}>
        Add product to list
      </button>
    </div>
  );
};
