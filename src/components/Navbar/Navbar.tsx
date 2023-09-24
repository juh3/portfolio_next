import { SetStateAction, useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import useWindowSize from '../../utils/windowDimensions'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
const NavbarLinks = () => {
  return (
    <ul className={styles.app__navbar_links}>
      {['Home', 'About', 'Projects', 'Gallery', 'Contact'].map((object) => (
        <li key={`link-${object}`}>
          <div />
          <a href={`#${object}`}>{object}</a>
        </li>
      ))}
    </ul>
  )
}
const Navbar = () => {
  const size = useWindowSize().width

  const [open, setOpen] = useState(false)
  const [navBarTransparent, setnavBarTransparent] = useState(true)

  const handleNavbarTransparent = () => {
    if (window.scrollY === 0) {
      setnavBarTransparent(false)
    } else {
      setnavBarTransparent(true)
    }
  }

  const handleExitMobileWidth = () => {
    if (size > 1199) {
      setOpen(false)
    }
  }

  const MobileNavbar = () => {
    console.log('imhere')
    console.log(open)
    if (open) {
      return (
        <div className={styles.mobilenavbar_container}>
          <motion.div>
            <NavbarLinks />
          </motion.div>
        </div>
      )
    }
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

  useEffect(handleExitMobileWidth)

  return (
    <nav
      className={
        size > 1199 ? `${styles.app__navbar}` : `${styles.app__navbar_mobile}`
      }
    >
      {size > 1199 ? (
        <div className="MenuItemsContainer">
          <div className="MenuNavLinksContainer">
            <NavbarLinks />
          </div>
        </div>
      ) : (
        <MobileMenuBurger />
      )}
      {size < 1199 && <MobileNavbar />}
    </nav>
  )
}

export default Navbar
