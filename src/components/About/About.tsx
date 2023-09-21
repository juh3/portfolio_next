import React from 'react'
import styles from './About.module.scss'

const About = () => {

  return (
    <div className={styles.app__about_page} id="About">
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <p>
            I&apos;m a masters student in Aalto University, studying
            Human-Computer Interaction. Currently writing my master&apos;s thesis
          </p>

          <p>
            Interested in roles in frontend development, UX/UI design, service
            design and in the field of user research. I want to create seamless
            and satisfying user experiences that are human-centred and take into
            account sustainability.
          </p>
          <p>
        Completed the FullStack Open course with 11 ECTs and Aalto`s own web
            development course. You can find my own projects below!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
