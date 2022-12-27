import type { NextPage } from 'next'

import BodyLayout from '../components/layouts/BodyLayout'
import WorksSection from '../components/sites/works/WorksSection'

const Projects: NextPage = () => {
  return (
    <BodyLayout>
      <WorksSection />
    </BodyLayout>
  )
}

export default Projects
