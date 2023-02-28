import React from 'react'
import { Link } from "react-router-dom"





function Nav() {
  return (
    <div className='Nav'>
      <img src = "https://user-images.githubusercontent.com/71687100/218331319-7963cdd3-9b0a-4413-a167-f31be97956de.jpg"  />
        <div className='Nav__links'>
            {/* <h1 ><Link className='links' to="/">Home</Link></h1> */}
            <h1><Link className='links' to="/country">country</Link></h1>
        </div> 
    </div>
    
  )
}



export default Nav