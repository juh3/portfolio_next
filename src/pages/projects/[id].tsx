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
    image: '/approkartat.png',
    link: '',
    figma:
      'https://www.figma.com/file/oQo2kNOQBDLGze7iinD0c0/Approkartat?type=design&node-id=0%3A1&mode=design&t=mqXK7bvKnfLKQz2I-1',
    shortDescription: "Project for a course 'Design of WWW Services', WIP",
    subtitle_1:
      'This project is under work for the course Design of WWW Services D with the same team as the Kylän Keittiö website. Appros or bar crawls are one of the more popular student events out there.',
    subtitle_2:
      'However, there are some issues of how Appros are organized currently. We wish to change that: by being a time saver for the organizer, by being a more sustainable option and offering more satisfaction.',
    subtitle_3:
      'I conducted user research and semi-structured interviews, crafted personas and designed the UI with the WCAG4.0 in mind. I did also some frontend work. The stack was t3. Design tool was Figma.'
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
      'Kylän Keittiö is an association for foodies in Aalto University. I was a founding member.',
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
      'This project definitely could need some improvements like notifications and loading animations.he tech stack was React, Node and MongoDB.'
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
        initial={{ opacity: 0, translateX: '100%' }}
        animate={{ opacity: 1, translateX: 0 }}
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
                <IconContext.Provider
                  value={{ color: 'black', className: styles.icon }}
                >
                  <AiOutlineGithub
                    size={30}
                    onClick={() => handleClick(project.github as string)}
                    onTouchStart={() => handleClick(project.github as string)}
                  />
                </IconContext.Provider>
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
