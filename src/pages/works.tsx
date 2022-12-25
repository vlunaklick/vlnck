import type { NextPage } from 'next'

import MainLayout from '../components/layouts/MainLayout'
import WorksSection from '../components/sites/works/WorksSection'

const Works: NextPage = () => {
  return (
    <MainLayout>
      <WorksSection />
    </MainLayout>
  )
}

export default Works
