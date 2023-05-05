import React from 'react'
import styles from './Work.module.scss'
import Card from '../Card/Card'
  
const Work = () => {
  return (
    <div className={styles.work_container} id="Work">
      <h1> My projects</h1>
      <div className={styles.projects}>
          <Card />
      </div>
    </div>
  )
}

export default Work
