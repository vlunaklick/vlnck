import Header from '../app/Header'
import Nav from '../app/Nav'
import Footer from '../app/Footer'
import ButtonTheme from '../ButtonTheme'
import HeadLayout from './HeadLayout'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <HeadLayout>
      <main className="w-[360px] sm:w-[640px] mx-auto p-0 py-5 sm:p-5 flex flex-col justify-between min-h-screen gap-7 container">
        <div className="gap-7 flex flex-col relative">
          <Nav />
          <Header />
          <ButtonTheme />
          {children}
        </div>
        <Footer />
      </main>
    </HeadLayout>
  )
}

export default MainLayout
