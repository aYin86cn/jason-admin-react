// import { useState } from 'react'
import {HashRouter} from 'react-router-dom' //,Routes,Route,Link,Navigate
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Login from "./views/login/index-login"
// import Layout from "./views/layout/index-layout"
// import Home from "./views/home/index-home"
// import User from "./views/user/index-user"

import GetRouter from "./router";

import './App.less'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <GetRouter/>
      {/* <Link to="/login/user">login-user</Link> */}
      {/* <Routes>
        <Route path="/" element={<Navigate to="/layout"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/layout" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="user" element={<User/>}/>

        </Route>
      </Routes> */}
    </HashRouter>
  )
}

export default App
