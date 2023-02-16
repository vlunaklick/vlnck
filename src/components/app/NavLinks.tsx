import Link from 'next/link'

interface Props {
  name: string
  href: string
  asPath: string
  aria?: string
}

const NavLinks = ({ name, href, asPath, aria }: Props) => {
  return (
    <Link
      href={href}
      className={`border-transparent text-center text-xs capitalize text-slate-800 dark:text-slate-400 sm:text-sm ${
        asPath === href
          ? 'border-current'
          : 'transition-colors hover:border-current'
      } group relative border-b`}
      rel="noopener noreferrer"
      aria-label={aria}
    >
      {name}
    </Link>
  )
}

export default NavLinks
