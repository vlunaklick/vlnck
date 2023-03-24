import Footer from '@/src/components/ui/Footer'
import Header from '@/src/components/ui/Header'

interface Props {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4">{children}</main>

      <Footer />
    </>
  )
}

export default PageLayout
