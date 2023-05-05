import React from 'react'
import styles from './About.module.scss'

const About = () => {
  /*const interests = [
    'Fullstack',
    'UI design',
    'Coffee',
    'Houseplants',
    'Sports',
    'Indie music',
  ]*/

  return (
    <div className={styles.app__about_page} id="About">
      <h2> About me</h2>

      <div className={styles.wrapper}>
        <p>
          {' '}
          I`m Juha Anttila, a masters student in Aalto University, studying
          Human-Computer Interaction.
        </p>

        <p>
          Interested in roles in frontend development, UX/UI design, service
          design and in the field of user research. I want to create seamless
          and satisfying user experiences that are human-centred and take into
          account sustainability.{' '}
        </p>
        <p>
      Completed the FullStack Open course with 11 ECTs and Aalto`s own web
          development course. You can find my own projects below!
        </p>
      </div>
      <div className={styles.geometry}>
        <div className={styles.line}></div>
        <div className={styles.ellipse}></div>
      </div>
    </div>
  )
}

export default About
