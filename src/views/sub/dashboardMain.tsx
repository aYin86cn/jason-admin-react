import {useSelector,useDispatch} from "react-redux"
// import store from "@/store/store"
// type RootState=ReturnType<typeof store.getState>

export default ()=>{
  const {num}=useSelector((state:RootState)=>({
    num:state.num
  }))

  //change redux
  const dispatch=useDispatch()
  const changeNum=()=>{
    dispatch({type:"add",val:3})
  }
  return (
    <div>dashboardMain
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
    </div>
  )
}