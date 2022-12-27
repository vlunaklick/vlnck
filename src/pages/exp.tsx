import type { NextPage } from 'next'

import { EXPERIENCE, EDUCATION } from '../../content/info/experience'

import BodyLayout from '../components/layouts/BodyLayout'
import MainLayout from '../components/layouts/MainLayout'
import Title from '../components/app/Title'
import SectionExp from '../components/sites/experience/SectionExp'

const Exp: NextPage = () => {
  return (
    <BodyLayout>
      <MainLayout>
        <Title>Experience</Title>
        <SectionExp info={EXPERIENCE} />
        <Title>Education</Title>
        <SectionExp info={EDUCATION} />
      </MainLayout>
    </BodyLayout>
  )
}

export default Exp
