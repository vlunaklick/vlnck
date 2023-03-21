import type { NextPage } from 'next'

import PageLayout from 'src/components/layouts/PageLayout'
import Title from '@/src/components/ui/Title'
import SectionExp from 'src/components/sites/experience/SectionExp'
import Seo from '@/src/components/ui/Seo'

import { SEO_EXPERIENCE } from '../../content/seo'
import { EXPERIENCE, EDUCATION } from '../../content/info/experience'

const Exp: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_EXPERIENCE} />

      <section>
        <Title>Experience</Title>

        <SectionExp info={EXPERIENCE} />
      </section>

      <section className="mt-4">
        <Title>Education</Title>

        <SectionExp info={EDUCATION} />
      </section>
    </PageLayout>
  )
}

export default Exp
