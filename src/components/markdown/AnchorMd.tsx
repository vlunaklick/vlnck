interface Props {
  children: string[]
  href: string
}

const AnchorMd = (props: Props) => {
  const first = props.children[0].charAt(0).toUpperCase() + props.children[0].slice(1)

  return (
    <a
      aria-label={first}
      className={'font-medium underline hover:text-blue-500'}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children[0]}
    </a>
  )
}

export default AnchorMd
