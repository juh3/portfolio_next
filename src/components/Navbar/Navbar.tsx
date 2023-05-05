import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      {/*<div className='app__navbar-logo'>
          <img src = {logo} alt = "logo" />
  </div>*/}

      <ul className={styles.app__navbar_links}>
        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((object) => (
          <li key={`link-${object}`}>
            <div />
            <a href={`#${object}`}>{object}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
