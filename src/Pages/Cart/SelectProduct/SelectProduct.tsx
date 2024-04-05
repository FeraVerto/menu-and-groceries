//libraries
import { useCallback, useState } from 'react';
import { Button, Select } from 'antd';
import { observer } from 'mobx-react-lite';
//styles
import stl from './SelectProduct.module.css';
//store
import Store from '../../../store/store';
//utils
import { convertObjectToArrayForSelect } from '../../../utils/convertObjectToArray';
import { helper } from '../../../utils/helper';

type SelectProduct = {
  addIngredientToList: (ing: { value: string; label: string }[] | null) => void;
  tabIndex?: number;
};

export const SelectProduct = observer(
  ({ addIngredientToList, tabIndex }: SelectProduct) => {
    let { _ingredients } = Store;
    const { Option } = Select;
    const [selectedOption, setSelectedOption] = useState(null);
    // const [menuIsOpen, setMenuIsOpen] = useState(false);
    const options = convertObjectToArrayForSelect(_ingredients);

    const handleButtonClick = useCallback((): void => {
      addIngredientToList(selectedOption);
      setSelectedOption(null);
    }, [addIngredientToList, setSelectedOption, selectedOption]);

    // const handleButtonOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //   if (e.key === 'Enter') {
    //     setMenuIsOpen(true);
    //     console.log('menuIsOpen', menuIsOpen);
    //   }
    // };

    const onSelectChange = (_: any, option: any) => {
      setSelectedOption(option);
    };

    return (
      <div className={stl.modal_select_block}>
        <div className={stl.modal_select}>
          <Select
            mode="multiple"
            placeholder="Outlined"
            style={{ flex: 1 }}
            className={stl.select}
            onChange={onSelectChange}
            maxTagCount="responsive"
          >
            {options.map((item) => {
              return (
                <Option
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  className={stl.ingredient_option}
                >
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </div>

        <Button className={stl.select_button} onClick={handleButtonClick}>
          Искать
        </Button>
      </div>
    );
  }
);
