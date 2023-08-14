import {KeyboardEvent,useState,useEffect} from "react"

const DestoryComp=()=>{
  const [user,setUser]=useState({
    name:"Jason",
    age:18
  })
  useEffect(()=>{
    
    console.log(user,"useEffect-user");
    const temp=setInterval(()=>{
      setUser({...user,name:"ayin"+Math.random()})
      console.log('setInterval',"ayin"+Math.random());
    },2000)
    return ()=>{//销毁的时候执行一次
      console.log(user,'destory');
      clearInterval(temp)
    }
  },[])
  return <div>!!!!!!{user.name}</div>
}

export default ()=>{
  const keyup=(e:KeyboardEvent)=>{
    console.log("e",e.key,e.code,e);
  }
  const [user,setUser]=useState({
    name:"JasonOri",
    age:"18",
  })
  useEffect(()=>{
    console.log(user,"useEffect-user");
    return ()=>{}//销毁的时候执行一次
  },[user])
  useEffect(()=>{
    console.log(user,"useEffect-name");
  },[user.name])
  useEffect(()=>{
    console.log(user,"useEffect-age");
  },[user.age])

  const changeName=()=>{
    setUser({...user,name:"aYin"})
  }
  const changeAge=()=>{
    setUser({...user,age:"22"})
  }
  const [show,setShow]=useState(true)
  const changeShow=()=>{
    setShow(false);
  }
  return (
    <div>dashboardB
      <p>按键</p>
      <input onKeyUp={keyup}></input>

      <div className="">{JSON.stringify(user)}
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeAge}>Change Age</button>
      </div>
      <div>
        模拟destory
        {show?<DestoryComp/>:null}
        <button onClick={changeShow}>销毁组件</button>
      </div>
    </div>
  )
}