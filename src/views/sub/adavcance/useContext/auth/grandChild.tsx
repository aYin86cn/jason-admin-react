import {useContext} from "react"
import {UserContext} from "./contentPrivider"

const GrandChild=()=>{
  const {userInfo,setUserInfo,login,logout}=useContext(UserContext)!;
  return (
    <div>
      <h3>孙组件{userInfo.name}</h3>
      <button onClick={()=>{setUserInfo({name:"jason",auth:true})}}>setUserInfo</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default GrandChild