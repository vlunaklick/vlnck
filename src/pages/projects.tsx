import type { NextPage } from 'next'

import { SEO_PROJECTS } from '../../content/seo'

import PageLayout from 'src/components/layouts/PageLayout'
import Seo from 'src/components/app/Seo'
import Title from 'src/components/app/Title'
import SectionProject from 'src/components/sites/projects/SectionProject'

const Projects: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_PROJECTS} />

      <Title>Projects</Title>

      <SectionProject />
    </PageLayout>
  )
}

export default Projects
