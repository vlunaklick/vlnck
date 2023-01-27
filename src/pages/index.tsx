import type { NextPage } from 'next'

import { SEO_HOME } from '../../content/seo'

import PageLayout from 'src/components/layouts/PageLayout'
import DescriptionHome from 'src/components/sites/home/DescriptionHome'
import ContactHome from 'src/components/sites/home/ContactHome'
import Title from 'src/components/app/Title'
import Seo from 'src/components/app/Seo'

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
