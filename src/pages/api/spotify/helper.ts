import axios from 'axios'
import querystring from 'querystring'

const client_id = process.env.NEXT_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.NEXT_SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP5_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?limit=5&offset=1`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })
  return response.json()
}

export const getCurrentlyListening = async (endpoint: string) => {
  const { access_token: accessToken } = await getAccessToken()
  if (!accessToken) {
    return
  }
  return fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}
