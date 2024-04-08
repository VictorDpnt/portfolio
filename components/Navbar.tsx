
import React, { useState } from 'react'





const Navbar = () => {



  const [menu, setMenu]= useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="navbar-container" >
      <div className="menu">
        <ul onMouseEnter={()=>{setMenu(true)}} onMouseLeave={()=> setMenu(false)}>
          <li><div className="logo-nav" >
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
            <ul className={menu ? "nav-menus active" : "nav-menus"}>
            <li className="link" onClick={scrollToTop}>About</li>
            <a href="#main"><li className='link'>Projects</li></a>
            <a href="#exp"><li className='link'>Experiences</li></a>
            <a href="#skills"><li className='link'>Skills</li></a>
            
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

