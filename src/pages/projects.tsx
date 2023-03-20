import type { NextPage } from 'next'

import PageLayout from 'src/components/layouts/PageLayout'
import Seo from 'src/components/app/Seo'
import Title from 'src/components/app/Title'
import SectionProject from 'src/components/sites/projects/SectionProject'

import { SEO_PROJECTS } from '../../content/seo'

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
