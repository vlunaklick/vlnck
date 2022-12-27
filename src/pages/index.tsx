import type { NextPage } from 'next'

import BodyLayout from '../components/layouts/BodyLayout'
import DescriptionHome from '../components/sites/home/DescriptionHome'
import Contact from '../components/sites/home/Contact'
import Title from '../components/app/Title'
import MainLayout from '../components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <MainLayout>
        <Title>Welcome! 👋</Title>
        <DescriptionHome />
        <Contact />
      </MainLayout>
    </BodyLayout>
  )
}

export default Home
