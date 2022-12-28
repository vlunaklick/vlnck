interface Props {
  level: number
  children: any
}

const headingClasses = {
  1: 'text-4xl',
  2: 'text-2xl',
}

const HeadingMd = ({ level, children }: Props) => {
  if (level === 1) {
    return <h1 className="text-4xl font-semibold mb-6 mt-12">{children}</h1>
  } else if (level === 2) {
    return <h2 className="text-2xl font-semibold mb-6 mt-12">{children}</h2>
  }
  return <h3 className="text-xl font-semibold mt-6 mb-12">{children}</h3>
}

export default HeadingMd
