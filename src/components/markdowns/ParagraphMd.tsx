interface Props {
  children: React.ReactNode
}

const ParagraphMd = ({ children }: Props) => {
  return (
    <p className="text-base dark:text-slate-100 text-slate-800 mb-8">
      {children}
    </p>
  )
}

export default ParagraphMd
