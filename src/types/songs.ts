export interface Song {
  name: string
  id?: string
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

export interface Track {
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

export interface ParsedSong {
  title?: string
  id?: string
  isPlaying?: boolean
  album?: string
  artist?: string
  spotify?: string
  url: string
  thumbnail?: string
  progress?: string
  duration?: string
}
export interface SpotifySong {
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
