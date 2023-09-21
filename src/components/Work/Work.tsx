import React from 'react'
import styles from './Work.module.scss'
import Card from '../Card/Card'
import { useRef } from 'react'
import {
  motion,
  useSpring,
  useTransform,
  useScroll,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useAnimation
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import Image from 'next/image'

const marqueeVariants = {
  animate: {
    x: ['0%', '-6%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        ease: 'linear'
      }
    }
  }
}

const Work = () => {
  const projecttext = {
    whileInView: {
      translateX: [300, 0, 0],
      translateY: [0, 0, -300],
      transition: { duration: 3, ease: 'easeOut' }
    }
  }
  const controls = useAnimation()
  const animateMarquee = async () => {
    while (true) {
      await controls.start({ x: -100, transition: { duration: 6 } }) // Adjust the distance for your needs
      await controls.start({ x: 0, transition: { duration: 4 } })
    }
  }
  React.useEffect(() => {
    animateMarquee()
  }, [])
  return (
    <div className={styles.work_container} id="Projects">
      <div className={styles.marquee}>
        <motion.div className={styles.track} animate={controls}>
          <h1>
            Projects Projects Projects Projects Projects Projects Projects
          </h1>
        </motion.div>
      </div>
      <motion.div className={styles.projects}>
        <Card
          title="Ball of Roots"
          image="/ballofroots_frontpage.png"
          description="My first project after completing the FullStack Open course. A plant shop. Stack included React, Node, and MongoDB"
          link="https://ballofroots.com/"
        />
        <Card
          title="Kylän Keittiö"
          image="/ballofroots_frontpage.png"
          description="Part of the dev team. I did the design in Figma and did 50% of the frontend. T3 stack was used."
          link="https://kylankeittio.fi/"
        />
        <Card
          title="Kinopoli"
          image="/kinopoli_frontpage.png"
          description="I was part of the dev team focusing on the frontend. A reservation site for the movietheater Kinopoli. Stack included React, Next, Vite, SCSS."
          link="https://kinopoli.fi/"
        />
        <Card
          title="ApproKartat"
          image="/ballofroots_frontpage.png"
          description="My first project"
          link="https://ballofroots.com/"
        />
      </motion.div>
    </div>
  )
}

export default Work
