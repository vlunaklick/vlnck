import type { NextPage } from 'next'

import MainLayout from '../components/layouts/MainLayout'
import ExpSection from '../components/sites/experience/ExpSection'

const Exp: NextPage = () => {
  return (
    <MainLayout>
      <ExpSection />
    </MainLayout>
  )
}

export default Exp
