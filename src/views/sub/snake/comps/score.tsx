import {useState,useRef,useEffect} from "react"

const Score: React.FC<SnakeProps> = ({  commonData, setCommonData, parentFunc }) => {
  const addScore = () => {
    const updatedScore = commonData.point.score + 1;
    setCommonData((prev:SnakeState)=>({
      ...prev,
      point: {
        ...prev.point,
        score: updatedScore,
      }
    }));
   
    console.log("state.point---",commonData.point);
  };
  useEffect(() => {
    if (commonData.point.score!=0&&commonData.point.score % 10 === 0) {
      addLevel();
    }
  }, [commonData.point.score]);
  const addLevel = () => {
    const updatedLevel = commonData.point.level + 1;
    setCommonData((prev:SnakeState)=>({
      ...prev,
      point: {
        ...prev.point,
        level: updatedLevel,
      }
    }));
    
  };
  
  return (
    <div className="score">
      <div className="msg msg-left">SCORE:{commonData.point.score} <button onClick={addScore}>+</button></div>
      <div className="msg msg-center">Space to Restart</div>
      <div className="msg msg-right"><button onClick={addLevel}>+</button> LEVEL:{commonData.point.level}</div>
    </div>
  )
}

export default Score;