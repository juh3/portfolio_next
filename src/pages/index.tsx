import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Work from '@/components/Work/Work'
import Music from '@/components/Music/Music'
import RootModal from '@/components/Modal/RootModal'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { ParsedSong } from '../types/songs'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [topFive, setTopFive] = useState<ParsedSong[] | string>('')
  const apiUrl = '/api/spotify'

  useEffect(() => {
    async function fetcher() {
      const response = await axios.get(`${apiUrl}/top5Songs`)
      if (response.status === 200) {
        setTopFive(response.data)
      }
    }
    fetcher()
  }, [])

  return (
    <>
      <Head>
        <title>Juha`s portfolio</title>
        <meta name="description" content="Juha's portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Header />
        <About />
        <RootModal />
        <Work />
        {typeof topFive !== 'string' && <Music topFive={topFive} />}
        {/* <Gallery /> */}
        {/* <Footer /> */}
      </main>
    </>
  )
}
