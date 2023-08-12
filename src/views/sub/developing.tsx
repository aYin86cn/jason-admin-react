export default ()=>{
  const message="ABCDEFG"
  const say=(str:string,e?:Event)=>{
    alert(str);
    console.log("e",e);
    
  }
  const obj={
    onClick:()=>say("testObj"),
    className:"testObj"
  }
  const formSubmit=(e: FormEvent)=>{
    e.preventDefault()
    console.log("submit");
    
  }
  return (
    <div>developing
      <div>{1+1}</div>
      <div>{'a'+'b'}</div>
      <div>{true?'true':'false'}</div>
      <div>{message.split('').reverse().join("")}</div>
      <div onClick={()=>say('Test')}>div点击事件1</div>
      <div onClick={()=>say('Test')}>div点击事件2</div>
      <div {...obj}>动态绑定</div>
      <form onSubmit={formSubmit}>
        <button type='submit'>提交</button>
      </form>
    </div>
  )
}