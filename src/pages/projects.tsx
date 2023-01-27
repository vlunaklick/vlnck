import Head from 'next/head'

import type { NextPage } from 'next'

import BodyLayout from '../components/layouts/BodyLayout'
import MainLayout from '../components/layouts/MainLayout'
import Title from '../components/app/Title'
import SectionProject from '../components/sites/projects/SectionProject'

const Projects: NextPage = () => {
  return (
    <BodyLayout>
      <Head>
        <title>{'Valentín Lunaklick — Projects'}</title>
        <meta name="description" content="Valentín Lunaklick's projects" />
        <meta property="og:title" content={'Valentín Lunaklick — Projects'} />
        <meta
          property="og:description"
          content={"Valentín Lunaklick's projects"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://vlnck.tech/api/og?title=Valentín Lunaklick — Projects`}
        />
      </Head>
      <MainLayout>
        <Title>Projects</Title>
        <SectionProject />
      </MainLayout>
    </BodyLayout>
  )
}

export default Projects
