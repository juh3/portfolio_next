import React from 'react'
import Image from 'next/image'
import styles from './Gallery.module.scss'
const Gallery = () => {
  return (
    <div className={styles.galleryContainer} id ="Gallery">
      <div className={styles.inner}>
      <h1> Gallery</h1>
        <Image src = "/electricityPole.png" alt = "Painting" width = {350} height = {400}/>
        <Image src = "/circle3.jpg" alt = "Painting" width = {350} height = {400}/>
        <Image src = "/firstOne.png" alt = "Painting" width = {600} height = {380}/>

      </div>
    </div>
  )
}

export default Gallery