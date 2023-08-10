import {lazy,Suspense} from "react"
import {useRoutes,Navigate} from "react-router-dom";

import Login from "./views/login/index-login"
import Layout from "./views/layout/index-layout"
import LayoutCommon from "./views/layout/layout-common"

// import Home from "./views/home/index-home"
// import User from "./views/user/index-user"

import HomeDBA from "./views/home/sub/dashboardA"
import HomeDBB from "./views/home/sub/dashboardB"
import UserInfo from "./views/user/sub/info"
import UserPass from "./views/user/sub/password"

// const Login=lazy(()=>import("./views/login/index-login"));
// const Layout=lazy(()=>import("./views/layout/index-layout"));
// const Home=lazy(()=>import("./views/home/index-home"));
// const User=lazy(()=>import("./views/user/index-user"));
// const HomeDBA=lazy(()=>import("./views/home/sub/dashboardA"));
// const HomeDBB=lazy(()=>import("./views/home/sub/dashboardB"));
// const UserInfo=lazy(()=>import("./views/user/sub/info"));
// const UserPass=lazy(()=>import("./views/user/sub/password"));

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
  label?: string;
  icon?: string;
  element: JSX.Element;
  children?: RouterItem[];
}


export const routers: RouterItem[]=[
  {path:"/",element:<Navigate to="/login"/>},
  {path:"/dashboardA",label:"dashboardA",element:lazyLoad(<HomeDBA/>)},
  {path:"/dashboardB",label:"dashboardB",element:lazyLoad(<HomeDBB/>)},
  {path:"/layout",label:"layout", element:<Layout/>,
    children:[
      {path:"home",label:"home",icon:"i carbon:airplay-filled",element:lazyLoad(<LayoutCommon/>),children:[
        {path:"dashboardA",label:"dashboardA",element:lazyLoad(<HomeDBA/>)},
        {path:"dashboardB",label:"dashboardB",element:lazyLoad(<HomeDBB/>)},
      ]},
      {path:"user",label:"user",icon:"i carbon:user-avatar-filled",element:lazyLoad(<LayoutCommon/>),children:[
        {path:"info",label:"info",element:lazyLoad(<UserInfo/>)},
        {path:"password",label:"password",element:lazyLoad(<UserPass/>)},
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