import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import styles from './Project.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { FaFigma } from 'react-icons/fa6'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'

const projects = [
  {
    title: 'Kinopoli',
    image: '/kinopoli_frontpage.png',
    link: '',
    shortDescription:
      'WIP, production soon up. A reservation site for the movie theater Kinopoli. Stack included React, Node, Express, Vite, SCSS and PostgreSQL.',
    subtitle_1:
      'Kinopoli desperately needs a new website. With the renovation of the theatre in Summer of 2023, this project was also started after a bit of a break. The dev team is mainly me, Ilari and Mikko.',
    subtitle_2:
      'I am heavily involved with the frontend reservation part, the other pages, responsiveness and localization. I also created a Telegram-bot to send a message to the volunteers who open the doors to the people reserving the theatre whenever a reservation is made where the volunteer is the opener, 3 days before an opening and on the morning of the door opening turn. ',
    subtitle_3:
      'The tech stack was PERN. React, Redux, PostqreSQL, Express, Node and SCSS/SASS. The site uses Stripe to handle payments and a webhook to confirm or cancel reservations'
  },
  {
    title: 'ApproKartat',
    image: '/approkartat.png',
    link: 'https://www.approkartat.fi/',
    figma:
      'https://www.figma.com/file/oQo2kNOQBDLGze7iinD0c0/Approkartat?type=design&node-id=0%3A1&mode=design&t=mqXK7bvKnfLKQz2I-1',
    shortDescription:
      "Project for a course 'Design of WWW Services', mobile only, WIP",
    subtitle_1:
      'This project as is was for the course Design of WWW Services D with the same team as the Kylän Keittiö website and is mobile only. Appros or bar crawls are one of the more popular student events out there and our idea tries to replace the clunky physical bar crawl stamp and map paper. In addition, there are some issues of how Appros are organized currently. We wish to change that: by being a time saver for the organizer, by being a more sustainable option and offering more satisfaction to participants and organizers.',
    subtitle_2:
      'The application works as intended, we had our first field test in Estonia at the start of December and people liked using it and felt it was a cool idea. It still however needs some work like designing a lot better landing pages and dashboards for both organizers and event participants as well as taking into account different browsers and the issues that arise from that. The organizer can create an event which is quite customizable. The organizer can add locations via a map or by inputting a street name. The organizer can add different stamp images to different locations and more! The participant is linked to the event by an email, which the organizer has to add in event creation in a .csv-file. The site generates QR-codes which the participants then have to scan with our site in order to collect stamps.',
    subtitle_3:
      'I conducted user research and semi-structured interviews, crafted personas and designed the UI with the WCAG3.0 in mind. I did also frontend work like the stamp card and how the map handles location pins and information and a ton more. The stack was t3. Design tool was Figma.'
  },
  {
    title: 'Kylän Keittiö',
    figma:
      'https://www.figma.com/file/6I6jvReCh8YJicJLFeLVWq/kyl%C3%A4nkeitti%C3%B6?type=design&mode=design&t=2mLOQJJ5XKt7vzEU-0',
    image: '/kylankeittio_figma.png',
    shortDescription:
      'Part of the dev team. I did the design in Figma and did 50% of the frontend. T3 stack was used. Mobile-first.',
    link: 'https://kylankeittio.fi/',
    subtitle_1:
      'Kylän Keittiö is an association for foodies in Aalto University. I was a founding member for the association.',
    subtitle_2:
      'My responsibilities included UI design with mobile-first in Figma and frontend development.',
    subtitle_3:
      'The tech stack was t3. Next, Prisma, tRPC, TypeScript and React'
  },
  {
    title: 'Ball of Roots',
    image: '/ballofroots_frontpage.png',
    shortDescription:
      'My first project after completing the FullStack Open course. A plant shop. Stack included React, Node, and MongoDB',
    link: 'https://ballofroots.com/',
    github: 'https://github.com/juh3/plantshop',
    subtitle_1:
      'After completing the FullStack Open course I really wanted to make something own with the technologies and skills I learnt during the course.',
    subtitle_2:
      'This project definitely could need some improvements which I realize after the fact like notifications and loading animations to inform the user the state of the site. The tech stack was React, Node, express and MongoDB.'
  }
]
const SingleProjectPage: NextPage = () => {
  const router = useRouter()
  const project = projects.find((project) => project.title === router.query.id)

  const handleClick = (link: string) => {
    window.open(link, '_blank')
  }

  if (project) {
    return (
      <motion.div
        className={styles.modalContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.modalWrapper}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalHeading}>{project.title}</h2>
            </div>

            {project.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={project?.image}
                  alt="ball of roots logo"
                  width={500}
                  height={300}
                />
              </div>
            )}

            <div className={styles.modalBody}>
              <p className={styles.bodyText}>{project.subtitle_1}</p>
              <br />
              <p className={styles.bodyText}>{project.subtitle_2}</p>
              <br />
              <p className={styles.bodyText}>{project.subtitle_3}</p>
            </div>

            <div className={styles.modalButtonContainer}>
              {project.link.length > 1 && (
                <button
                  className={styles.modalButton}
                  onClick={() => handleClick(project.link)}
                >
                  To the site
                </button>
              )}
              {typeof project.figma === 'string' && (
                <button
                  className={styles.modalButton}
                  onClick={() => handleClick(project.figma as string)}
                >
                  Figma
                </button>
              )}
              {typeof project.github === 'string' && (
                <button
                  className={styles.modalButton}
                  onClick={() => handleClick(project.github as string)}
                >
                  Github
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  } else {
    return null
  }
}

export default SingleProjectPage
