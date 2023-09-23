interface SpotifySong {
  id: string
  name: string
  album: {
    name: string
    images: {
      url: string
    }[]
  }
  artists: {
    name: string
  }[]
  external_urls: {
    spotify: string
  }
  duration_ms: number
  preview_url: string | null // A URL to a 30-second preview of the song, may be null
  release_date: string // Release date of the song
  popularity: number // Popularity score of the song
  // Add more properties as needed based on your specific requirements
}
interface Track {
  is_playing: string
  progress_ms: string
  item: {
    id: string
    name: string
    artists: {
      name: string
    }[]

    album: {
      name: string
      images: {
        url: string
      }[]
    }
    external_urls: {
      spotify: string
    }
    duration_ms: number
  }
}

const normalizeCurrentlyListening = ({
  is_playing,
  progress_ms,
  item
}: Track) => ({
  id: item.id,
  isPlaying: is_playing,
  title: item.name,
  artist: item.artists?.map(({ name }) => name).join(', '),
  album: item.album?.name,
  thumbnail: item.album?.images[0]?.url,
  url: item.external_urls?.spotify,
  progress: progress_ms,
  duration: item.duration_ms
})

interface Song {
  name: string
  album: {
    name: string
    images: {
      url: string
    }[]
  }
  artists: {
    name: string
  }[]
  external_urls: {
    spotify: string
  }
}

const normalizeTop5 = (entry: SpotifySong) => ({
  title: entry.name,
  album: entry.album?.name,
  artist: entry.artists?.map(({ name }) => name).join(', '),
  url: entry.external_urls?.spotify,
  thumbnail: entry.album?.images[0]?.url
})

export { normalizeCurrentlyListening, normalizeTop5 }
