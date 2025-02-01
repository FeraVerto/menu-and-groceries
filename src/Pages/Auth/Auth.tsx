//libraries
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
//styles
import s from './Auth.module.css';
//store
import Store from '../../stores/store';

export const AuthPage = observer(() => {
  const { error } = Store.userStore;

  const onFinish = (values: any) => {
    Store.userStore.userLogin(values);
  };

  return (
    <div className={s.centered_container}>
      {error?.message}
      <Form
        name="normal_login"
        className={s.login_form}
        initialValues={{ remember: true }}
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
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            //@ts-ignore
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or
          <NavLink to={`/register`}>register now!</NavLink>
        </Form.Item>
      </Form>
    </div>
  );
});
