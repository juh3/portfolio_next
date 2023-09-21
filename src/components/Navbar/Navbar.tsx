import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      <ul className={styles.app__navbar_links}>
        {['Home', 'About', 'Projects', 'Gallery', 'Contact'].map((object) => (
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
