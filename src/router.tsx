import {lazy,Suspense} from "react"
import {useRoutes,Navigate} from "react-router-dom";

import Login from "./views/login/index-login"
import Layout from "./views/layout/index-layout"
// import Home from "./views/home/index-home"
// import User from "./views/user/index-user"

// const Login=lazy(()=>import("./views/login/index-login"));
// const Layout=lazy(()=>import("./views/layout/index-layout"));
const Home=lazy(()=>import("./views/home/index-home"));
const User=lazy(()=>import("./views/user/index-user"));

const lazyLoad=(comp:JSX.Element)=>(
  <Suspense fallback={<div>Loading...</div>}>
    {comp}
  </Suspense>
)

export const routers:Array<object>=[
  {path:"/",label:"home",element:<Navigate to="/layout/home"/>},
  {path:"/layout",label:"layout", element:<Layout/>,
    children:[
      //use lazy loading of component must wrap as React.Suspense fallback
      // {path:"home",label:"home",element:<Suspense fallback={<div>Loading...</div>}>
      //   <Home/>
      // </Suspense>,index:true},
      {path:"home",label:"home",element:lazyLoad(<Home/>),index:true},
      {path:"user",label:"user",element:lazyLoad(<User/>)},
        
    ]
  },
  {path:"/login",label:"login", element:<Login/>, },
]

const GetRouters=()=>{
  const routes=useRoutes(routers)
  return routes
}
export default GetRouters;