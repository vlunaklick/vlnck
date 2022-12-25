import type { NextPage } from 'next'

import MainLayout from '../components/Layouts/MainLayout'
import ExpSection from '../components/ExperiencePage/ExpSection'

const Exp: NextPage = () => {
  return (
    <MainLayout>
      <ExpSection />
    </MainLayout>
  )
}

export default Exp
