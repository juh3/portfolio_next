import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: 'orange'
      }}
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
