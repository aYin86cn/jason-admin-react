// const defaultState={
//   num:99999
// }
// let reducer=(state=defaultState,action:{type:string,val:number})=>{
//   let newState=JSON.parse(JSON.stringify(state))

//   switch(action.type){
//     case "add":
//       newState.num+=action.val
//       break;
//   }

//   return newState
// }
// export default reducer

//数据的初步抽取
//模块化写法,看着似乎更乱一些，如果redux参数比较少，不建议这种写法。

import handleArr from "./index"
// const defaultState={
//   ...handleArr.state//解构写法
// }
let reducer=(state={...handleArr.state},action:{type:string,val:number})=>{
  let newState=JSON.parse(JSON.stringify(state))

  switch(action.type){
    case "arrPush":
      handleArr.actions.arrPush(newState,action)
      break;
  }

  return newState
}
export default reducer