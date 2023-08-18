import {useContext} from "react"
import {DemoContext} from "./index"

const GrandChild=()=>{
  const {setUserName}=useContext(DemoContext);
  return (
    <div>
      <h3>孙组件</h3>
      <button onClick={()=>{setUserName("Jason")}}>修改用户名</button>
    </div>
  )
}
export default GrandChild