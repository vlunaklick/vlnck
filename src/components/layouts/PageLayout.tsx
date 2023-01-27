import Footer from '../app/Footer'
import Header from '../app/Header'

interface Props {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col gap-4 px-4">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
