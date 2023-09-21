import React from 'react'
import styles from './Card.module.scss'
import useProjectModal from '../hooks/useProjectModal'
import Image from 'next/image'
const Card = () => {
  const rootModal = useProjectModal()
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src="/ballofroots_frontpage.png" alt="ball of roots logo" width={600} height={600}/>
      </div>
    </div>
  )
}

export default Card
