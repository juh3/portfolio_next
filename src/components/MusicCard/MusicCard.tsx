import React from 'react'
import Image from 'next/image'
import styles from './MusicCard.module.scss'
const MusicCard = ({ song }) => {
  return (
    <div className={styles.music_card}>
      <div className={styles.image_container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={song.thumbnail} alt="album cover" width={80} height={80} />
      </div>
      <div className={styles.song_info}>
        <p className={styles.song_name}>{song.title}</p>
        <p className={styles.song_artist}>{song.artist}</p>
      </div>
    </div>
  )
}

export default MusicCard
