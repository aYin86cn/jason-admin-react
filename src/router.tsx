import {lazy,Suspense} from "react"
import {useRoutes,Navigate} from "react-router-dom";

import Login from "./views/login/index-login"
import Layout from "./views/layout/index-layout"
import LayoutCommon from "./views/layout/layout-common"
// import Home from "./views/home/index-home"
// import User from "./views/user/index-user"

// const Login=lazy(()=>import("./views/login/index-login"));
// const Layout=lazy(()=>import("./views/layout/index-layout"));
const Home=lazy(()=>import("./views/home/index-home"));
const HomeDBA=lazy(()=>import("./views/home/sub/dashboardA"));
const HomeDBB=lazy(()=>import("./views/home/sub/dashboardB"));
const User=lazy(()=>import("./views/user/index-user"));
const UserInfo=lazy(()=>import("./views/user/sub/info"));
const UserPass=lazy(()=>import("./views/user/sub/password"));

const lazyLoad=(comp:JSX.Element)=>(
  <Suspense fallback={<div>Loading...</div>}>
    {comp}
  </Suspense>
)

//use lazy loading of component must wrap as React.Suspense fallback
// {path:"home",label:"home",element:<Suspense fallback={<div>Loading...</div>}>
//   <Home/>
// </Suspense>,index:true},

interface RouterItem {
  path: string;
  label: string;
  icon?: string;
  element: JSX.Element;
  children?: RouterItem[];
}


export const routers: RouterItem[]=[
  {path:"/",label:"home",element:<Navigate to="/layout/home/dashboardA"/>},
  {path:"/layout",label:"layout", element:<Layout/>,
    children:[
      {path:"/layout/home",label:"home",icon:"i carbon:airplay-filled",element:lazyLoad(<LayoutCommon/>),children:[
        {path:"/layout/home/dashboardA",label:"dashboardA",element:lazyLoad(<HomeDBA/>)},
        {path:"/layout/home/dashboardB",label:"dashboardB",element:lazyLoad(<HomeDBB/>)},
      ]},
      {path:"/layout/user",label:"user",icon:"i carbon:user-avatar-filled",element:lazyLoad(<LayoutCommon/>),children:[
        {path:"/layout/user/info",label:"info",element:lazyLoad(<UserInfo/>)},
        {path:"/layout/user/password",label:"password",element:lazyLoad(<UserPass/>)},
      ]},
    ]
  },
  {path:"/login",label:"login", element:<Login/>, },
]

const GetRouters=()=>{
  const routes=useRoutes(routers)
  return routes
}
export default GetRouters;