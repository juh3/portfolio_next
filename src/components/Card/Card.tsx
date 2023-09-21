import React from 'react'
import styles from './Card.module.scss'
import useProjectModal from '../hooks/useProjectModal'
import Image from 'next/image'

interface CardInterface {
  title: string,
  description: string,
  link: string,
  image: string
}

const Card:React.FC<CardInterface> = ({title,description, link, image}) => {
  const handleCardClick = () => {
    window.open(link, '_blank')
  }
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.card_overlay}>
        <div className={styles.card_image}>
          <Image src={image} alt="ball of roots logo" width={600} height={600}/>
        </div>
        <div className={styles.card_description}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
