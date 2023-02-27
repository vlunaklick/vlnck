interface Props {
  children: string[]
  href: string
}

const AnchorMd = (props: Props) => {
  const first =
    props.children[0].charAt(0).toUpperCase() + props.children[0].slice(1)

  return (
    <a
      href={props.href}
      className={'font-medium underline hover:text-blue-500'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={first}
    >
      {props.children[0]}
    </a>
  )
}

export default AnchorMd
