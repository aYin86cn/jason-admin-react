import {useState,useEffect} from "react"

const SnakeComp: React.FC<SnakeProps> = ({ commonData, setCommonData, parentFunc }) => {
  const handleKeyDown=(e:KeyboardEvent)=>{
    // console.log("e",e.key,e.code,e);
    let direction=commonData.snake.direction;
    switch (e.key) {
      case "ArrowUp":
        direction="up" 
        break;
      case "ArrowRight":
        direction="right" 
        break;
      case "ArrowDown":
        direction="down" 
        break;
      case "ArrowLeft":
        direction="left" 
        break;
    }
    setCommonData((prev:SnakeState)=>({
      ...prev,  
      snake:{
        ...prev.snake,
        direction,
      }
    }));
    snakeMove();
    // console.log("handleKeyDown-currSnake:",direction);
  }
  
  const snakeMoveTimer=(prev:SnakeState)=>{
    window.$ti.s("snakeAutoMove",()=>{
      snakeMove();
    },100-(prev.point.level-1)*5)
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
      if (prev.snake.direction === "up") {
        mTop= - 10
      } else if (prev.snake.direction === "right") {
        mLeft= 10
      } else if (prev.snake.direction === "down") {
        mTop= 10
      } else if (prev.snake.direction === "left") {
        mLeft= - 10
      }

      let pleft=prev.snake.left,
          ptop=prev.snake.top,
          left=pleft+mLeft,
          top=ptop+mTop,
          live=true,
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
      const bodyResult=bodyMove(body,{left:pleft,top:ptop})

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
          body
        }
      })
    });
    
  };
  
  const bodyMove=(bodys:SnakeBody[],head:SnakeBody)=>{
    // console.log("bodyMove",bodys,head);
    for(let i=bodys.length-1;i>=0;i--){
      if(i>0){
        bodys[i].left=bodys[i-1].left
        bodys[i].top=bodys[i-1].top
      }else{
        bodys[0].left=head.left
        bodys[0].top=head.top
      }
    }
    return bodys
  }
  
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