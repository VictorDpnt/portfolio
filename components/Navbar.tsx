
import React, { useState } from 'react'





const Navbar = () => {



  const [menu, setMenu]= useState(false)


  return (
    <div className="navbar-container" onMouseEnter={()=>{setMenu(true)}} onMouseLeave={()=> setMenu(false)}>
      <div className={menu ? "nav-menus active" : "nav-menus"}>
      <ul>
        <li className="one">About</li>
        <li className='two'>Projects</li>
        <li className='three'>Skills</li>
        <li className='four'>Contact</li>
      </ul>
      </div>
      <div className="logo-nav" >
      <div className=" lines line-1">
        <span className='first'>■</span>
        <span className='seconde'>■</span>
        <span className='third'>■</span>
      </div>
      <div className="lines line-2">
      <span className='seconde'>■</span>
        <span className='third'>■</span>
        <span className='fourth'>■</span>
      </div>
      <div className="lines line-3">
      <span className='third'>■</span>
        <span className='fourth'>■</span>
        <span className='last'>■</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar
