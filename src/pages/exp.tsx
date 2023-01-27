import type { NextPage } from 'next'

import { EXPERIENCE, EDUCATION } from '../../content/info/experience'
import { SEO_EXPERIENCE } from '../../content/seo'

import PageLayout from '../components/layouts/PageLayout'
import Title from '../components/app/Title'
import SectionExp from '../components/sites/experience/SectionExp'
import Seo from '../components/app/Seo'

const Exp: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_EXPERIENCE} />

      <Title>Experience</Title>

      <SectionExp info={EXPERIENCE} />

      <Title>Education</Title>

      <SectionExp info={EDUCATION} />
    </PageLayout>
  )
}

export default Exp
