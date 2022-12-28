interface Props {
  children: string[]
  href: string
}

const AnchorMd = (props: Props) => {
  return (
    <a
      href={props.href}
      className={'hover:text-blue-600 transition-colors font-medium underline'}
    >
      {props.children[0]}
    </a>
  )
}

export default AnchorMd
