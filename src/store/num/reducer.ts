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

// import handleNum from "./index"
// const defaultState={
//   ...handleNum.state//解构写法
// }
// let reducer=(state=defaultState,action:{type:string,val:number})=>{
//   let newState=JSON.parse(JSON.stringify(state))

//   switch(action.type){
//     case "add":
//       handleNum.actions.add(newState,action)
//       break;
//   }

//   return newState
// }
// export default reducer


import handleNum from "./index"

let reducer=(state={...handleNum.state},action:{type:string,val:number})=>{
  let newState=JSON.parse(JSON.stringify(state))

  switch(action.type){
    case "add1":
      handleNum.actions.add1(newState,action)
      break;
    case "add2":
      handleNum.actions.add2(newState,action)
      break;
  }
  // console.log("handleNum.actions",handleNum.actions,action.type,);
  //不知道如何处理这个告警
  // if(handleNum.actions[action.type]){
  //   handleNum.actions[action.type](newState,action)
  // }
  // const actNam=handleNum.actionNames;
  // for(let i=0;i<actNam.length;i++){
  //   if(actNam[i]==action.type){
  //     handleNum.actions[actNam[i]](newState,action)
  //   }
  // }

  return newState
}
export default reducer