// import {lazy,Suspense} from "react"
import {useRoutes,Navigate} from "react-router-dom";

import Login from "./views/login/index-login"
import Layout from "./views/layout/index-layout"
import Error404 from "./views/error/error404"


import subComponent from "./views/sub/index"

// import Home from "./views/home/index-home"
// import User from "./views/user/index-user"


// const Login=lazy(()=>import("./views/login/index-login"));
// const Layout=lazy(()=>import("./views/layout/index-layout"));
// const Home=lazy(()=>import("./views/home/index-home"));
// const User=lazy(()=>import("./views/user/index-user"));
// const HomeDBA=lazy(()=>import("./views/home/sub/dashboardA"));
// const HomeDBB=lazy(()=>import("./views/home/sub/dashboardB"));
// const UserInfo=lazy(()=>import("./views/user/sub/info"));
// const UserPass=lazy(()=>import("./views/user/sub/password"));

// const lazyLoad=(comp:JSX.Element)=>(
//   <Suspense fallback={<div>Loading...</div>}>
//     {comp}
//   </Suspense>
// )

//use lazy loading of component must wrap as React.Suspense fallback
// {path:"home",label:"home",element:<Suspense fallback={<div>Loading...</div>}>
//   <Home/>
// </Suspense>,index:true},

interface RouterItem {
  path: string;
  name?:string;
  label?: string;
  icon?: string;
  element: JSX.Element;
  children?: RouterItem[];
  meta?:Object
}


export const routers: RouterItem[]=[
  {path:"/",element:<Navigate to="/login"/>},
  {path:"/layout",name:"base", element:<Layout/>,
    children:[
      // {path:"home",label:"home",icon:"i carbon:airplay-filled",element:lazyLoad(<LayoutCommon/>),children:[
      //   {path:"dashboardA",label:"dashboardA",element:lazyLoad(<HomeDBA/>)},
      //   {path:"dashboardB",label:"dashboardB",element:lazyLoad(<HomeDBB/>)},
      // ]},
      // {path:"user",label:"user",icon:"i carbon:user-avatar-filled",element:lazyLoad(<LayoutCommon/>),children:[
      //   {path:"info",label:"info",element:lazyLoad(<UserInfo/>)},
      //   {path:"password",label:"password",element:lazyLoad(<UserPass/>)},
      // ]},
    ]
  },
  {path:"/login",label:"login", element:<Login/>,meta:{
    title:"登录",
    noAuth:true
  }},
  {path:"*",label:"404",element:<Error404/>,meta:{
    title:"404",
    noAuth:true
  }},
]


interface StoreRouter {
  path: string;
  label: string;
  icon?: string;
  children?:[];
}

// 从 sessionStorage 获取路由数据
const storedRoutesJSON = sessionStorage.getItem('navMenu');
const storedRoutes: StoreRouter[] = storedRoutesJSON ? JSON.parse(storedRoutesJSON) : [];

// 根据 label 获取对应的组件元素
// const processedRouter: RouterItem[] = storedRoutes.map((route) => {
//   const { label } = route;
//   let regroup={
//     ...route,
//     path:label,
//     name:label,
//     element: subComponent[label],
//   };
//   console.log("regroup",regroup,subComponent[label]);
  
//   return regroup;
// });

function processNestedRoutes(routes: StoreRouter[]): RouterItem[] {
  return routes.map((route) => {
    const { label, children } = route;
    let regroup: RouterItem = {
      ...route,
      path: label,
      name: label,
      element: children?subComponent['layout']:subComponent[label],
    };
    if (children) {
      regroup.children = processNestedRoutes(children);
    }
    return regroup;
  });
}

const processedRouter: RouterItem[] = processNestedRoutes(storedRoutes);



const GetRouters=()=>{
  routers.forEach((item) =>{
    if(item.path == "/layout"){
      item.children=processedRouter;
    }
  })
  console.log("routers!!!",routers);
  
  const routes=useRoutes(routers)
  return routes
}
export default GetRouters;