interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <h2>{children}</h2>
}

export default Title
