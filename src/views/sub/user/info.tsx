import {ReactNode} from "react"
interface Props{
  msg:string
  user?:User
  show?:boolean
}
interface User{
  name:string
  age:number
}
const DemoTest=(props:Props)=>{
  if(!props.show){
    return null
  }
  return <div>{JSON.stringify(props)}</div>
}

interface PropsCallback{
  onCallback?:(msg?:string)=>void
}

const SubComponent=({onCallback}:PropsCallback)=>{
  return (
    <>
      <button onClick={()=>{
        onCallback&&onCallback("子组件传递的信息！！")
      }}>子组件传参给父组件</button>
    </>
  )
}

interface slotProps{
  children?:ReactNode
}

const SlotComponent=({children}:slotProps)=>{
  return <>{children}</>
}

export default ()=>{
  const mainCallback=(msg?:string)=>{
    console.log("this is main component function",msg)
  }
  return (
    <div>info

      <DemoTest msg="12312msg111" user={{name:"Jason",age:22}} show/>
      <hr />
      <SubComponent onCallback={mainCallback}/>
      {SubComponent({onCallback:mainCallback})}
      <hr />
      <p>Slot</p>
      <SlotComponent>
        111
        <h1>this is slot</h1>
        <DemoTest msg="123" show/>
      </SlotComponent>
    </div>
  )
}