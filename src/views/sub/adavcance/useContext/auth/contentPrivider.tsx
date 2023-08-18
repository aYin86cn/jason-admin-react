import {createContext,useState,ReactNode} from "react"

interface UserInfo {
  name: string;
  auth: boolean;
}

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

interface slotProps{
  children?:ReactNode
}

export const ContextProvider=({children}:slotProps)=>{
  const [userInfo,setUserInfo]=useState({
    name:"xxxx",
    auth:false,
  });

  const login=()=>{
    setTimeout(() => {
      setUserInfo({
        name:"aYin",
        auth:true,
      })
    },2000);
  }
  const logout=()=>{
    setTimeout(() => {
      setUserInfo({
        name:"",
        auth:false,
      })
    },2000);
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, login, logout, }}>
      {children}
    </UserContext.Provider>
  )
}