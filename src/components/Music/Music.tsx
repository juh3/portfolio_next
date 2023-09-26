import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MusicCard from '../MusicCard/MusicCard'
import styles from './Music.module.scss'
import { ParsedSong } from '../../types/songs'
import { motion } from 'framer-motion'

const Music = ({ topFive }: { topFive: ParsedSong[] }) => {
  const apiUrl = '/api/spotify'
  const [nowPlaying, setNowPlaying] = useState<ParsedSong | string>('')
  useEffect(() => {
    async function fetcher() {
      const response = await axios.get(`${apiUrl}/currentSong`)
      if (response.status === 200) {
        setNowPlaying(response.data)
      }
    }
    fetcher()
    const interval = setInterval(fetcher, 20000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className={styles.music_wrapper}>
      <div className={styles.inner}>
        {typeof nowPlaying !== 'string' && nowPlaying.isPlaying && (
          <motion.div
            className={styles.now_playing}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.07 } }}
          >
            <h4
              style={{
                color: 'black',
                fontFamily: 'Jetbrains mono, sans-serf',
                marginBottom: '16px'
              }}
            >
              LISTENING TO
            </h4>
            <MusicCard song={nowPlaying} />{' '}
          </motion.div>
        )}
        {!nowPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.07 } }}
          >
            <h4
              style={{
                color: 'black',
                fontFamily: 'Jetbrains mono, sans-serf',
                marginBottom: '16px'
              }}
            >
              LISTENING TO
            </h4>
          </motion.div>
        )}
        {topFive && (
          <motion.div
            className={
              typeof nowPlaying !== 'string' && nowPlaying.isPlaying
                ? `${styles.topFive_wrapper}`
                : `${styles.topFive_centered}`
            }
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.07 } }}
          >
            <h4
              style={{
                color: 'black',
                fontFamily: 'Jetbrains mono, sans-serf',
                marginBottom: '16px'
              }}
            >
              RECENT TOP 5 SONGS
            </h4>
            {topFive.map((song) => (
              <div className={styles.topFive_card} key={song.title}>
                <MusicCard song={song} />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Music
