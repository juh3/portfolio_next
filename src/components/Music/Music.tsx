import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const Music = () => {
  const [nowPlaying, setNowPlaying] = useState('')
  useEffect(() => {
    const getAccessToken = async () => {
      const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
      const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
      const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN
      // Spotify API token endpoint
      const tokenURL = 'https://accounts.spotify.com/api/token'
      // Request payload
      const data = new URLSearchParams()
      data.append('grant_type', 'refresh_token')
      data.append('refresh_token', refreshToken)
      // Request headers with base64 encoded client ID and client secret
      const encoded = Buffer.from(`${clientID}:${clientSecret}`).toString(
        'base64'
      )
      const headers = {
        Authorization: `Basic ${encoded}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      // Make a POST request to get a new access token
      console.log(process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN)
      try {
        const response = await axios.post(tokenURL, data, { headers })
        return response.data.access_token
      } catch (error) {
        console.error('Error refreshing token:', error)
      }
    }
    const getNowPlaying = async () => {
      const access_token = await getAccessToken()
      const response = await axios.get(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      setNowPlaying(response.data)
    }

    getNowPlaying()
  }, [])

  return (
    <div>
      <h2>
        {' '}
        I&apos;m always listening to music, checkout what I&apos;m listening
        right now below
      </h2>
      {nowPlaying && (
        <div>
          <Image
            src={nowPlaying.item.album.images[2].url}
            alt="album cover"
            width={300}
            height={300}
          />
          {nowPlaying.item.name} by {nowPlaying.item.artists[0].name}
        </div>
      )}
      {!nowPlaying && (
        <div>
          <p> Not listening to anything right now!</p>
        </div>
      )}
    </div>
  )
}

export default Music
