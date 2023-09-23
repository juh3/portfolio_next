import { getCurrentlyListening } from './helper'
import { normalizeTop5 } from '../../utils/normalizeSpotify'
import type { NextApiRequest, NextApiResponse } from 'next'

const TOP5_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=5&offset=1&time_range=short_term`
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getCurrentlyListening(TOP5_ENDPOINT)

  if (!response) {
    return res.status(500).json({ error: 'Spotify not available' })
  }

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ is_playing: false })
  }
  const data = await response.json()
  const parsedData = []
  data.items.map((entry) => parsedData.push(normalizeTop5(entry)))

  return res.status(200).json(parsedData)
}
