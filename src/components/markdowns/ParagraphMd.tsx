interface Props {
  children: React.ReactNode
}

const ParagraphMd = ({ children }: Props) => {
  return (
    <p className="text-base dark:text-slate-200 text-slate-700 mb-8 leading-7">
      {children}
    </p>
  )
}

export default ParagraphMd
