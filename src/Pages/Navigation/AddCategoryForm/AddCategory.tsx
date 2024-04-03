//libraries
import Button from 'antd/es/button/button';
import Input from 'antd/es/input/Input';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
//styles
import stl from './AddCategory.module.css';
//store
import Store from '../../../store/store';
//helper
import { helper } from '../../../utils/helper';

export const AddCategory = () => {
  const { setSectionMenu } = Store;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (value: { sectionName: string }) => {
    setSectionMenu(value.sectionName);
    navigate(`${value.sectionName}`);
    form.resetFields();
  };

  return (
    <div className={stl.new_category_menu_form}>
      <h3>Добавить категорию</h3>
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
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form>
    </div>
  );
};
