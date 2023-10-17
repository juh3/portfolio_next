'use client'
import {  useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import useWindowSize from '../../utils/windowDimensions'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { IconContext } from 'react-icons'
import { motion  } from 'framer-motion'

const NavbarLinks = ({setOpen}:{setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <ul className={styles.app__navbar_links}>
      {['Home', 'About', 'Projects'].map((object) => (
        <li key={`link-${object}`}>
          <div />
          <a href={`#${object}`} onClick={() => setOpen(!open)}>{object}</a>
        </li>
      ))}
    </ul>
  )
}
const Navbar = () => {
  const size = useWindowSize().width
  const [open, setOpen] = useState(false)

  
  const MobileNavbar = () => {
      return (

        <motion.div
          className={styles.mobilenavbar_container}
          initial = {{opacity:0, right:-100}}
            animate = {{opacity: 1, right:0, transition:{duration: 0.2}}}
            exit = {{opacity: 0, right: -100, transition:{duration:0.2}}}>
              {open && (
          <div key="menu" 
            className={styles.navbar_div}
            >
              <NavbarLinks setOpen = {setOpen}/>
          
          </div>)}
        </motion.div>

      )
    }
  
  

  const MobileMenuBurger = () => {
    return (
      <div className={styles.mobilenavbar_icon_wrapper}>
        <IconContext.Provider
          value={{className: styles.icon }}
        >
          {!open ? (
            <RxHamburgerMenu onClick={() => setOpen(!open)} />
          ) : (
            <RxCross1 onClick={() =>setOpen(!open)} />
          )}
        </IconContext.Provider>
      </div>
    )
  }

  if(size>1199){
    return(
      <nav className={styles.app__navbar}>
        <div className="MenuItemsContainer">
          <div className="MenuNavLinksContainer">
            <NavbarLinks setOpen = {setOpen}/>
          </div>
        </div>
      </nav>
    ) 
  }
  else{
    return(
      <nav className={open ?styles.app__navbar_mobile_open:styles.app__navbar_mobile}>
          <MobileNavbar />
          <MobileMenuBurger />
      </nav>
    )

  }
}

export default Navbar
