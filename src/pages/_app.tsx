import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valentín Lunaklick</title>
        <link href="/favicon/favicon.ico" rel="icon" />
        <link href="/favicon/logo192.png" rel="apple-touch-icon" sizes="" />
        <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <meta content="https://vlnck.tech/" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="en_US" property="og:locale" />
        <meta content="vlnck.tech" property="og:site_name" />
      </Head>

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
