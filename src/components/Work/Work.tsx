import React from 'react'
import styles from './Work.module.scss'
import Card from '../Card/Card'
import { motion} from 'framer-motion'
import Image from 'next/image'

const Work = () => {

  const projecttext = {
    whileInView: {
        translateX: [300, 0, 0],
        translateY: [0,0,-300],
        transition: { duration: 3, ease: 'easeOut' },
    },
  }
  
  return (
    <div className={styles.work_container} id="Work">
      <motion.div whileInView={projecttext.whileInView} className={styles.work_wrapper}>
        <h1 className={styles.work_h1}> Projects</h1>
      </motion.div>
      <motion.div className={styles.projects}>
        <Card/>
        <Card/>
        <Card/>
      </motion.div>
    </div>
  )
}

export default Work
