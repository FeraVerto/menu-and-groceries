//libraries
import Button from 'antd/es/button/button';
import Input from 'antd/es/input/Input';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
//styles
import stl from './AddCategory.module.css';
import stl_button from '../../../buttonStyles.module.css';
//store
import Store from '../../../stores/store';
//helper
import { helper } from '../../../utils/helper';
import { useState } from 'react';

export const AddCategory = () => {
  const { sendSectionMenuItem, menu } = Store.data;
  const [error, setError] = useState('');
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (value: { sectionName: string }) => {
    const foundSection = menu?.find(
      (item) => item.sectionName === value.sectionName
    );
    if (!foundSection) {
      sendSectionMenuItem(value.sectionName);
      navigate(`${value.sectionName}`);
      form.resetFields();
    } else {
      setError('Уже существует!');
    }
  };

  return (
    <div className={stl.new_category_menu_form}>
      <div>{error}</div>
      <Form
        //{...formItemLayout}
        form={form}
        name="addNewCategory"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="sectionName"
          rules={[
            {
              //подумать над максимальным ограничением
              required: true,
              message: 'Введите название блюда',
            },
            {
              max: 18,
              message: 'Превышен лимит в 18 символов',
            },
          ]}
          style={{ marginBottom: 25 }}
        >
          <Input placeholder="Введите название категории" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={`${stl_button.button_white}`}
        >
          Создать категорию
        </Button>
      </Form>
    </div>
  );
};
