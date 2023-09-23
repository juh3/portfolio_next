import { getCurrentlyListening } from './helper'
import { normalizeCurrentlyListening } from '../../../utils/normalizeSpotify'
import type { NextApiRequest, NextApiResponse } from 'next'

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP5_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?limit=5&offset=1`
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getCurrentlyListening(NOW_PLAYING_ENDPOINT)

  if (!response) {
    return res.status(500).json({ error: 'Spotify not available' })
  }

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ is_playing: false })
  }
  const data = await response.json()
  console.log('this is the data', data)
  return res.status(200).json(normalizeCurrentlyListening(data))
}
