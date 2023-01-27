import type { NextPage } from 'next'

import BodyLayout from '../components/layouts/BodyLayout'
import DescriptionHome from '../components/sites/home/DescriptionHome'
import ContactHome from '../components/sites/home/ContactHome'
import Title from '../components/app/Title'
import MainLayout from '../components/layouts/MainLayout'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <Head>
        <meta name="description" content="Vlnck developer" />
        <meta name="application-name" content="Valentín Lunaklick" />
        <meta name="apple-mobile-web-app-title" content="Valentín Lunaklick" />
        <meta name="manifest" content="/seo/manifest.json" />
        <meta name="theme-color" content="#50C878" />
        <meta name="description" content="Valentín Lunaklick's web" />
        <meta property="og:title" content={'Valentín Lunaklick — web'} />
        <meta property="og:description" content={"Valentín Lunaklick's web"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://vlnck.tech/api/og?title=Valentín Lunaklick — web`}
        />
      </Head>
      <MainLayout>
        <Title>Welcome! 👋</Title>
        <DescriptionHome />
        <ContactHome />
      </MainLayout>
    </BodyLayout>
  )
}

export default Home
