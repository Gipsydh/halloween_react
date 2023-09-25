import React,{useState,useEffect} from 'react'
import navData from "../dataFolder/navItems"
const Header = () => {
  const [navItems,setNavItems]=useState(navData)
  
  return (
    <>
      <header className='header' id='header'>
        <nav className='nav'>
          <a href='#' className='nav__logo'>
            <img src={'./resources/logo-skull.png'} alt='' />
            Halloween
          </a>
          <div className='nav__menu'>
            <ul className='nav__list'>
              {navItems.map((navItem)=>{
                return (
                  <li className='nav__item'>
                    <a href='#' className='nav__link'>
                      {navItem.value}
                    </a>
                  </li>
                )
              })}
            </ul>
            {/* <div className='nav__close'>
              <i class='fa-solid fa-xmark'></i>
            </div>
            <img src={require('../resources/nav-bat.png')} alt='' />
            <div className='nav__toggle'>
              <i class='fa-solid fa-bars'></i>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header
