import {useState,useRef,useEffect} from "react"
import Food from "./comps/food"
import Score from "./comps/score"
import Snake from "./comps/snake"
import "./index.less"



const snakeIndex: React.FC = () => {

  const [commonData, setCommonData] = useState<SnakeState>({
    food:{
      left:0,
      top:0,
    },
    point:{
      score:0,
      level:0
    },
    snake:{
      left:0,
      top:0,
      direction:"right",
      live:true,
      body:[
        {left:0,top:0}
      ]
    }
  })

  const random=()=>{
    return Math.round(Math.random()*35)*10
  }
  const resetFood=()=>{
    setCommonData((prev)=>({
      ...prev,
      food: {
        left:random(),
        top:random()
      }
    }));
  }
  useEffect(()=>{
    resetFood();
  },[])

  const parentFunc=(type:string)=>{
    switch (type) {
      case "resetFood":
        resetFood()
        break;
    
      default:
        break;
    }
  }
  // const updateState = (updatedState: Partial<SnakeState>) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     ...updatedState,
  //   }));
  // };
  // const scorePanel=new ScorePanel(20,12)
  return (
    <div>snake
      <div className="snake-wrap">
        <div className="stage">
          <Snake commonData={commonData} setCommonData={setCommonData} parentFunc={parentFunc} />
          <Food commonData={commonData} setCommonData={setCommonData} parentFunc={parentFunc} />
        </div>
        <Score commonData={commonData} setCommonData={setCommonData} parentFunc={parentFunc}/>
      </div>
    </div>
  )
}
export default snakeIndex