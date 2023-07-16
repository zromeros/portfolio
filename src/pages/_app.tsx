import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import { NAME } from '@assets/texts'

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
        <title>{NAME}</title>
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
