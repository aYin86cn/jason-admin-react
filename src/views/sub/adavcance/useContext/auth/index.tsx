
import {useContext} from "react"
import {ContextProvider,UserContext} from "./contentPrivider"
import Child from "./child"
export default ()=>{
  return (
    // const { userInfo, setUserInfo, login, logout } = useContext(UserContext)!;
    <ContextProvider>
      <div>React高阶知识--useContext
        {/* <p>{userInfo.name}</p> */}
        <hr />
        <Child/>
      </div>
    </ContextProvider>
  )
}