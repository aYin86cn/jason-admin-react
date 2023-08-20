import {useImmer} from "use-immer"
export default ()=>{
  const student={
    name:"jason",
    score:{
      math:60,
      english:80
    }
  }
  const [state,setState]=useImmer(student);

  return (
    <div>React高阶知识--useImmer
      <p>{state.name}-{state.score.math}-{state.score.english}</p>
      <button onClick={()=>{
        setState((state)=>{
          state.score.math++
        })
      }}>Change Math</button>
      <button onClick={()=>{
        setState((state)=>{
          state.score.english=100
        })
      }}>Change Eng</button>
    </div>
  )
}