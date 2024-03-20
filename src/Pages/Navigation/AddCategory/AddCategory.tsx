//libraries
import Button from 'antd/es/button/button';
import Input from 'antd/es/input/Input';
import { ChangeEvent, useState } from 'react';
//store
import Store from '../../../store/store';
import { useNavigate } from 'react-router-dom';
//helper
import { helper } from '../../../utils/helper';

export const AddCategory = () => {
  const { setSectionMenu } = Store;
  const [newCategory, setNewCategory] = useState('');
  const navigate = useNavigate();

  const onChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.currentTarget.value);
  };

  const onClickHandler = () => {
    setSectionMenu(newCategory);
    navigate(`${newCategory}`);
  };
  return (
    <div>
      <h3>Создайте новую категорию меню</h3>
      <Input onChange={(e) => onChangedHandler(e)} />
      <Button type="primary" onClick={onClickHandler}>
        Создать
      </Button>
    </div>
  );
};
