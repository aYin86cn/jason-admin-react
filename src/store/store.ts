import { legacy_createStore } from "redux";
import reducer from "./reducer.ts"

const store =legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//调试工具可以看到状态

// const store =legacy_createStore(reducer);
export default store;