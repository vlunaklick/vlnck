import Link from 'next/link'

interface Props {
  name: string
  href: string
  asPath: string
  aria?: string
}

const NavLinks = ({ name, href, asPath, aria }: Props) => {
  return (
    <Link href={href}>
      <a
        className={`text-xs sm:text-sm text-center capitalize text-gray-800 dark:text-slate-400 border-transparent ${
          asPath === href
            ? 'border-current'
            : 'hover:border-current transition-colors'
        } border-b relative group`}
        rel="noopener noreferrer"
        aria-label={aria}
      >
        {name}
      </a>
    </Link>
  )
}

export default NavLinks
