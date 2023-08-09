import {Outlet} from "react-router-dom"
import { Layout } from '@douyinfe/semi-ui';
import "./index-layout.less"

import HeaderInnner from "./header/index-header"
import SiderInner from "./sider/index-sider"

export default () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout className="JA-layout">
            <Sider>
              <SiderInner></SiderInner>
            </Sider>
            <Layout>
                <Header>
                  <HeaderInnner></HeaderInnner>
                </Header>
                <Content>
                  Content
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