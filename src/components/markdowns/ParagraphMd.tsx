interface Props {
  children: React.ReactNode
}

const ParagraphMd = ({ children }: Props) => {
  return <p className="leading-loose text-xs">{children}</p>
}

export default ParagraphMd
