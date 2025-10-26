import React from 'react'
import { useState } from 'react'
import './Navbar.css'   
import { assets } from '../../assets/assets'
const Navbar = () => {

  const [menu,setMenu] = useState("Home"); 
  return (
    <div className="navbar">
        <img src={assets.logo} alt="" className='logo' />
        <ul className="navbar-menu">
            <li className={menu==="Home"?"active":""}>Home</li>
            <li className={menu==="Menu"?"active":""}>Menu</li>
            <li className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
            <li className={menu==="Contact us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=""/>
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
