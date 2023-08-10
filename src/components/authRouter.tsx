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