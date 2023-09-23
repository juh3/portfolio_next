import React from 'react'
import Image from 'next/image'
import styles from './MusicCard.module.scss'
import { ParsedSong } from '../../types/songs'
import ProgressBar from '../ProgressBar/ProgressBar'
const MusicCard = ({ song }: { song: ParsedSong }) => {
  return (
    <div className={styles.music_card}>
      <div className={styles.image_container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={song.thumbnail} alt="album cover" width={80} height={80} />
      </div>
      <div className={styles.song_info}>
        <p className={styles.song_name}>{song.title}</p>
        <p className={styles.song_artist}>{song.artist}</p>
        {song.isPlaying && (
          <ProgressBar duration={song.duration} progress={song.progress} />
        )}
      </div>
    </div>
  )
}

export default MusicCard
