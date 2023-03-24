import type { NextPage } from 'next'

import PageLayout from 'src/components/layouts/PageLayout'
import Title from '@/src/components/ui/Title'
import SectionExp from '@/src/components/ui/SectionExp'
import Seo from '@/src/components/ui/Seo'
import { SEO_EXPERIENCE } from '@/src/constants/seo'
import { EXPERIENCE, EDUCATION } from '@/src/constants/experience'

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
