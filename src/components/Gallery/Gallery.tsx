import React from 'react'
import Image from 'next/image'
import styles from './Gallery.module.scss'
const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <h3> Paintings</h3>

      <div className={styles.galleryWrapper}>
        <Image src = "/electricityPole.png" alt = "Painting" width = {350} height = {400}/>
      </div>
    </div>
  )
}

export default Gallery