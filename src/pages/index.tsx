import type { NextPage } from 'next'

import { SEO_HOME } from '../../content/seo'

import PageLayout from '../components/layouts/PageLayout'
import DescriptionHome from '../components/sites/home/DescriptionHome'
import ContactHome from '../components/sites/home/ContactHome'
import Title from '../components/app/Title'
import Seo from '../components/app/Seo'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_HOME} />

      <Title>Welcome! 👋</Title>

      <DescriptionHome />

      <ContactHome />
    </PageLayout>
  )
}

export default Home
