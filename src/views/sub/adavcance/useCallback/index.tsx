import {useState,useEffect,useMemo,useCallback,memo} from "react"

export default ()=>{
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    setTimeout(()=>{
      setTime(new Date())
    },1000)
  },[time])

  const badFunc=()=>{ console.log("this is Bad!"); }
  const goodFunc=useCallback(()=>console.log("this is Bad!"),[])
  // const goodFunc=useMemo(()=>{badFunc()},[])
  return (
    <div>React高阶知识--useCallback
      <hr />
      <p>简单来说，useCallback和useMemo相近，只是useMemo针对arrays/bojects，而useCallback针对functions</p>
      <p>useCallback是useMemo的简化版，甚至有时候他们可以通用</p>
      <p>{time.getSeconds()}</p>
      <Child func={goodFunc}></Child>
    </div>
  )
}

interface Ichild{
  func:()=>void;
}

const Child=memo(({func}:Ichild)=>{
  const [number,setNumber]=useState(100);
  const dirtyWork=()=>{
    console.log("模拟复杂计算")
    return number;
  }
  return (
    <div>this is Child
      <input type="text" value={number} onChange={(e)=>{setNumber(parseInt(e.target.value))}} />
      <p>{dirtyWork()}</p>
      <button onClick={func}>call func</button>
    </div>
  )
})