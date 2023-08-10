import {Outlet} from "react-router-dom"
// import {lazy} from "react"
import { useState } from 'react';
import { Layout,Button } from 'antd';
const { Header, Sider, Content } = Layout;

// import "./index-layout.less"
import styles from "./index-layout.module.less"

import HeaderInnner from "./header/index-header"
import SiderInner from "./sider/index-sider"

//lazy load error don't know why!
// const HeaderInnner=lazy(()=>import("./header/index-header"));
// const SiderInner=lazy(()=>import("./sider/index-sider"));


import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className={styles.layout}>
      <Sider collapsed={collapsed}>
        <SiderInner></SiderInner>
      </Sider>
      <Layout>
        <Header>
          <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <HeaderInnner></HeaderInnner>
        </Header>
        <Content><Outlet/></Content>
      </Layout>
    </Layout>
  );
};
// function Login(){
//   return (
//     <div>
//       <div>layout</div>
//       <Outlet/>
//     </div>
//   )
// }
// export default Login