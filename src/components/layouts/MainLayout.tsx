import Header from '../app/Header'
import Nav from '../app/Nav'
import Footer from '../app/Footer'
import HeadLayout from './HeadLayout'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <HeadLayout>
      <main className="sm:max-w-[640px] w-full mx-auto flex flex-col justify-between min-h-screen gap-7 container">
        <div className="gap-7 flex flex-col">
          <Nav />
          {children}
        </div>
        <Footer />
      </main>
    </HeadLayout>
  )
}

export default MainLayout
