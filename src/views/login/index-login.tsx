import {httpNavMenu,httpCaptcha} from  "@/api/api"
import { useNavigate,Outlet } from 'react-router-dom';
import { UserOutlined,LockOutlined,TagOutlined } from '@ant-design/icons';
import { Button, Form, Input, Col, Row } from 'antd';

import { useState,useEffect} from 'react'

import "./index-login.less"


export default ()=>{
  const [imgCaptcha,setCaptcha]=useState("")
  useEffect(()=>{
    // httpCaptcha().then(res=>{
    //   // console.log("httpCaptcha",res);
    //   setCaptcha(res.data);
    // })
    getCaptchaImg();
  },[])

  const getCaptchaImg=async()=>{
    let captchaAPIRes=await httpCaptcha();
    console.log("captchaAPIRes",captchaAPIRes);
    setCaptcha(captchaAPIRes.data);
  }

  const navigate = useNavigate();
  type FieldType = {
    username?: string;
    password?: string;
    captcha?: string;
    remember?: string;
  };
  const onFinish = (values: any) => {
    httpNavMenu().then(res=>{
      console.log("res",JSON.stringify(res));
      if(res.data.length>0){
        sessionStorage.setItem("navMenu",JSON.stringify(res.data));
        sessionStorage.setItem("userName",values.username);
        navigate('/dashboard');
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

        <Row className="captcha-row" gutter={16}>
          <Col className="gutter-row" span={17}>
            <Form.Item<FieldType>
              name="captcha"
              rules={[{ required: true, message: 'Please input captcha !' }]}
            >
              <Input placeholder="Please input captcha" prefix={<TagOutlined />}/>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={7}>
            <img className="captchaImg" src={imgCaptcha} alt="" />
          </Col>
        </Row>
        
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