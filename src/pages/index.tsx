import type { NextPage } from 'next'

import PageLayout from '@/src/components/layouts/PageLayout'
import ContactHome from '@/src/components/ui/ContactHome'
import Title from '@/src/components/ui/Title'
import Seo from '@/src/components/ui/Seo'
import DescriptionHome from '@/src//components/ui/DescriptionHome'
import { SEO_HOME } from '@/src/constants/seo'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Seo {...SEO_HOME} />

      <section>
        <Title>Welcome! 👋</Title>

        <DescriptionHome />
      </section>

      <ContactHome />
    </PageLayout>
  )
}

export default Home
