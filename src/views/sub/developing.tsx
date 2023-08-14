import {useState,useEffect, FormEvent} from 'react'

export default ()=>{
  const message="ABCDEFG"
  const say=(str:string,e?:Event)=>{
    alert(str);
    console.log("e",e);
    
  }
  const obj={
    onClick:()=>say("testObj"),
    className:"testObj"
  }
  const formSubmit=(e:FormEvent)=>{
    e.preventDefault()
    console.log("submit");
  }
  const [state,setCount]=useState({count:0})
  const add=()=>{
    setCount({count:state.count+1})
    console.log("state1",state);
  }
  useEffect(()=>{
    console.log("state2",state);
  },[state.count])
  return (
    <div>developing
      <div>{1+1}</div>
      <div>{'a'+'b'}</div>
      <div>{true?'true':'false'}</div>
      <div>{message.split('').reverse().join("")}</div>
      <div onClick={()=>say('Test')}>div点击事件1</div>
      <div onClick={()=>say('Test')}>div点击事件2</div>
      <div {...obj}>动态绑定</div>
      
      <form onSubmit={formSubmit}>
        <button type='submit'>提交</button>
      </form>
      <p>这里案例可以通过点击看出useState是异步的，但可以通过useEffect来监测值的变化</p>
      <div className="state-count">
        {state.count}
        <button onClick={add}>stateChange</button>
      </div>
    </div>
  )
}