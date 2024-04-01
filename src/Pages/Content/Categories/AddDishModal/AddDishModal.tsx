//libraries
import { Modal, Form, Input, Button, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
//store
import Store from '../../../../store/store';
//utils
import {
  convertObjectToArrayForSelect,
  convertArrayForSelectSection,
} from '../../../../utils/convertObjectToArray';
//types
import { dishDataPayload, sectionListType } from '../../../../store/storeTypes';
//styles
import stl from './AddDishModal.module.css';
//helper
import { helper } from '../../../../utils/helper';

type addDishModal = {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  menuSection: sectionListType;
};

export let formData: dishDataPayload | null = null;

export const AddDishModal = ({
  isOpen,
  setIsModalOpen,
  menuSection,
}: addDishModal) => {
  const [form] = Form.useForm();
  //временно
  let { setNewDish, _ingredients } = Store;
  const options = convertObjectToArrayForSelect(_ingredients);
  //const optionsForSelectSection = convertArrayForSelectSection(sectionMenuList);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { Option } = Select;

  const onSelect = (
    value: string | number,
    option: { value: string; label: string; id: string }
  ) => {
    setSelectedItems([...selectedItems, Number(option.id)]);
  };

  const onCancelForm = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = (values: dishDataPayload) => {
    let data = {
      ...values,
      sectionId: menuSection.sectionId,
      ingredients: selectedItems,
    };

    setNewDish(data);
    setIsModalOpen(false);
    form.resetFields();
    //addIngredientFromSelection(values.productsList);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Modal
        className={stl.add_dish_modal}
        open={isOpen}
        footer={null}
        onCancel={onCancelForm}
        width="500px"
      >
        <h1>Добавить новое блюдо</h1>
        <Form
          //{...formItemLayout}
          className={stl.add_dish_form}
          form={form}
          name="addNewDish"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          layout="vertical"
          scrollToFirstError
        >
          <Form.Item
            className={stl.dish_form_item}
            name="dishName"
            label="Название блюда"
            rules={[
              {
                max: 150,
                required: true,
                message: 'Введите название блюда',
              },
            ]}
          >
            <Input
              className={stl.dish_form_input}
              placeholder="Введите название блюда"
            />
          </Form.Item>
          <Form.Item
            className={stl.dish_form_item}
            name="ingredients"
            label="Ингредиенты"
            rules={[
              {
                required: true,
                message: 'Выберите ингредиенты!',
              },
            ]}
          >
            <Select
              className={stl.dish_form_input}
              mode="multiple"
              placeholder="Выберите ингредиенты"
              onSelect={onSelect}
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
          </Form.Item>
          <Form.Item
            className={stl.dish_form_item}
            name="menuSection"
            label="Раздел меню"
            initialValue={menuSection.sectionName}
            rules={[
              {
                required: true,
                message: 'Поле должно быть заполнено!',
              },
            ]}
          >
            <Input className={stl.dish_form_input} disabled />
          </Form.Item>
          <Form.Item
            className={stl.dish_form_item}
            name="link"
            label="Ссылка на блюдо"
          >
            <Input
              className={stl.dish_form_input}
              placeholder="Добавьте ссылку"
            />
          </Form.Item>
          <Form.Item
            className={`${stl.dish_form_item} ${stl.dish_form_upload}`}
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra=""
          >
            <Upload
              name="logo"
              action="/upload.do"
              listType="picture"
              maxCount={1}
            >
              <Button className={stl.add_photo_button}>Загрузите фото</Button>
            </Upload>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={stl.submit_button}
          >
            Создать карточку блюда
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
