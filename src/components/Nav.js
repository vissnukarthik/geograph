import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
  return (
    <div>
        <nav className="">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/country">country</Link></li>
        </ul> 
        </nav>
    </div>
    
  )
}

export default Nav