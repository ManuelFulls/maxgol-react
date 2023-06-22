import Landing from '../components/Landing'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>    
    <Landing></Landing>
    <Component {...pageProps}/>
    </>

  )
}
