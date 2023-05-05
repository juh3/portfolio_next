import React, { useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { init } from 'ityped'
import juhaplaceholder from '../public/juhaplaceholder.jpg'

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

  const imgContainer = {
    initial: { left: '0%', top: '0%' },
    hover: {
      left: 0,
      top: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  const imgBackground_1 = {
    initial: { bottom: '0%', right: '0%' },
    hover: {
      left: 16,
      top: 16,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }
  const imgBackground_2 = {
    initial: { bottom: '0%', right: '0%' },
    hover: {
      left: 32,
      top: 16,
      transition: { duration: 1, ease: 'easeOut' },
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

  return (
    <div className={styles.app__header_style} id="Home">
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <motion.div
            variant={welcometext}
            whileInView={welcometext.whileInView}
          >
            <h1 className={styles.greeting}> Hey!</h1>
          </motion.div>

          <motion.div
            variant={welcomename}
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
        <div className={styles.picturediv}>
          <motion.div
            layout
            className={styles.imgContainer}
            variant={imgContainer}
            initial={imgContainer.initial}
            whileHover={imgContainer.hover}
          ></motion.div>
          <motion.div
            layout
            className={styles.imgBackground_1}
            variant={imgBackground_1}
            initial={imgBackground_1.initial}
            whileHover={imgBackground_1.hover}
          ></motion.div>
          <motion.div
            layout
            className={styles.imgBackground_2}
            variant={imgBackground_2}
            initial={imgBackground_2.initial}
            whileHover={imgBackground_2.hover}
          ></motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
