import {httpNavMenu} from  "@/api/api"
import { useNavigate,Outlet } from 'react-router-dom';
import {useState} from "react";
import { UserOutlined,LockOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import "./login.less"


export default ()=>{
  const navigate = useNavigate();

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const onFinish = (values: any) => {
    httpNavMenu().then(res=>{
      console.log("res",res.data);
      if(res.data.length>0){
        sessionStorage.setItem("navMenu",JSON.stringify(res.data));
        sessionStorage.setItem("userName",values.username);
        navigate('/layout');
      }else{
        console.error("Can't get NavMenu !");
      }
    })
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      
      <div className="login-wrap">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Please input name" prefix={<UserOutlined />}/>
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Please input password" prefix={<LockOutlined />}/>
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
        {/* <Input size="large" placeholder="Please input name" prefix={<UserOutlined />} />
        <Input.Password
          size="large"
          placeholder="Please input password"
          prefix={<LockOutlined />}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Button className="btn-submit" size="large" type="primary" onClick={login}>login</Button> */}
      </div>
      <Outlet/>
    </div>
  )
}