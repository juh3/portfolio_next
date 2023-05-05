import React from 'react'
import styles from './Card.module.scss'
import useProjectModal from '../hooks/useProjectModal'
import Image from 'next/image'
const Card = () => {
  const rootModal = useProjectModal()
  return (
    <div className={styles.card} onClick={rootModal.onOpen}>
      <div className={styles.card_image}>
        <Image src="/ballofroots_ad.png" alt="ball of roots logo" width={200} height={120}/>
      </div>
    </div>
  )
}

export default Card
