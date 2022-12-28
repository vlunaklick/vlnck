import HeadLayout from './HeadLayout'
import Footer from '../app/Footer'
import Header from '../app/Header'

interface Props {
  children: React.ReactNode
}

const BodyLayout = ({ children }: Props) => {
  return (
    <HeadLayout>
      <Header />
      {children}
      <Footer />
    </HeadLayout>
  )
}

export default BodyLayout
