import React, { useState, useEffect } from 'react'
import navData from '../dataFolder/navItems'
// import {Link} from "react-scroll"
const Header = () => {
  const [navItems, setNavItems] = useState(navData)
  const [value, setValue] = useState(1)
  // const goToLocation=()=>{
  //   window.scrollTo({top:1000,behavior:'smooth'})
  // }
  // useEffect(()=>{
  //   goToLocation()
  // })
  return (
    <>
      <header className='header' id='header'>
        <audio src={'./resources/background_audio.mp3'} autoPlay loop></audio>
        <nav className='nav'>
        <div className="backgroundBlur"></div>
          <a href='#' className='nav__logo'>
            <img src={'./resources/logo-skull.png'} alt='' />
            Halloween
          </a>
          <div className='nav__menu'>
            <ul className='nav__list'>
              {navItems.map((navItem) => {
                return (
                  <li
                    className={`nav__item  ${
                      value === navItem.id && 'active__nav__item'
                    }`}
                    onClick={() => {
                      setValue(navItem.id)
                    }}
                  >
                    <a
                      href={`#${navItem.href}`}
                      id={navItem.id}
                      className='nav__link'
                      onClick={()=>{
                        if(window.innerWidth<=900)
                        document.querySelector("#check").click();
                      }}
                    >
                      {navItem.value}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className='menu'>
              <label for='check'>
                <input
                  type='checkbox'
                  id='check'
                  onClick={(e) => {
                    let toggleMenu = document.querySelector('.nav__list')
                    let backgroundBlur=document.querySelector(".backgroundBlur")

                    if (e.target.checked) {
                      toggleMenu.style.top = '0px'
                      toggleMenu.style.opacity = '1'
                      backgroundBlur.style.display="block"
                    } else {
                      toggleMenu.style.top = '-400px'
                      toggleMenu.style.opacity = '0'
                      backgroundBlur.style.display="none"
                    }
                  }}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
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
