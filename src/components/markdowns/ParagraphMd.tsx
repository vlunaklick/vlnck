interface Props {
  children: React.ReactNode
}

const ParagraphMd = ({ children }: Props) => {
  return (
    <p className="text-xs sm:text-base dark:text-slate-100 text-slate-800">
      {children}
    </p>
  )
}

export default ParagraphMd
