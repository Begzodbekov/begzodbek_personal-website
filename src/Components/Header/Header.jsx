import React from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../Assets/Images/Header-logo.png'
import Title from '../../Assets/Images/Header_umar.png'
function Header() {
  const location = useLocation().pathname
  return (
    <div className='Header'>
        <div className="container">
          <div className="nav">
            <div className="nav_inner">
              <ul className='nav_list'>
                <li className='nav_list_item item1'>
                  <Link to='/' className='nav_item_logo' ><img src={Logo} alt="" /></Link>
                </li>
                <li className='nav_list_item item2'>
                  <Link className='nav_item_a1'><img src={Title} alt="" /></Link>
                </li>
                <li className='nav_list_item item3'>
                  <Link to="/" className={location== '/'?'nav_item_a2 active':"nav_item_a2"}>Home</Link>
                </li>
                <li className='nav_list_item item4'>
                  <Link to="/about" className={location== '/about'?'nav_item_a3 active':"nav_item_a3"}>About</Link>
                </li>
                <li className='nav_list_item itemskils'>
                  <Link to="/skills" className={location== '/skills'?'nav_item_askills active':"nav_item_askills"}>Skills</Link>
                </li>
                <li className='nav_list_item item5'>
                  <Link to="/portfolio" className={location== '/portfolio'?'nav_item_a4 active':"nav_item_a4"}>Portfolio</Link>
                </li>
                <li className='nav_list_item item6'>
                  <Link to="/contact" className={location== '/contact'?'nav_item_a5 active':"nav_item_a5"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header