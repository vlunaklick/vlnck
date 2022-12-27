import type { NextPage } from 'next'

import MainLayout from '../components/layouts/MainLayout'
import WorksSection from '../components/sites/works/WorksSection'

const Projects: NextPage = () => {
  return (
    <MainLayout>
      <WorksSection />
    </MainLayout>
  )
}

export default Projects
