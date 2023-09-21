import React from 'react'
import styles from './About.module.scss'
import { motion } from 'framer-motion'

const About = () => {
  const cardAppear = {
    initial: []
  }
  return (
    <div className={styles.app__about_page} id="About">
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          className={styles.wrapper}
        >
          <p>
            I&apos;m a masters student in Aalto University, studying
            Human-Computer Interaction. Currently writing my master&apos;s
            thesis
          </p>
        </motion.div>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          {' '}
          <p>
            Interested in roles in frontend development, UX/UI design, service
            design and in the field of user research. I want to create seamless
            and satisfying user experiences that are human-centred and take into
            account sustainability.
          </p>
        </motion.div>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <p>
            Completed the FullStack Open course with 11 ECTs and Aalto`s own web
            development course. You can find my own projects below!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
