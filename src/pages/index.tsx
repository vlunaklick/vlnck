import type { NextPage } from 'next'

import MainLayout from '../components/Layouts/MainLayout'
import HomeInfo from '../components/HomePage/HomeInfo'
import Contact from '../components/HomePage/Contact'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeInfo />
      <Contact />
    </MainLayout>
  )
}

export default Home
