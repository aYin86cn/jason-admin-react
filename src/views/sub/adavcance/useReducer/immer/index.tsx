import {useReducer} from 'react'
import {useImmerReducer} from "use-immer"


interface IState{
  name:string;
  score:number;
}
interface IAction{
  type:string,
  payload?:number
}

// const reducer=(state:IState,action:IAction):IState=>{
//   switch(action.type){
//     case "add":
//       return {...state,score:state.score+1}
//     case "decrease":
//       return {...state,score:state.score-1}
//     default:
//       return state
//   }
// }
const imReducer=(state:IState,action:IAction)=>{
  switch(action.type){
    case "add":
      state.score=state.score+1
      break;
    case "decrease":
      state.score=state.score-1
      break;
    default:
      break;
  }
  sessionStorage.setItem("immState",JSON.stringify(state));
}



const initAction=(state:IState)=>{
  const res=sessionStorage.getItem("immState")
  console.log("res",res);
  
  if(res){
    return JSON.parse(res)
  }else{
    return state
  }
}



export default ()=>{
  const initState={
    name:"jason",
    score:0
  }
  // const [state,dispatch]=useReducer(reducer,initState)
  //第三个参数用来处理默认值的
  const [state,dispatch]=useImmerReducer(imReducer,initState,initAction)

  const wrapDispatch=async (action:IAction)=>{
    const audio =new Audio();
    //包裹一层来来调用异步
    // await audio.play()
    dispatch(action)
  }

  return (
    <div>React高阶知识--useImmerReducer + sessionStorage的用例
      <hr />
      计数器{state.score}
      <hr />
      姓名{state.name}
      <hr />
      <button onClick={()=>{dispatch({type:'add'})}}>+</button>
      <button onClick={()=>{dispatch({type:'decrease'})}}>-</button>
      <button onClick={()=>{wrapDispatch({type:'decrease'})}}>-</button>

    </div>
  )
}