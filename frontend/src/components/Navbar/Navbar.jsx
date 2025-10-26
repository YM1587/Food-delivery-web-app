import React from 'react'
import './Navbar.css'   
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={assets.logo} alt="" className='logo' />
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Mobile-app</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search} alt="search" className='icon' />
            <div className="navbar-search-icon">
                <img src={assets.basket} alt=""/>
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
