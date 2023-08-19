import {useState,useEffect,useMemo,memo} from "react"
export default ()=>{
  const [number,setNumber]=useState(100);
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    setTimeout(()=>{
      setTime(new Date())
    },1000)
  },[time])

  // const dirtyWork=()=>{//如果用这里的写法，时间每次更新都会触发此方法
  //   console.log("模拟复杂计算")
  //   return number;
  // }
  
  const dirtyWork=useMemo(()=>{//如果使用useMemo，时间更新则不会再次触发此方法，只有number触发的时候才会执行此方法。
    console.log("模拟复杂计算")
    return number;
  },[number])

  return (
    <div>React高阶知识--useMemo
      <hr />
      <p>实际使用情况，并不推荐两个单独的组件和逻辑放到一个组件内部，建议状态下沉，但有些时候避免不了状态的提升，这个时候，可以考虑其他的状态管理方式，比如useContext、useReducer，具体用哪个根据实际情况使用。</p>
      <p>{time.getSeconds()}</p>
      <input type="text" value={number} onChange={(e)=>{setNumber(parseInt(e.target.value))}} />
      {dirtyWork}
      <hr />
      <div>纯组件 - memo
        {/* <PureComp></PureComp> */}
        <p>如果直接调用 PureComp 依然会收到时间更新的影响执行重复计算 </p>
        <p>如果用memo包裹一层后，起到的作用和上面的useMemo作用一致</p>
        <p>封装完的组件导出的时候可以直接导出纯组件，如下</p>
        <p>export default memo(PureComp)</p>
        <PureMemo></PureMemo>
      </div>
      <hr />
      <p>useMemo缓存的是结果，而memo缓存的是整个组件</p>
      <p>如果纯组件引入了父组件的一个数组，虽然这个数组不进行变化但因为每次更新视图的时候，数组的地址会发生变化，所以纯组件也会导致再次更新，这个时候需要结合useMemo+memo来改造组件。</p>
    </div>
  )
}

//纯组件

// 封装完的组件导出的时候可以直接导出纯组件，如下
// export default memo(PureComp)
const PureComp=()=>{
  const [number,setNumber]=useState(100);
  const dirtyWork=()=>{
    console.log("模拟复杂计算")
    return number;
  }
  return (
    <div>纯组件 输入值相同的情况下，输出值也相同 pureComp
      <input type="text" value={number} onChange={(e)=>{setNumber(parseInt(e.target.value))}} />
      <p>{dirtyWork()}</p>
    </div>
  )
}
const PureMemo=memo(PureComp)