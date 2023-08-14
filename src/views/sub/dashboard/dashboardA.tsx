import {useState,useMemo, CSSProperties} from "react"

const DemoTest=({cln}:{cln?:string})=>{
  return <div className={cln??cln}>Demotest-{cln}</div>
}

export default ()=>{
  const [user,setUser]=useState({firstName:"jason",lastName:"yin"})
  const fullname=useMemo(()=>user.firstName+user.lastName,[user.firstName,user.lastName])

  const changeName=()=>{
    setUser({firstName:"zj"+Math.random(),lastName:"yin"})
  }

  const classStr="demoClass"
  const classObj={
    red:true,
    blue:true,
    yellow:false
  }

  const [classState,setClassState]=useState(classObj)

  const changeClass = () => {
    setClassState((prevState) => ({
      ...prevState,
      green: true,
    }));
  };

  const [styles,setStyles]=useState<CSSProperties>({
    color:"red",
    backgroundColor:"blue"
  })

  const changeStyle=()=>{
    setStyles({...styles,background:"orange"});
  }

  const [isShow,setShow]=useState<Boolean>(true)
  const changeShow=()=>{
    setShow(!isShow);
  }

  return (
    <div>dashboardA
      
      <div>{JSON.stringify(user)}</div>
      <div>{fullname}
        <button onClick={changeName}>ChangeName</button>
      </div>
      <p>class绑定</p>
      <div className={classStr}>{classStr}</div>
      <div className={Object.keys(classObj).join(' ')}>{Object.keys(classObj).join(' ')}</div>
      <div className={Object.keys(classState).join(' ')}>
        {Object.keys(classState).join(' ')}
        <button onClick={changeClass}>changeClass</button>  
      </div>
      <DemoTest cln="testName"/>
      <p>内联样式</p>
      <div style={{color:"red",backgroundColor:"blue"}}>inner style</div>
      <div style={styles} onClick={changeStyle}>inner style</div>

      <p>切换容器</p>
      <div>
        {isShow?<div>Show</div>:<div>Hide</div>}
        <div style={{display:isShow?'block':'none'}}>dom display</div>
        <button onClick={changeShow}>切换show状态</button>
      </div>
    </div>
  )
}