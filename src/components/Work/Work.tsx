import React from 'react'
import styles from './Work.module.scss'
import Card from '../Card/Card'
import { useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useScroll,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from 'next/image'

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 20], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(20, -20, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      directionFactor.current = -1;
    

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
const Work = () => {

  const projecttext = {
    whileInView: {
        translateX: [300, 0, 0],
        translateY: [0,0,-300],
        transition: { duration: 3, ease: 'easeOut' },
    },
  }
  
  return (
    <div className={styles.work_container} id="Projects">
      <section>
      <ParallaxText baseVelocity={-5}>Projects</ParallaxText>
      <ParallaxText baseVelocity={5}>Projects</ParallaxText>

    </section>
      <motion.div className={styles.projects}>
        <Card title="Ball of Roots" image ="/ballofroots_frontpage.png" description='My first project after completing the FullStack Open course. A plant shop. Stack included React, Node, and MongoDB' link="https://ballofroots.com/"/>
        <Card title="Kylän Keittiö" image ="/ballofroots_frontpage.png" description='Part of the dev team. I did the design in Figma and did 50% of the frontend. T3 stack was used.' link="https://kylankeittio.fi/"/>
        <Card title="Kinopoli" image = "/kinopoli_frontpage.png" description='I was part of the dev team focusing on the frontend. A reservation site for the movietheater Kinopoli. Stack included React, Next, Vite, SCSS.' link="https://kinopoli.fi/"/>
        <Card title = "ApproKartat" image = "/ballofroots_frontpage.png" description='My first project' link="https://ballofroots.com/"/>
      </motion.div>
    </div>
  )
}

export default Work
