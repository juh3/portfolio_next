import React, { useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { init } from 'ityped'
import juhaplaceholder from '../public/juhaplaceholder.jpg'
import Image from 'next/image'

const Header = () => {
  const textRef = useRef<HTMLSpanElement>(null)

  const welcometext = {
    whileInView: {
      x: '200px',
      transition: { duration: 2, ease: 'easeOut' },
    },
  }

  const welcomename = {
    whileInView: {
      x: '200px',
      transition: { duration: 3, ease: 'easeOut' },
    },
  }


  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      showCursor: false,
      strings: [
        'UX/UI Design',
        'Frontend development',
        'User Research',
        'Design',
        'Coffee',
        'Houseplants!',
      ],
    } )
  }, [])

  const card = {
    initial: { backgroundColor: "#000000"},
    hover: { backgroundColor: "#1C1C1C", transition: {ease: "easeIn"}}
  }
  const cover = {
    initial: { left: 0, bottom: 0},
    hover: { left: 32, bottom: 32}

  }
  const cover2 = {
    initial: { left: 0, bottom: 0},
    hover: { left: 16, bottom: 16}

  }
  return (
    <div className={styles.app__header_style} id="Home">
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <motion.div
            variants={welcometext}
            whileInView={welcometext.whileInView}
          >
            <h1 className={styles.greeting}> Hey!</h1>
          </motion.div>

          <motion.div
            variants={welcomename}
            whileInView={welcomename.whileInView}
            style={{ padding: '0.1rem' }}
          >
            <h1 className={styles.name}> I am Juha</h1>
            <h3 className={styles.interests}>
              {' '}
              Interested in: <br></br>
              <span id = {styles.span} ref={textRef}></span>{' '}
            </h3>
          </motion.div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.squarecards}>
          <motion.img src = '/public/juhaplaceholder.jpg' className={styles.card_cover} variants={card} initial = "initial" whileHover = "hover"></motion.img>
          <motion.div className={styles.card_back_one}></motion.div>
          <motion.div className={styles.card_back_two}></motion.div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header
