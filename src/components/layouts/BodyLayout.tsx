import Footer from '../app/Footer'
import Header from '../app/Header'
import HeadLayout from './HeadLayout'

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
