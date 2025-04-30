//libraries
import { useCallback, useState } from 'react';
import { Button, Form, Select } from 'antd';
import { observer } from 'mobx-react-lite';
//styles
import stl_button from './../../../buttonStyles.module.css';
import stl from './SelectIngredient.module.css';
//store
import Store from '../../../stores/store';
//utils
import { rules } from '../../Content/Categories/AddDishModal/rulesAddDishModalForm';
//types
import {
  ingrediendsDataPayload,
  ingredientsType,
} from '../../../stores/storeTypes';
import { helper } from '../../../utils/helper';

type SelectIngredient = {
  // addIngredientToList: (ing: ingrediendsDataPayload[]) => null | void;
  tabIndex?: number;
};

type SelectOption = {
  value: string;
  category: string;
  id: string;
};

export const SelectIngredient = observer(({ tabIndex }: SelectIngredient) => {
  let { ingredients } = Store.data;
  const { Option } = Select;
  const { Item } = Form;
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState<SelectOption[]>([]);

  const addIngredientToList = useCallback(
    (ing: { id: string; name: string; category: string }[]): null | void => {
      if (ing === null) {
        return null;
      }

      // addIngredientFromSelection(ing);
    },
    []
  );

  const onFinish = useCallback((): void => {
    let newData = selectedOption.reduce((acc, item) => {
      return [
        ...acc,
        { id: item.id, name: item.value, category: item.category },
      ];
    }, [] as ingrediendsDataPayload[]);
    addIngredientToList(newData);
    form.resetFields();
    setSelectedOption([]);
  }, [addIngredientToList, setSelectedOption, selectedOption, form]);

  const onSelectChange = (_: any, option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className={stl.modal_select_form_container}>
      <Form className={stl.modal_form} onFinish={onFinish} form={form}>
        <Item
          className={stl.modal_form_item}
          name="ingredients"
          rules={rules.ingredients}
        >
          <Select
            mode="multiple"
            placeholder="Выберите ингредиенты"
            style={{ flex: 1 }}
            className={stl.select}
            onChange={onSelectChange}
            maxTagCount="responsive"
          >
            {ingredients.map((item) => {
              return (
                <Option
                  key={item._id}
                  id={item._id}
                  value={item.name}
                  category={item.category}
                  className={stl.option}
                >
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Item>
        <Button
          className={`${stl_button.button_white} ${stl.button_size}`}
          type="primary"
          htmlType="submit"
        >
          Добавить
        </Button>
      </Form>
    </div>
  );
});
