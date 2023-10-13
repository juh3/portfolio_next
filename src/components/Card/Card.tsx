import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import useProjectModal from '../../utils/useProjectModal'



interface CardInterface {
  title: string
  shortDescription: string
  link: string
  image: string
  subtitle_1: string
  subtitle_2: string
  subtitle_3: string
  figma?: string
  github?: string
}

const Card: React.FC<CardInterface> = (project) => {

  const rootModal = useProjectModal()
  return (
    <div className={styles.card} onClick={() => rootModal.onOpen(project)}>
      <div className={styles.card_overlay}>
        <div className={styles.card_image}>
          <Image
            src={project.image}
            alt="ball of roots logo"
            width={600}
            height={600}
          />
        </div>
        <div className={styles.card_description}>
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
