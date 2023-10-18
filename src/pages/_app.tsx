import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        width: '100vw',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
