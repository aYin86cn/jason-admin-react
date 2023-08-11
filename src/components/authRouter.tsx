import {useLocation, Navigate } from 'react-router-dom';

export default (props:{children:JSX.Element})=>{
  const {pathname}=useLocation();
  const token=sessionStorage.getItem("userName");
  if(pathname!='/login'&&!token){
    return <Navigate to="/login"/>
  }else{
    return props.children
  }
}



// import {useRoutes, useLocation, Navigate } from 'react-router-dom';
// import {routers,processRouter} from "@/router";

// export default ()=>{
//   processRouter()
//   const Router= useRoutes(routers);
//   console.log("Router",Router);
  
//   const {pathname}=useLocation();
//   const token=sessionStorage.getItem("userName");
//   console.log("authrouter!!!!");
//   if(pathname!='/login'&&!token){
//     return <Navigate to="/login"/>
//   }else{
//     return Router
//   }
// }