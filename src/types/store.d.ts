//【重点】 类型声明里面不要直接使用引入import..from.. 而是使用import()语法，否则定义的类型就需要引入。
// import store from "@/store/store"
// TS提供了ReturnType，用来获取函数类型的返回值
type RootState=ReturnType<typeof import("@/store").getState>

interface Window{
  __REDUX_DEVTOOLS_EXTENSION__:function;
}

interface StoreNum{
  state:Object;
  action:{};
  actionNames:[];
}