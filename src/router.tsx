import {useRoutes,RouteObject,Navigate} from "react-router-dom";

import Login from "./views/login/index-login"
import Layout from "./views/layout/index-layout"
import Home from "./views/home/index-home"
import User from "./views/user/index-user"

export const routers:Array<object>=[
  {path:"/",label:"home",element:<Navigate to="/layout/home"/>},
  {path:"/layout",label:"layout", element:<Layout/>,
    children:[
      {path:"home",label:"home",element:<Home/>,index:true},
      {path:"user",label:"user",element:<User/>},
    ]
  },
  {path:"/login",label:"login", element:<Login/>, },
]

const GetRouters=()=>{
  const routes=useRoutes(routers)
  return routes
}
export default GetRouters;