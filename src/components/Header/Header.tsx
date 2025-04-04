import React, { useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { init } from 'ityped'
import juhaplaceholder from '../../../public/juhaplaceholder.jpg'
import Image from 'next/image'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Header = () => {
  const textRef = useRef<HTMLSpanElement>(null)

  const handleIconClick = (name: string) => {
    switch (name) {
      case 'github':
        window.open('https://github.com/juh3', '_blank')
        break
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
        'Fullstack',
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
          <h2 className={styles.interests}>
            Interested in: <br></br>
          </h2>
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
            <motion.div
              className={styles.card_cover}
              whileInView={cover.whileInView}
            >
              <Image
                src={juhaplaceholder}
                alt="juha's face and his wall of lps"
                width={400}
                height={500}
                className={styles.card_cover}
                sizes="50wv"
              />
            </motion.div>
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
                <AiOutlineGithub
                  className={styles.icon}
                  style={{ color: 'black' }}
                  onClick={() => handleIconClick('github')}
                  onTouchStart={() => handleIconClick('github')}
                />
                <div className={styles.button_layer}></div>
              </IconContext.Provider>
            </div>
            <div className={styles.button}>
              <IconContext.Provider
                value={{ color: 'black', className: styles.icon }}
              >
                <AiOutlineLinkedin
                  className={styles.icon}
                  style={{ color: 'black' }}
                  onClick={() => handleIconClick('linkedin')}
                  onTouchStart={() => handleIconClick('linkedin')}
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
