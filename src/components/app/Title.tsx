interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <h2 className="mb-3 text-xl font-bold text-slate-800 dark:text-slate-50">
      {children}
    </h2>
  )
}

export default Title
