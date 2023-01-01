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
      </Head>
      <MainLayout>
        <Title>Projects</Title>
        <SectionProject />
      </MainLayout>
    </BodyLayout>
  )
}

export default Projects
