import Head from 'next/head'

import type { NextPage } from 'next'

import { EXPERIENCE, EDUCATION } from '../../content/info/experience'

import BodyLayout from '../components/layouts/BodyLayout'
import MainLayout from '../components/layouts/MainLayout'
import Title from '../components/app/Title'
import SectionExp from '../components/sites/experience/SectionExp'

const Exp: NextPage = () => {
  return (
    <BodyLayout>
      <Head>
        <title>{'Valentín Lunaklick — Experience'}</title>
        <meta name="description" content="Valentín Lunaklick's experience" />
        <meta property="og:title" content={'Valentín Lunaklick — Experience'} />
        <meta
          property="og:description"
          content={"Valentín Lunaklick's experience"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://vlnck.tech/api/og?title=Valentín Lunaklick — Experience`}
        />
      </Head>
      <MainLayout>
        <Title>Experience</Title>
        <SectionExp info={EXPERIENCE} />
        <Title>Education</Title>
        <SectionExp info={EDUCATION} />
      </MainLayout>
    </BodyLayout>
  )
}

export default Exp
