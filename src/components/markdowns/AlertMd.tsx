const Variants = {
  emerald: 'bg-emerald-100 text-emerald-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  blue: 'bg-blue-100 text-blue-800',
  gray: 'bg-gray-100 text-gray-800',
  purple: 'bg-purple-100 text-purple-800',
  orange: 'bg-orange-100 text-orange-800',
  pink: 'bg-pink-100 text-pink-800',
}

interface Props {
  children?: React.ReactNode
  variant?: keyof typeof Variants
}

const AlertMd = ({ children, variant = 'gray' }: Props) => {
  return (
    <div className={'mb-8 p-5 rounded-md text-sm' + ' ' + Variants[variant]}>
      {children}
    </div>
  )
}

export default AlertMd
