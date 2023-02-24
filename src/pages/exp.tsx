import type { NextPage } from 'next'

import { EXPERIENCE, EDUCATION } from '../../content/info/experience'
import { SEO_EXPERIENCE } from '../../content/seo'

import PageLayout from 'src/components/layouts/PageLayout'
import Title from 'src/components/app/Title'
import SectionExp from 'src/components/sites/experience/SectionExp'
import Seo from 'src/components/app/Seo'

const Exp: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_EXPERIENCE} />

      <section>
        <Title>Experience</Title>

        <SectionExp info={EXPERIENCE} />
      </section>

      <section>
        <Title>Education</Title>

        <SectionExp info={EDUCATION} />
      </section>
    </PageLayout>
  )
}

export default Exp
