import type { NextPage } from 'next'

import MainLayout from '../components/Layouts/MainLayout'
import WorksSection from '../components/WorksPage/WorksSection'

const Works: NextPage = () => {
  return (
    <MainLayout>
      <WorksSection />
    </MainLayout>
  )
}

export default Works
