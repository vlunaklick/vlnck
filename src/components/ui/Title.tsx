interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <h2 className="mb-3 text-xl font-bold text-green-400">{children}</h2>
}

export default Title
