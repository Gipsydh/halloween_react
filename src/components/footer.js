import footerData from '../dataFolder/footerData'
import FooterFr from './footer_fr'
import { useState } from 'react'
import { TreesLeft,TreesRight,TreeBottom } from './backgroundTree'
import { LeftGlow,RightGlow } from './backLight'
const Footer = () => {
  const [footerItems,setFooterItems]=useState(footerData)
  return (

    <footer className='footer'>
      <div className='upper'>
        <div className='fr fr_1'>
          <a href='#' className='nav__logo'>
            <img src={'./resources/logo-skull.png'} alt='' />
            Halloween
          </a>
        </div>
        {footerItems.map((footerItem) => {
          return <FooterFr key={footerItem.id} {...footerItem} />
        })}
      </div>
      <div className='lower'>
        <p>Made by me and inspired by bedimcode</p>
      </div>
      <TreeBottom></TreeBottom>
      <LeftGlow height="85%"></LeftGlow>
    </footer>
  )
  
}

export default Footer
