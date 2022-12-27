import type { NextPage } from 'next'

import { EXPERIENCE, EDUCATION } from '../../content/info/experience'

import BodyLayout from '../components/layouts/BodyLayout'
import MainLayout from '../components/layouts/MainLayout'
import Title from '../components/app/Title'
import ExpSection from '../components/sites/experience/ExpSection'

const Exp: NextPage = () => {
  return (
    <BodyLayout>
      <MainLayout>
        <Title>Experience</Title>
        <ExpSection info={EXPERIENCE} />
        <Title>Education</Title>
        <ExpSection info={EDUCATION} />
      </MainLayout>
    </BodyLayout>
  )
}

export default Exp
