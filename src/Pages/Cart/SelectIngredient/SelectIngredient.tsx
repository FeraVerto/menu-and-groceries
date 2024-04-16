//libraries
import { useCallback, useState } from 'react';
import { Button, Form, Select } from 'antd';
import { observer } from 'mobx-react-lite';
//styles
import stl from './SelectIngredient.module.css';
//store
import Store from '../../../store/store';
//utils
import { convertObjectToArrayForSelect } from '../../../utils/convertObjectToArray';
import { rules } from '../../Content/Categories/AddDishModal/rulesAddDishModalForm';
//types
import { ingrediendsDataPayload } from '../../../store/storeTypes';
import { helper } from '../../../utils/helper';

type SelectIngredient = {
  addIngredientToList: (ing: ingrediendsDataPayload[]) => null | void;
  tabIndex?: number;
};

type SelectOption = {
  value: string;
  category: string;
  id: string;
};

export const SelectIngredient = observer(
  ({ addIngredientToList, tabIndex }: SelectIngredient) => {
    let { _ingredients } = Store;
    const { Option } = Select;
    const { Item } = Form;
    const [form] = Form.useForm();
    const [selectedOption, setSelectedOption] = useState<SelectOption[]>([]);
    const options = convertObjectToArrayForSelect(_ingredients);

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
              {options.map((item) => {
                return (
                  <Option
                    id={item.id}
                    value={item.value}
                    category={item.category}
                    className={stl.option}
                  >
                    {item.label}
                  </Option>
                );
              })}
            </Select>
          </Item>
          <Button
            className={stl.select_button}
            type="primary"
            htmlType="submit"
          >
            Добавить
          </Button>
        </Form>
      </div>
    );
  }
);
