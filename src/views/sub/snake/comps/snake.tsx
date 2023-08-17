import {useState,useEffect} from "react"

const SnakeComp: React.FC<SnakeProps> = ({ commonData, setCommonData, parentFunc }) => {
  const handleKeyDown=(e:KeyboardEvent)=>{
    // console.log("e",e.key,e.code,e);
    setCommonData((prev:SnakeState)=>{
      let direction=prev.snake.direction;
      // console.log("Curdirection",direction,e.key);
      switch (e.key) {
        case "ArrowUp":
          if (direction != "down"){direction="up"}
          break;
        case "ArrowRight":
          if (direction != "left"){direction="right"} 
          break;
        case "ArrowDown":
          if (direction != "up"){direction="down"} 
          break;
        case "ArrowLeft":
          if (direction != "right"){direction="left"} 
          break;
        case " ":
          direction="space"
          break;
      }
      // console.log("direction",direction);
      if(direction!="space"){
        snakeMove();
        return {
          ...prev,  
          snake:{
            ...prev.snake,
            direction,
          }
        }
      }else{
        window.$ti.c("snakeAutoMove");
        return {
          ...prev,  
          point:{
            score:0,
            level:0
          },
          snake:{
            left:10,
            top:0,
            direction:"right",
            live:true,
            body:[
              {left:0,top:0}
            ]
          }
        }
      }
    });
    // console.log("direction",direction);
    
    
    
    // console.log("handleKeyDown-currSnake:",direction);
  }
  
  const snakeMoveTimer=(prev:SnakeState)=>{
    window.$ti.s("snakeAutoMove",()=>{
      snakeMove();
    },200-(prev.point.level-1)*5)
  }
  useEffect(()=>{
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.$ti.c("snakeAutoMove");
    };
  },[])
  
  const snakeMove = () => {
    window.$ti.c("snakeAutoMove");
    
    
    setCommonData((prev:SnakeState)=>{
      let mLeft=0,
        mTop=0;
      if(prev.snake.live){
        if (prev.snake.direction === "up") {
          mTop= - 10
        } else if (prev.snake.direction === "right") {
          mLeft= 10
        } else if (prev.snake.direction === "down") {
          mTop= 10
        } else if (prev.snake.direction === "left") {
          mLeft= - 10
        }
      }  

      let pleft=prev.snake.left,
          ptop=prev.snake.top,
          left=pleft+mLeft,
          top=ptop+mTop,
          live=prev.snake.live,
          foodx=prev.food.left,
          foody=prev.food.top,
          score=prev.point.score,
          level=prev.point.level,
          body=prev.snake.body
          
          
      if(foodx==left&&foody==top){
        // console.log("eat!");
        parentFunc("resetFood")
        body.push({left:0,top:0});
        score++
      }
      const bodyMove=(bodys:SnakeBody[],head:SnakeBody)=>{
        for(let i=bodys.length-1;i>=0;i--){
          if(head.left==bodys[i].left&&head.top==bodys[i].top){
            console.log("crash");
            live=false
          }else{
            if(i>0){
              bodys[i].left=bodys[i-1].left
              bodys[i].top=bodys[i-1].top
            }else{
              bodys[0].left=head.left
              bodys[0].top=head.top
            }
          }
        }
        return bodys
      }

      const bodyResult=prev.snake.live?bodyMove(body,{left:pleft,top:ptop}):body


      if(left>350){left=350;live=false}else if(left<0){left=0;live=false}
      if(top>350){top=350;live=false}else if(top<0){top=0;live=false}
      
      // console.log("snake live");
      if(prev.snake.live){
        snakeMoveTimer(prev)
      }else{
        window.$ti.c("snakeAutoMove");
        console.log("snake die");
      }
      
      return({
        ...prev,
        point:{
          score,
          level
        },
        snake:{
          ...prev.snake,
          left,
          top,
          live,
          body:bodyResult
        }
      })
    });
    
  };
  
  
  
  // useEffect(() => {
  //   console.log("state.snake.left,state.snake.top",commonData.snake.left,commonData.snake.top);
    
  // },[commonData.snake.left,commonData.snake.top]);

  // useEffect(() => {
  //   console.log("snake die",state.live);
  //   if(!state.live){
  //     window.$ti.c("snakeAutoMove");
  //   }
  // }, [state.live]);

  return (
    <div className="snake">
      <div className="snake-head" style={{left:commonData.snake.left,top:commonData.snake.top,opacity:commonData.snake.live?1:.3}}></div>
      {/* {JSON.stringify(commonData.snake.body)} */}
      {commonData.snake.body.map((item,i)=>(
        <div className="snake-body" style={{left:item.left,top:item.top}} key={i}>{}</div>
      ))}
    </div>
  )
}

export default SnakeComp;