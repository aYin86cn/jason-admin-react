export default {
  state:{
    arr:[10,20,30]
  },
  actions:{
    arrPush(newState:{arr:number[]},action:{type:string,val:number}){
      newState.arr.push(action.val);
    }
  }
}