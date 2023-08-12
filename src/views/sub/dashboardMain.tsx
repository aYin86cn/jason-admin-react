import {useSelector,useDispatch} from "react-redux"
// import store from "@/store/store"
// type RootState=ReturnType<typeof store.getState>

export default ()=>{
  const {num,arr}=useSelector((state:RootState)=>({
    // num:state.num
    num:state.handleNum.num,
    arr:state.handleArry.arr
  }))
  

  //change redux
  const dispatch=useDispatch()
  const changeNum1=()=>{
    dispatch({type:"add1"})
  }
  const changeNum2=()=>{
    dispatch({type:"add2",val:10})
  }
  const changeArry=()=>{
    dispatch({type:"arrPush",val:99})
  }
  return (
    <div>dashboardMain
      <p>来自于rudex的数据</p>
      <p>{num}</p>
      <button onClick={changeNum1}>按钮1</button>
      <button onClick={changeNum2}>按钮2</button>
      <p>数组</p>
      <p>{arr}</p>
      <button onClick={changeArry}>按钮</button>
    </div>
  )
}