import type { NextPage } from 'next'

import MainLayout from '../components/Layouts/MainLayout'
import ExpSection from '../components/Experience/ExpSection'

const Exp: NextPage = () => {
  return (
    <MainLayout>
      <ExpSection />
    </MainLayout>
  )
}

export default Exp
