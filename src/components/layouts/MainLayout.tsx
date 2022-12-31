interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-4 px-4">
      {children}
    </main>
  )
}

export default MainLayout
