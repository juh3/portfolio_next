import React, { useEffect, useCallback } from 'react'
import styles from './Work.module.scss'
import Card from '../Card/Card'
import { motion, useAnimation } from 'framer-motion'

const Work = () => {
  const controls = useAnimation()
  const animateMarquee = useCallback(async () => {
    while (true) {
      await controls.start({ x: -100, transition: { duration: 6 } }) // Adjust the distance for your needs
      await controls.start({ x: 0, transition: { duration: 4 } })
    }
  }, [controls])

  useEffect(() => {
    let isMounted = true
    const startAnimation = async () => {
      while (isMounted) {
        await animateMarquee()
      }
    }
    startAnimation()
    return () => {
      isMounted = false
    }
  }, [animateMarquee])

  const projects = [
    {
      title: 'Kinopoli',
      image: '/kinopoli_frontpage.png',
      link: '',
      shortDescription:
        'WIP. Part of the dev team focusing on the frontend and UX/UI. A reservation site for the movietheater Kinopoli. Stack included React, Next, Vite, SCSS.',
      subtitle_1:
        'Kinopoli desperately needed a new website. With the renovation of the theatre in Summer of 2023, this project was also started after a bit of a break. I joined the dev team with Ilari and Mikko. The project was started already by Toni a year or so ago',
      subtitle_2:
        'My effort was concentrated on the frontend. I was heavily involved with the frontend reservation part, responsiveness and localization.',
      subtitle_3:
        'The tech stack was PERN. React, Redux, PostqreSQL, Express, Node and SCSS/SASS'
    },
    {
      title: 'ApproKartat',
      image: '/ballofroots_frontpage.png',
      link: '',
      shortDescription: "Project for a course 'Design of WWW Services', WIP",
      subtitle_1:
        'This project was done for the course Design of WWW Services D with the same team as the Kylän Keittiö website. Appros or bar crawls are one of the more popular student events out there.',
      subtitle_2:
        'However, there are some issues of how Appros are organized currently. We wish to change that by being a: time saver for the organizer, being more sustainable and being more fun',
      subtitle_3:
        'I was responsible for user research and UX/UI Design. I did also some frontend work. The stack was t3. Design tool was Figma.'
    },
    {
      title: 'Kylän Keittiö',
      figma:
        'https://www.figma.com/file/6I6jvReCh8YJicJLFeLVWq/kyl%C3%A4nkeitti%C3%B6?type=design&mode=design&t=2mLOQJJ5XKt7vzEU-0',
      image: '/ballofroots_frontpage.png',
      shortDescription:
        'Part of the dev team. I did the design in Figma and did 50% of the frontend. T3 stack was used.',
      link: 'https://kylankeittio.fi/',
      subtitle_1:
        'Kinopoli desperately needed a new website. With the renovation of the theatre in Summer of 2023, this project was also started after a bit of a break. I joined the dev team with Ilari and Mikko. The project was started already by Toni a year or so ago',
      subtitle_2:
        'My effort was concentrated on the frontend. I was heavily involved with the frontend reservation part, responsiveness and localization.',
      subtitle_3:
        'The tech stack was PERN. React, Redux, PostqreSQL, Express, Node and SCSS/SASS'
    },
    {
      title: 'Ball of Roots',
      image: '/ballofroots_frontpage.png',
      shortDescription:
        'My first project after completing the FullStack Open course. A plant shop. Stack included React, Node, and MongoDB',
      link: 'https://ballofroots.com/',
      subtitle_1:
        'Kinopoli desperately needed a new website. With the renovation of the theatre in Summer of 2023, this project was also started after a bit of a break. I joined the dev team with Ilari and Mikko. The project was started already by Toni a year or so ago',
      subtitle_2:
        'My effort was concentrated on the frontend. I was heavily involved with the frontend reservation part, responsiveness and localization.',
      subtitle_3:
        'The tech stack was PERN. React, Redux, PostqreSQL, Express, Node and SCSS/SASS'
    }
  ]

  const figmaProjects = [
    {
      title: 'HSL',
      smallCardClick: true,
      shortDescription: 'HiFi prototype of buying a ticket in HSL mobile app',
      link: 'https://www.figma.com/file/mICcBWPguZO96580gfjftQ/HSL-BUY-A-TICKET?type=design&node-id=0%3A1&mode=design&t=tlmci18kh5Ghpmtv-1'
    },
    {
      title: 'BEBO - clothing site',
      smallCardClick: true,
      link: 'https://www.figma.com/file/OBGM9tdBio5KKRjZsWqwif/Bebo--Clothing-store?type=design&node-id=0%3A1&mode=design&t=qOgN8TVjeP0PogMq-1',
      shortDescription: 'HiFi prototype of a online clothing store for mobile'
    },
    {
      title: 'SIK redesign',
      smallCardClick: true,
      shortDescription: 'Redesign of Guild of Electrical Engineers website',
      link: 'https://www.figma.com/file/wQzeQRKW38cAysIKi5lhQv/Aalto-yliopiston-S%C3%A4hk%C3%B6insin%C3%B6%C3%B6rikilta?type=design&mode=design&t=qOgN8TVjeP0PogMq-1'
    }
  ]

  return (
    <div className={styles.work_container} id="Projects">
      <div className={styles.marquee}>
        <motion.div className={styles.track} animate={controls}>
          <h1>
            Projects Projects Projects Projects Projects Projects Projects
          </h1>
        </motion.div>
      </div>
      <div className={styles.projects}>
        {projects.map((work, index) => (
          <motion.div
            key={index}
            style={{ marginBottom: '48px' }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            <Card
              title={work.title}
              image={work.image}
              shortDescription={work.shortDescription}
              link={work.link}
              figma={work?.figma}
              subtitle_1={work.subtitle_1}
              subtitle_2={work.subtitle_2}
              subtitle_3={work.subtitle_3}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h1
          style={{
            color: 'black',
            fontFamily: 'Jetbrains mono, sans serif',
            textTransform: 'uppercase',
            marginTop: '16px',
            marginBottom: '16px'
          }}
        >
          Figma projects
        </h1>
        {figmaProjects.map((project, index) => (
          <div key={index} style={{ marginBottom: '32px' }}>
            <Card
              title={project.title}
              shortDescription={project.shortDescription}
              link={project.link}
              smallCardClick={project.smallCardClick}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Work
