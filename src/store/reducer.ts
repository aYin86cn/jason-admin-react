const defaultState={
  num:99999
}
let reducer=(state=defaultState,action:{type:string,val:number})=>{
  let newState=JSON.parse(JSON.stringify(state))

  switch(action.type){
    case "add":
      newState.num+=action.val
      break;
  }

  return newState
}
export default reducer