import { legacy_createStore,combineReducers } from "redux";
// import reducer from "./reducer.ts"

import handleNum from "./num/reducer"
import handleArry from "./arry/reducer"

const reducers=combineReducers({
  handleNum,
  handleArry
})

const store =legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//调试工具可以看到状态

// const store =legacy_createStore(reducer);
export default store;