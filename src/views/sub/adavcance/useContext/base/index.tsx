import {useState,createContext} from "react"
import Child from "./child"

interface CTX {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const initCtxVal: CTX = {
  userName: '',
  setUserName: () => {},
};

export const DemoContext = createContext<CTX>(initCtxVal);

export default ()=>{
  const [userName,setUserName]=useState("ayin");
  return (
    <DemoContext.Provider value={{userName,setUserName}}>
      <div>React高阶知识--useContext
        <p>{userName}</p>
        <hr />
        <Child/>
        <p>使用useContext的时候，为了防止不必要的性能开支，可以结合useMemo来做优化</p>
      </div>
    </DemoContext.Provider>
  )
}