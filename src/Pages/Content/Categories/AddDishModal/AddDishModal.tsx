//libraries
import { Modal, Form, Input, Button, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
//components
import { SelectProduct } from '../../../Cart/SelectProduct/SelectProduct';
//store
import Store from '../../../../store/store';
import {
  convertObjectToArrayForSelect,
  convertArrayForSelectSection,
} from '../../../../utils/convertObjectToArray';
import { dishDataPayload, sectionListType } from '../../../../store/storeTypes';
import { helper } from '../../../../utils/helper';
import { useState } from 'react';

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
  let { setNewDish, _ingredients, sectionMenuList } = Store;
  const options = convertObjectToArrayForSelect(_ingredients);
  //const optionsForSelectSection = convertArrayForSelectSection(sectionMenuList);

  const onFinish = (values: dishDataPayload) => {
    setNewDish({ ...values, sectionId: menuSection.sectionId });
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
      <Modal open={isOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
        <h1>Добавить новое блюдо</h1>
        <Form
          //{...formItemLayout}
          form={form}
          name="addNewDish"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="dishName"
            label="Введите название блюда"
            rules={[
              {
                max: 150,
                required: true,
                message: 'Введите название блюда',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="menuSection"
            label="Введите название раздела меню"
            initialValue={menuSection.sectionName}
            rules={[
              {
                required: true,
                message: 'Поле должно быть заполнено!',
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          {/* <Form.Item>
            <Select
              placeholder="Outlined"
              style={{ flex: 1 }}
              options={optionsForSelectSection}
              //onChange={onSelectChange}
              //onSelect={onSelectChange}
            />
          </Form.Item> */}
          <Form.Item
            name="ingredients"
            label="Выберите ингредиенты"
            rules={[
              {
                required: true,
                message: 'Выберите ингредиенты!',
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Outlined"
              style={{ flex: 1 }}
              options={options}
              //onChange={onSelectChange}
              //onSelect={onSelectChange}
            />
          </Form.Item>
          <Form.Item name="link" label="Добавьте ссылку на блюдо">
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Загрузите фото"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
