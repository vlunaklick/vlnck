interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <h2 className="font-bold text-lg">{children}</h2>
}

export default Title
