import type { NextPage } from 'next'

import MainLayout from '../components/Layouts/MainLayout'
import WorksSection from '../components/Works/WorksSection'

const Works: NextPage = () => {
  return (
    <MainLayout>
      <WorksSection />
    </MainLayout>
  )
}

export default Works
