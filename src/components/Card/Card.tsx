import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import useProjectModal from '../../utils/useProjectModal'

interface CardInterface {
  title: string
  shortDescription: string
  link: string
  image?: string
  subtitle_1?: string
  subtitle_2?: string
  subtitle_3?: string
  figma?: string
  github?: string
  smallCardClick?: boolean
}

const Card: React.FC<CardInterface> = (project) => {
  const rootModal = useProjectModal()

  const openSmallCard = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <div
      className={styles.card}
      onClick={
        project.smallCardClick
          ? () => openSmallCard(project.link)
          : () => rootModal.onOpen(project)
      }
    >
      <div className={styles.card_overlay}>
        {project.image && (
          <div className={styles.card_image}>
            <Image
              src={project.image}
              alt="ball of roots logo"
              width={600}
              height={600}
            />
          </div>
        )}
        <div className={styles.card_description}>
          {!project.image && <div style={{ marginTop: '4px' }}></div>}
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
