import { AppProps } from 'next/app'
import '../styles/index.css'
import Menu from '../components/menu'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
