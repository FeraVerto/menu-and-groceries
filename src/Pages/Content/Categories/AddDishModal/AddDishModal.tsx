//libraries
import { Modal, Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
//components
import { SelectProduct } from '../../../Cart/SelectProduct/SelectProduct';
//store
import Store from '../../../../store/store';
import { useCallback } from 'react';

type addDishModal = {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

export const AddDishModal = ({ isOpen, setIsModalOpen }: addDishModal) => {
  const [form] = Form.useForm();
  let { addIngredientFromSelection } = Store;

  //временное дублирование
  const addIngredientToList = useCallback(
    (ing: { value: string; label: string }[] | null): null | void => {
      if (ing === null) {
        return null;
      }
      const ingredientsArrayId = ing.reduce((acc, item) => {
        return [...acc, item.value];
      }, [] as string[]);

      addIngredientFromSelection(ingredientsArrayId);
    },
    [addIngredientFromSelection]
  );

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Modal
        title="Добавьте новое блюдо"
        open={isOpen}
        //onOk={() => handleOk('123')}
        // onCancel={handleCancel}
      >
        <h1>Добавить новое блюдо</h1>
        <Form
          //{...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Введите название блюда"
            //   rules={[
            //     {
            //       type: 'name',
            //       message: 'The input is not valid E-mail!',
            //     },
            //     {
            //       required: true,
            //       message: 'Please input your E-mail!',
            //     },
            //   ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="productsList"
            label="Выберите ингредиенты"
            //   rules={[
            //     {
            //       type: 'name',
            //       message: 'The input is not valid E-mail!',
            //     },
            //     {
            //       required: true,
            //       message: 'Please input your E-mail!',
            //     },
            //   ]}
          >
            <SelectProduct addIngredientToList={addIngredientToList} />
          </Form.Item>
          <Form.Item
            name="link"
            label="Добавьте ссылку на блюдо"
            //   rules={[
            //     {
            //       type: 'name',
            //       message: 'The input is not valid E-mail!',
            //     },
            //     {
            //       required: true,
            //       message: 'Please input your E-mail!',
            //     },
            //   ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Загрузите фото"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button
              //icon={<UploadOutlined />}
              >
                Click to upload
              </Button>
            </Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <p>Some contents...</p>
        </Form>
      </Modal>
    </div>
  );
};
