//libraries
import { Modal, Form, Input, Button, Upload, Select, UploadFile } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { UploadChangeParam } from 'antd/es/upload';
//store
import Store from '../../../../stores/store';
//utils
import { rules } from './rulesAddDishModalForm';
import { getBase64 } from '../../../../utils/getBase64';
//types
import {
  dishDataPayload,
  ingredientsType,
  sectionsType,
} from '../../../../stores/storeTypes';
//styles
import stl from './AddDishModal.module.css';
import stl_button from '../../../../buttonStyles.module.css';
//helper
import { helper } from '../../../../utils/helper';
import { observer } from 'mobx-react-lite';

type addDishModal = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpens: boolean) => void;
  menuSection: sectionsType;
};

export let formData: dishDataPayload | null = null;

export const AddDishModal = observer(
  ({ isModalOpen, setIsModalOpen, menuSection }: addDishModal) => {
    const [form] = Form.useForm();
    //временно
    let { setNewDish, ingredients } = Store.data;
    const [selectedItems, setSelectedItems] = useState<ingredientsType[]>([]);
    const [imageUrl, setImageUrl] = useState('');
    const [dataImage, setDataImage] =
      useState<UploadChangeParam<UploadFile<any>>>();
    const { Option } = Select;

    useEffect(() => {
      const onChangeFile = async (value: any) => {
        await getBase64(value?.file).then((result) => {
          setImageUrl(result);
        });
      };

      onChangeFile(dataImage);
    }, [dataImage]);

    const onSelect = useCallback(
      (
        value: string | number,
        option: { value: string; label: string; _id: string; category: string }
      ) => {
        let result = selectedItems.find((item) => item._id === option._id);

        if (!result) {
          setSelectedItems([
            ...selectedItems,
            { _id: option._id, name: option.value, category: option.category },
          ]);
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
          sectionId: menuSection.id,
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
        menuSection.id,
        form,
      ]
    );

    const normFile = (e: any) => {
      setDataImage(e);
    };

    const getIngredients = () => {
      Store.shoppingListStore.fetchIngredients();
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
                onClick={getIngredients}
              >
                {ingredients?.map((item) => {
                  return (
                    <Option
                      key={item._id}
                      _id={item._id}
                      category={item.category}
                      value={item.name}
                      className={stl.ingredient_option}
                    >
                      {item.name}
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
  }
);
