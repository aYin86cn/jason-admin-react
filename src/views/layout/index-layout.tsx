import {Outlet} from "react-router-dom"
// import {lazy} from "react"
import { Layout } from '@douyinfe/semi-ui';
// import "./index-layout.less"
import styles from "./index-layout.module.less"

import HeaderInnner from "./header/index-header"
import SiderInner from "./sider/index-sider"

//lazy load error don't know why!
// const HeaderInnner=lazy(()=>import("./header/index-header"));
// const SiderInner=lazy(()=>import("./sider/index-sider"));


export default () => {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={styles.layout}>
      {/* <Layout className="JA-layout"> */}
        <Sider>
          <SiderInner></SiderInner>
        </Sider>
        <Layout>
          <Header>
            <HeaderInnner></HeaderInnner>
          </Header>
          <Content>
            <Outlet/>
          </Content>
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