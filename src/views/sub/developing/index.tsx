import {useState,useEffect, FormEvent} from 'react'
import store from "@/store/immerStore"

export default ()=>{
  const {num,array,object,addSnake,increase,remove,addArry,summary}=store();

  
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
      <hr />
      <div>
        <p>来自于zustand immer的数据</p>
        <p>{num}</p>
        <button onClick={increase}>按钮1</button>
        <button onClick={remove}>按钮2</button>
        <p>数组</p>
        <p>{array}</p>
        <button onClick={addArry}>按钮</button>
        <p>对象</p>
        <p>{JSON.stringify(object)}</p>
        <button onClick={addSnake}>按钮</button>
        <button onClick={summary}>{summary()}</button>
      </div>
      <hr />
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