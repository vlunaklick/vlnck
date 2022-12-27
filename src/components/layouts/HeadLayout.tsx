import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const HeadLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/logo192.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {children}
    </>
  )
}

export default HeadLayout
