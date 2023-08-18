import GrandChild from "./grandChild"
import {useContext} from "react"
import {UserContext} from "./contentPrivider"
const Child=()=>{
  const userContext=useContext(UserContext);
  return (
    <div>
      <h2>子组件<p>{JSON.stringify(userContext)}</p></h2>
      <GrandChild/>
    </div>
  )
}

export default Child