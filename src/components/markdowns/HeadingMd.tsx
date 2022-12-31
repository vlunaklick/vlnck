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
    return <h1 className="mb-6 mt-12 text-4xl font-semibold">{children}</h1>
  } else if (level === 2) {
    return <h2 className="mb-6 mt-12 text-2xl font-semibold">{children}</h2>
  }
  return <h3 className="mt-6 mb-12 text-xl font-semibold">{children}</h3>
}

export default HeadingMd
