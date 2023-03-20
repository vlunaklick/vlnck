interface Props {
  children: React.ReactNode
}

const ParagraphMd = ({ children }: Props) => {
  return <p className="mb-8 text-base leading-7 text-slate-700 dark:text-slate-200">{children}</p>
}

export default ParagraphMd
