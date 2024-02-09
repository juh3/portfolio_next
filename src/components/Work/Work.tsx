import React, { useEffect, useCallback, useRef, useState } from 'react'
import styles from './Work.module.scss'
import Card from '../Card/Card'
import { motion, useAnimation } from 'framer-motion'

const Work = () => {
  const projects = [
    {
      title: 'Kinopoli',
      image: '/kinopoli_frontpage.png',
      link: '',
      type: '[Fullstack]',
      shortDescription:
        'A reservation site for the movie theater Kinopoli. Stack included React, Node, Express, Stripe, SCSS and PostgreSQL. WIP, production soon up. A 3 people project.',

      subtitle_1:
        'Kinopoli is in dire need of a new website, especially with the renovation of the theatre that happened during Summer 2023. After a brief hiatus, the website overhaul project has been restarted by a team comprising myself, Ilari, and Mikko.',
      subtitle_2:
        'My effort was concentrated both on the frontend and backend. I was heavily involved with the frontend reservation part, user reservation view, creation of pages, responsiveness and localization. I also created a Telegram bot to notify volunteers responsible for opening the theatre doors whenever a reservation is made that involves them.',
      subtitle_3:
        'The technology stack employed for this project is PERN, utilizing React, Redux, PostgreSQL, Express, Node, and SCSS/SASS. To facilitate seamless payment processing, the website integrates Stripe, and a webhook is employed to promptly confirm or cancel reservations.'
    },
    {
      title: 'ApproKartat',
      image: '/approkartat.png',
      link: '',
      type: '[User research, UX/UI design, Frontend]',
      figma:
        'https://www.figma.com/file/oQo2kNOQBDLGze7iinD0c0/Approkartat?type=design&node-id=0%3A1&mode=design&t=mqXK7bvKnfLKQz2I-1',
      shortDescription:
        "Digital bar crawl map for student events. Project for a course 'Design of WWW Services', WIP",
      subtitle_1:
        'This project is under work for the course Design of WWW Services D with the same team as the Kylän Keittiö website. Appros or bar crawls are one of the more popular student events out there.',
      subtitle_2:
        'However, there are some issues of how Appros are organized currently. We wish to change that: by being a time saver for the organizer, by being a more sustainable option and offering more satisfaction.',
      subtitle_3:
        'I conducted user research and semi-structured interviews, crafted personas and designed the UI with the WCAG4.0 in mind. I did also some frontend work. The stack was t3. Design tool was Figma.'
    },
    {
      title: 'Fat Ramen',
      image: '/fatramen_affinitydiagram.png',
      link: '',
      type: '[User research]',
      shortDescription:
        'A 5 people project for the course "User-centred Methods for Product and Service Design"'
    },
    {
      title: 'Kylän Keittiö',
      type: '[UX/UI design, Frontend]',
      figma:
        'https://www.figma.com/file/6I6jvReCh8YJicJLFeLVWq/kyl%C3%A4nkeitti%C3%B6?type=design&mode=design&t=2mLOQJJ5XKt7vzEU-0',
      image: '/kylankeittio_figma.png',
      shortDescription:
        'Part of the dev team. I did the design in Figma and did 50% of the frontend. T3 stack was used. Mobile-first.',
      link: 'https://kylankeittio.fi/',
      subtitle_1:
        'Kylän Keittiö is an association for foodies in Aalto University. I was a founding member.',
      subtitle_2:
        'My responsibilities included UI design with mobile-first in Figma and frontend development.',
      subtitle_3:
        'The tech stack was t3. Next, Prisma, tRPC, TypeScript and React'
    },
    {
      title: 'Ball of Roots',
      image: '/ballofroots_frontpage.png',
      type: '[Fullstack]',
      shortDescription:
        'My first project after completing the FullStack Open course. A plant shop. Stack included React, Node, and MongoDB',
      link: 'https://ballofroots.com/',
      github: 'https://github.com/juh3/plantshop',
      subtitle_1:
        'After completing the FullStack Open course I really wanted to make something own with the technologies and skills I learnt during the course.',
      subtitle_2:
        'This project definitely could need some improvements like notifications and loading animations.he tech stack was React, Node and MongoDB.'
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

  const controls = useAnimation()
  const [mounted, setMounted] = useState(false)

  return (
    <div className={styles.work_container} id="Projects">
      <div className={styles.marquee}>
        <div className={styles.track}>
          <h1>
            Projects Projects Projects Projects Projects Projects Projects
          </h1>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((work, index) => (
          <motion.div
            viewport={{ once: true }}
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
              type={work?.type}
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
        viewport={{ once: true }}
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
