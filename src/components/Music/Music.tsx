import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import MusicCard from '../MusicCard/MusicCard'
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
import styles from './Music.module.scss'
import useSWR from 'swr'
import { ParsedSong } from '../../types/songs'

const Music = ({ topFive }: { topFive: ParsedSong[] }) => {
  // const [nowPlaying, setNowPlaying] = useState('')
  // useEffect(() => {
  //   const getAccessToken = async () => {
  //     const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
  //     const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
  //     const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
  //     // Spotify API token endpoint
  //     const tokenURL = 'https://accounts.spotify.com/api/token'
  //     // Request payload
  //     const data = new URLSearchParams()
  //     data.append('grant_type', 'refresh_token')
  //     data.append('refresh_token', refreshToken)
  //     // Request headers with base64 encoded client ID and client secret
  //     const encoded = Buffer.from(`${clientID}:${clientSecret}`).toString(
  //       'base64'
  //     )
  //     const headers = {
  //       Authorization: `Basic ${encoded}`,
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //     // Make a POST request to get a new access token
  //     try {
  //       const response = await axios.post(tokenURL, data, { headers })
  //       return response.data.access_token
  //     } catch (error) {
  //       console.error('Error refreshing token:', error)
  //     }
  //   }
  //   const getNowPlaying = async () => {
  //     const access_token = await getAccessToken()
  //     const response = await axios.get(NOW_PLAYING_ENDPOINT, {
  //       headers: {
  //         Authorization: `Bearer ${access_token}`
  //       }
  //     })
  //     setNowPlaying(response.data)
  //   }

  //   getNowPlaying()
  // }, [])
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
        {typeof nowPlaying !== 'string' && (
          <div className={styles.now_playing}>
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
          </div>
        )}
        {!nowPlaying && (
          <div>
            <p style={{ color: 'black' }}>
              Not listening to anything right now!
            </p>
          </div>
        )}
        {topFive && (
          <div className={styles.topFive_wrapper}>
            {topFive.map((song) => (
              <div className={styles.topFive_card} key={song.id}>
                <MusicCard song={song} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Music
