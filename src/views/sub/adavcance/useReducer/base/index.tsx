// import {useReducer} from 'react'
import {useReducer} from "./fackReducer"

const reducer=(state:number,action: { type: string })=>{
  switch(action.type){
    case "add":
      return state+1
    case "decrease":
      return state-1;
    default:
      return state
  }
}

export default ()=>{
  const [state,dispatch]=useReducer(reducer,0)
  return (
    <div>React高阶知识--useReducer
      计数器{state}
      <button onClick={()=>{dispatch({type:'add'})}}>+</button>
      <button onClick={()=>{dispatch({type:'decrease'})}}>-</button>

    </div>
  )
}