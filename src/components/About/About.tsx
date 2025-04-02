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
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          className={styles.wrapper}
        >
          <p>
            I&apos;m a fresh IT graduate from Aalto University. Majored in
            Human-Computer Interaction. <br />
            <br />
            Working currently @ Sanoma as a Software Developer.
          </p>
        </motion.div>
        <motion.div
          className={styles.wrapper}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <p>
            Interested in roles in both frontend and fullstack development,
            UX/UI design, service design and in the field of user research. I
            want to create seamless and satisfying user experiences that are
            human-centred.
          </p>
        </motion.div>
        {/* <motion.div
          className={styles.wrapper}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <p>
          You can find my own projects below!
          </p>
        </motion.div> */}
      </div>
    </div>
  )
}

export default About
