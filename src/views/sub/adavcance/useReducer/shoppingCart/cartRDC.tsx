export const fakeData={
  products:[
    {id:1,name:"Glasses",num:1,price:200},
    {id:2,name:"Battary",num:1,price:54},
  ],
  total:296,
}

interface StateProd{
  products:Cart[]
}
interface Cart{
  id:number;
  name:string;
  num:number;
  price:number;
}

export default (state:StateProd,action:{type:string,payload?:number})=>{
  let newState=JSON.parse(JSON.stringify(state));
  console.log("state",state);
  
  let id=action.payload;
  let index=state.products.findIndex((item)=>item.id===id)
  switch(action.type){
    case "add":
      newState.products[index].num++
      break;
    case "decrease":
      if(state.products[index].num<=1){
        newState.products.splice(index,1)
      }else{
        newState.products[index].num--
      }
      break;
      // newState.products[index].num--
    case "clear":
      return {products:[],total:0}
    default:
      return state;
  }
  newState.total=newState.products.reduce((total:number,product:Cart)=>{
    return total+product.num*product.price
  },0)
  return newState
}