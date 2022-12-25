import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const HeadLayout = ({ children }: Props) => {
  return (
    <div className="dark:bg-slate-900 bg-slate-50 w-full transition-colors">
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/seo/favicon.ico" />
        <link rel="apple-touch-icon" href="/seo/logo192.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {children}
    </div>
  )
}

export default HeadLayout
