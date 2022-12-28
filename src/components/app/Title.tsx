interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <h2 className="font-bold text-lg text-slate-900 dark:text-slate-50">
      {children}
    </h2>
  )
}

export default Title
