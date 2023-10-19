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
      'Kinopoli desperately needs a new website. With the renovation of the theatre in the Summer of 2023, this project was also started after a bit of a break. I joined the dev team with Ilari and Mikko. The project was started already by Toni a year or so ago with slow progress.',
    subtitle_2:
      'My effort was concentrated on the frontend. I was heavily involved with the frontend reservation flow and UI, responsiveness of the page and localization.',
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
      'However, there are some issues of how Appros are organized currently. We wish to change that: by being a time saver for the organizers, by being a more sustainable option and offering more satisfaction.',
    subtitle_3:
      'I conducted user research and semi-structured interviews, crafted personas and designed the UI with the WCAG 3.0 in mind. I created a design system and explored different kinds of layouts for the UI in Figma. We hope to conduct a usability survey at the end of november. My responsibilites also includes some frontend work. The stack was t3.'
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
      'I was a founding member of Kylän Keittiö which is an association for foodies in Aalto University.',
    subtitle_2:
      'The board wanted a website for their association and I was given free hands of how it should look like and what features it would have. I partenered up with Niilo and Ilari. My responsibilities included UI design with a mobile-first focus, which I used Figma for and 50% of the frontend development.',
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
