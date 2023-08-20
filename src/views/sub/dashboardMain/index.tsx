// import {useSelector,useDispatch} from "react-redux"
import store from "@/store/comStore"
// type RootState=ReturnType<typeof store.getState>

export default ()=>{

  //用这种方式引入，可以提高性能，降低不必要的渲染
  // const storeNum=store(state=>state.num)
  // const increase=store(state=>state.increase)
  // const remove=store(state=>state.remove)
  
  //如果用到了store中所有的内容，则用这种方式引入，否则用上面的方式引入。
  //用这种全部引入的方式，会导致不必要的渲染
  const {num,array,increase,remove,addArry}=store();


  return (
    <div>dashboardMain
      <p>来自于zustand的数据</p>
      <p>{num}</p>
      <button onClick={increase}>按钮1</button>
      <button onClick={remove}>按钮2</button>
      <p>数组</p>
      <p>{array}</p>
      <button onClick={addArry}>按钮</button>
    </div>
  )
}