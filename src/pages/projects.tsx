import type { NextPage } from 'next'

import PageLayout from '@/src/components/layouts/PageLayout'
import Seo from '@/src/components/ui/Seo'
import Title from '@/src/components/ui/Title'
import SectionProject from '@/src/components/ui/SectionProject'
import { SEO_PROJECTS } from '@/src/constants/seo'

const Projects: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_PROJECTS} />

      <section>
        <Title>Projects</Title>

        <SectionProject />
      </section>
    </PageLayout>
  )
}

export default Projects
