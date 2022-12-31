interface Props {
  children?: React.ReactNode
}

const AlertMd = ({ children }: Props) => {
  return (
    <div className="mb-8 p-5 bg-emerald-100 text-emerald-800 rounded-md text-sm">
      {children}
    </div>
  )
}

export default AlertMd
