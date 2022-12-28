import type { NextPage } from 'next'

import BodyLayout from '../components/layouts/BodyLayout'
import DescriptionHome from '../components/sites/home/DescriptionHome'
import ContactHome from '../components/sites/home/ContactHome'
import Title from '../components/app/Title'
import MainLayout from '../components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <MainLayout>
        <Title>Welcome! 👋</Title>
        <DescriptionHome />
        <ContactHome />
      </MainLayout>
    </BodyLayout>
  )
}

export default Home
