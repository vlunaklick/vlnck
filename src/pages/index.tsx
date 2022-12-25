import type { NextPage } from 'next'

import MainLayout from '../components/Layouts/MainLayout'
import HomeInfo from '../components/Home/HomeInfo'
import Contact from '../components/Home/Contact'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeInfo />
      <Contact />
    </MainLayout>
  )
}

export default Home
