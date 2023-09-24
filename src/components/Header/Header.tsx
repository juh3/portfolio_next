import React, { useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { init } from 'ityped'
import juhaplaceholder from '../public/juhaplaceholder.jpg'
import Image from 'next/image'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Header = () => {
  const textRef = useRef<HTMLSpanElement>(null)

  // const welcometext = {
  //   whileInView: {
  //     x: '200px',
  //     transition: { duration: 2, ease: 'easeOut' }
  //   }
  // }

  // const welcomename = {
  //   whileInView: {
  //     x: '200px',
  //     transition: { duration: 3, ease: 'easeOut' }
  //   }
  // }

  const handleIconClick = (name: string) => {
    switch (name) {
      case 'github':
        window.open('https://github.com/juh3', '_blank')

      case 'linkedin':
        window.open('https://www.linkedin.com/in/juha-anttila/', '_blank')
        break
    }
  }
  useEffect(() => {
    if (!textRef.current) {
      return
    }
    init(textRef.current, {
      showCursor: false,
      strings: [
        'UX/UI Design',
        'Frontend development',
        'User Research',
        'Design',
        'Coffee',
        'Houseplants!'
      ]
    })
  }, [])

  const cover = {
    whileInView: {
      left: [0, 32, 0],
      bottom: [0, 32, 0],
      transition: {
        ease: 'easeOut',
        duration: 5,
        repeatDelay: 2,
        repeat: Infinity
      }
    }
  }
  const cover2 = {
    whileInView: {
      left: [0, 16, 0],
      bottom: [0, 16, 0],
      transition: {
        ease: 'easeOut',
        duration: 5,
        repeatDelay: 2,
        repeat: Infinity
      }
    }
  }
  const card = {
    initial: { opacity: 1 },
    whileInView: {
      transition: {
        ease: 'easeInOut',
        duration: 4,
        repeatDelay: 1,
        repeat: Infinity
      }
    }
  }

  return (
    <div className={styles.app__header_style} id="Home">
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <div>
            <h1 className={styles.greeting}> Hey!</h1>

            <h1 className={styles.name}> I am Juha</h1>
          </div>
          <h3 className={styles.interests}>
            Interested in: <br></br>
          </h3>
          <span
            className={styles.interests}
            id={styles.span}
            ref={textRef}
          ></span>
        </div>
      </div>

      <div className={styles.right}>
        <motion.div
          className={styles.card}
          variants={card}
          initial="initial"
          whileInView={card.whileInView}
        >
          <motion.div className={styles.squarecards}>
            <motion.img
              src="juhaplaceholder.jpg"
              className={styles.card_cover}
              whileInView={cover.whileInView}
            ></motion.img>
            <motion.div
              className={styles.card_back_one}
              whileInView={cover2.whileInView}
            ></motion.div>
            <motion.div className={styles.card_back_two}></motion.div>
          </motion.div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <IconContext.Provider
                value={{ color: 'black', className: styles.icon }}
              >
                <AiOutlineGithub onClick={() => handleIconClick('github')} />
                <div className={styles.button_layer}></div>
              </IconContext.Provider>
            </div>
            <div className={styles.button}>
              <IconContext.Provider
                value={{ color: 'black', className: styles.icon }}
              >
                <AiOutlineLinkedin
                  onClick={() => handleIconClick('linkedin')}
                />
                <div className={styles.button_layer}></div>
              </IconContext.Provider>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
