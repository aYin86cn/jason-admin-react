import {useState,useEffect,useLayoutEffect} from "react"
export default ()=>{
  const [count,setCount]=useState(0)
  const changeCount=()=>{
    setCount(0)
  }
  //闪动
  // useEffect(()=>{
  useLayoutEffect(()=>{
    if(count===0){
      setCount(20+Math.random()*100)
    }
  },[count])
  return (
    <div>React高阶知识--useLayoutEffect
      <p>useEffect是在渲染时异步执行，并且等到浏览器将变化渲染到屏幕后才会执行</p>
      <p>在这个案例中，被渲染了两次</p>
      <p>useLayoutEffect时在dom结构更新后、渲染前执行，在渲染时时同步执行，具有防抖的效果。</p>
      {count}
      <hr />
      <button onClick={changeCount}>setCount</button>
    </div>
  )
}