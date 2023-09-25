import { SetStateAction, useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import useWindowSize from '../../utils/windowDimensions'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { IconContext } from 'react-icons'
import { motion, useAnimation,AnimatePresence  } from 'framer-motion'

const NavbarLinks = ({setOpen}) => {
  return (
    <ul className={styles.app__navbar_links}>
      {['Home', 'About', 'Projects', 'Gallery', 'Contact'].map((object) => (
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
  const controls = useAnimation()
  const [open, setOpen] = useState(false)
  const [navBarTransparent, setnavBarTransparent] = useState(true)

  
  const MobileNavbar = () => {
    console.log("open?", open)
      return (
        <div
          className={`${styles.mobilenavbar_container} ${open ? 'open': 'hidden'}`}>
          {open &&   <div className={styles.navbar_div}
          >
            <NavbarLinks setOpen = {setOpen}/>
          
          </div>}
        
        </div>
      )
    }
  
  

  const MobileMenuBurger = () => {
    return (
      <div className={styles.mobilenavbar_icon_wrapper}>
        <IconContext.Provider
          value={{ color: 'black', className: styles.icon }}
        >
          {!open ? (
            <RxHamburgerMenu onClick={() => setOpen(!open)} />
          ) : (
            <RxCross1 onClick={() => setOpen(!open)} />
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
      <nav className={styles.app__navbar_mobile}>
          <MobileNavbar />
          <MobileMenuBurger />

      </nav>
    )

  }
}

export default Navbar
