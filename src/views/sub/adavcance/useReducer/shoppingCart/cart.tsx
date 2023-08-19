import {useReducer} from "react"
import cartRDC,{fakeData} from "./cartRDC"

interface Cart{
  id:number;
  name:string;
  num:number;
  price:number;
}

// const fakeData={
//   products:[
//     {id:1,name:"Glasses",num:1,price:200},
//     {id:2,name:"Battary",num:1,price:54},
//   ],
//   total:296,
// }


export default ()=>{
  const [state,dispatch]=useReducer(cartRDC,fakeData);

  return (
    <div>
      <h2>购物车</h2>
      <ul>
        {state.products.map((item:Cart,i:number)=>(
          <li key={i}>{item.name}-{item.num}-${item.price}-
            <button onClick={()=>{dispatch({type:'add',payload:item.id})}}>+</button>
            <button onClick={()=>{dispatch({type:'decrease',payload:item.id})}}>-</button>
          </li>
        ))}
      </ul>
      <hr />
      总计{state.total}元
      <button onClick={()=>{dispatch({type:'clear'})}}>Clear</button>
    </div>
  )
}