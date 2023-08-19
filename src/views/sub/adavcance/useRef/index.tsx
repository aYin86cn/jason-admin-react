import {useRef,forwardRef,createRef,Ref} from "react"
export default ()=>{
  const inputRef=useRef<HTMLInputElement>(null);
  const childRef=useRef<HTMLInputElement>(null);
  //createRef也可以，但是函数组件推荐用useRef这种hook写法
  // const inputRef=createRef<HTMLInputElement>();
  const focusInput=()=>{
    inputRef?.current?.focus()
  }
  const focusChild=()=>{
    childRef?.current?.focus()
  }

  return (
    <div>React高阶知识--useRef
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <hr />
      {/* <Child r/ef={childRef}></Child> 函数组件无法给予ref*/}
      <button onClick={focusChild}>FocusChild in parent</button>
      <Child ref={childRef}></Child>
    </div>
  )
}

const Child=forwardRef((params,childRef:Ref<HTMLInputElement>)=>{
  const focusChild=()=>{
    //这里告警current找不到，不知道如何解决
    //@ts-ignore
    childRef?.current?.focus()
  }
  return (
    <div>Child
      <input type="text" ref={childRef} />
      <button onClick={focusChild}>FocusChild in child</button>
    </div>
    
  )
})