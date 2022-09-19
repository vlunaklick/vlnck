import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div className='dark:bg-slate-900 w-full min-h-screen'>
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="max-w-[640px] mx-auto w-full p-5">
        <Nav />
      </main>

    </div>
  )
}

export default Home
