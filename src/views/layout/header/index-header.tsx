// import { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <div className="header-inner">
      <Link to="/layout/home">login-user</Link>
      <Link to="/layout/user">login-user</Link>
    </div>
  )
}

export default Header
