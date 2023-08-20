//【重点】 类型声明里面不要直接使用引入import..from.. 而是使用import()语法，否则定义的类型就需要引入。
// import store from "@/store/store"
// TS提供了ReturnType，用来获取函数类型的返回值
type RootState=ReturnType<typeof import("@/store/comStore").getState>

interface Window{
  __REDUX_DEVTOOLS_EXTENSION__:function;
  $ti:function;
}

interface StoreNum{
  state:Object;
  action:{};
  actionNames:[];
}


interface SnakeState {
  food: {
    left: number;
    top: number;
  };
  point: {
    score: number;
    level: number;
  };
  snake: {
    left: number;
    top: number;
    direction: string;
    live: boolean;
    body: SnakeBody[];
  };
}

interface SnakeBody {
  left: number;
  top: number;
}

interface SnakeProps {
  commonData: SnakeState;
  setCommonData?: Dispatch<SetStateAction<SnakeState>>;
  parentFunc?:function;
}