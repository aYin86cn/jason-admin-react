import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.less'
import "@/utils/utils.js"
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// import {BrowserRouter} from "react-router-dom"

// 状态管理
import {Provider} from "react-redux"
import store from "./store/index.ts"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>,
)
