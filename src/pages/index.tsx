import type { NextPage } from 'next'

import MainLayout from '../components/layouts/MainLayout'
import DescriptionHome from '../components/sites/home/DescriptionHome'
import Contact from '../components/sites/home/Contact'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <DescriptionHome />
      <Contact />
    </MainLayout>
  )
}

export default Home
