import {useState,createContext,useContext} from "react"

interface CTX {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const initCtxVal: CTX = {
  userName: '',
  setUserName: () => {},
};

const DemoContext = createContext<CTX>(initCtxVal);


const Child=()=>{
  return (
    <div>
      <h2>子组件</h2>
      <GrandChild/>
    </div>
  )
}
const GrandChild=()=>{
  const {setUserName}=useContext(DemoContext);
  return (
    <div>
      <h3>孙组件</h3>
      <button onClick={()=>{setUserName("Jason")}}>修改用户名</button>
    </div>
  )
}

export default ()=>{
  const [userName,setUserName]=useState("ayin");
  return (
    <DemoContext.Provider value={{userName,setUserName}}>
      <div>React高阶知识--useContext
        <p>{userName}</p>
        <hr />
        <Child/>
      </div>
    </DemoContext.Provider>
  )
}