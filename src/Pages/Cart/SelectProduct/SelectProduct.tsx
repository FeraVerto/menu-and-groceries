//libraries
import { useCallback, useState } from 'react';
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
//components
import { Button } from '../../../Components/Button/Button';
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

interface SelectOption {
  value: string;
  label: string;
}

export const SelectProduct = observer(
  ({ addIngredientToList, tabIndex }: SelectProduct) => {
    let { _ingredients } = Store;
    const [selectedOption, setSelectedOption] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const options = convertObjectToArrayForSelect(_ingredients);

    const handleButtonClick = useCallback((): void => {
      addIngredientToList(selectedOption);
      setSelectedOption(null);
    }, [addIngredientToList, setSelectedOption, selectedOption]);

    const handleButtonOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        setMenuIsOpen(true);
        console.log('menuIsOpen', menuIsOpen);
      }
    };

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
            options={options}
            onChange={onSelectChange}
            //onSelect={onSelectChange}
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
