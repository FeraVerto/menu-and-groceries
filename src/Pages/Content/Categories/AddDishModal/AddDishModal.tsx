//libraries
import { Modal, Form, Input, Button, Upload, Select, UploadFile } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { UploadChangeParam } from 'antd/es/upload';
//store
import Store from '../../../../store/store';
//utils
import {
  convertObjectToArrayForSelect,
  convertArrayForSelectSection,
} from '../../../../utils/convertObjectToArray';
import { rules } from './rulesAddDishModalForm';
import { getBase64 } from '../../../../utils/getBase64';
//types
import { dishDataPayload, sectionListType } from '../../../../store/storeTypes';
//styles
import stl from './AddDishModal.module.css';
import stl_button from '../../../../buttonStyles.module.css';
//helper
import { helper } from '../../../../utils/helper';

type addDishModal = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpens: boolean) => void;
  menuSection: sectionListType;
};

export let formData: dishDataPayload | null = null;

export const AddDishModal = ({
  isModalOpen,
  setIsModalOpen,
  menuSection,
}: addDishModal) => {
  const [form] = Form.useForm();
  //временно
  let { setNewDish, ingredients } = Store;
  const options = convertObjectToArrayForSelect(ingredients);
  //const optionsForSelectSection = convertArrayForSelectSection(sectionMenuList);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [dataImage, setDataImage] =
    useState<UploadChangeParam<UploadFile<any>>>();
  const { Option } = Select;

  useEffect(() => {
    const onChangeFile = async (value: any) => {
      await getBase64(value.file).then((result) => {
        setImageUrl(result);
      });
    };

    onChangeFile(dataImage);
  }, [dataImage]);

  const onSelect = useCallback(
    (
      value: string | number,
      option: { value: string; label: string; id: string }
    ) => {
      let result = selectedItems.find((item) => item === Number(option.id));

      if (!result) {
        setSelectedItems([...selectedItems, Number(option.id)]);
      }
    },
    [selectedItems, setSelectedItems]
  );

  const onCancel = useCallback(() => {
    form.resetFields();
    setIsModalOpen(false);
  }, [form, setIsModalOpen]);

  const onFinish = useCallback(
    (values: dishDataPayload) => {
      let data = {
        ...values,
        sectionId: menuSection.sectionId,
        ingredients: selectedItems,
        image: imageUrl,
      };

      setNewDish(data);
      setIsModalOpen(false);
      form.resetFields();
      //addIngredientFromSelection(values.productsList);
    },
    [
      setNewDish,
      selectedItems,
      imageUrl,
      setIsModalOpen,
      menuSection.sectionId,
      form,
    ]
  );

  const normFile = (e: any) => {
    setDataImage(e);
  };

  return (
    <div>
      <Modal
        className={stl.add_dish_modal}
        open={isModalOpen}
        footer={null}
        onCancel={onCancel}
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
            rules={rules.dishName}
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
            rules={rules.ingredients}
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
            rules={rules.menuSection}
          >
            <Input className={stl.dish_form_input} disabled />
          </Form.Item>
          <Form.Item
            className={stl.dish_form_item}
            name="link"
            label="Ссылка на блюдо"
            validateDebounce={1000}
            rules={rules.link}
          >
            <Input
              className={stl.dish_form_input}
              placeholder="Добавьте ссылку"
            />
          </Form.Item>
          <Form.Item
            // добавить валидацию для размера файла
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
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button className={stl.add_photo_button}>Загрузите фото</Button>
            </Upload>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`${stl.submit_button} ${stl_button.button}`}
          >
            Создать карточку блюда
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
