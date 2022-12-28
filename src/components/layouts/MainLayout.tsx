interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="px-4 flex flex-col gap-4 max-w-2xl mx-auto">
      {children}
    </main>
  )
}

export default MainLayout
