import {useState,useRef,useEffect} from "react"

const FoodComp: React.FC<SnakeProps> = ({ commonData}) => {//, setCommonData, parentFunc
  const food = useRef<HTMLDivElement>(null);
  // const [state,setState]=useState({
  //   left:0,
  //   top:0,
  // })
  
  
  return (
    <div 
      className="food" 
      style={{left:commonData.food.left,top:commonData.food.top}} 
      ref={food}
    ></div>
  )
}

export default FoodComp;