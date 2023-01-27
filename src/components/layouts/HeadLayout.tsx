import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const HeadLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Valentín Lunaklick</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="" href="/favicon/logo192.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>

      {children}
    </>
  )
}

export default HeadLayout
