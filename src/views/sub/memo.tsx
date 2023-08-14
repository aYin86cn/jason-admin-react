const DemoTest=({isShow}:{isShow?:boolean})=>{
  if(!isShow){
    return null
  }else{
    return <div>DemoTest</div>
  }
}

const DomLi=({item}:{item:{name:string},index:number})=><li >{item.name}</li>

export default ()=>{
  const songs=[
    {id:1,name:"song1"},
    {id:2,name:"song2"},
    {id:3,name:"song3"},
    {id:4,name:"song4"},
  ]
  const msg='<h1 style="color:red">Test</h1>'
  const attrs={
    id:"container",
    className:"wraper",
  }
  return (
    <div>memo
      {msg}
      {/* 插入原始HTML */}
      <div dangerouslySetInnerHTML={{__html:msg}}></div>
      <ul style={{color:"red"}}>
        {songs.map((item,i)=>(
          <li key={i}>{i}-{item.name}</li>
        ))}
        <hr />
        {songs.map((item,i)=>{
          if(i%2===0){
            return <li style={{color:"blue"}} key={i}>{i}-{item.name}</li>
          }else{
            return <li key={i}>{i}-{item.name}</li>
          }
        })}
        <hr />
        {songs.map((item,i)=><DomLi item={item} index={i} key={i}/>)}
      </ul>
      <DemoTest isShow/>
      <DemoTest isShow={true}/>
      <DemoTest/>
      <DemoTest isShow={false}/>
      <button disabled>不可点击</button>
      <button>可点击</button>
      <div {...attrs}>解构赋值...attrs  查看这个div的class和id</div>
    </div>
    
  )
}