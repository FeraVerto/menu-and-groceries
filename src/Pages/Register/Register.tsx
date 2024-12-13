import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
//styles
import s from '../Auth/Auth.module.css';
//store
import Store from '../../stores/store';

export const Register = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    Store.userStore.setRegisterData({
      username: values.username,
      password: values.password,
    });

    navigate(`/auth`);
  };

  return (
    <div className={s.centered_container}>
      <Form
        name="normal_login"
        className={s.login_form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            //@ts-ignore
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="password2"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
          Or
          <NavLink to={`/auth`}> auth now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};
