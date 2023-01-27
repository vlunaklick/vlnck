import type { NextPage } from 'next'

import { SEO_PROJECTS } from '../../content/seo'

import PageLayout from '../components/layouts/PageLayout'
import Seo from '../components/app/Seo'
import Title from '../components/app/Title'
import SectionProject from '../components/sites/projects/SectionProject'

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
