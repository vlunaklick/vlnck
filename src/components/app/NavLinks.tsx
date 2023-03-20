import Link from 'next/link'

interface Props {
  name: string
  href: string
  asPath: string
  aria?: string
}

const NavLinks = ({ name, href, asPath, aria }: Props) => {
  return (
    <li className="text-center">
      <Link
        aria-label={aria}
        className={`border-transparent text-center text-lg font-bold capitalize text-white sm:text-[15px] sm:font-normal sm:text-slate-800 sm:dark:text-slate-400 ${
          asPath === href ? 'border-current' : 'hover:border-current'
        } group relative border-b`}
        href={href}
        rel="noopener noreferrer"
      >
        {name}
      </Link>
    </li>
  )
}

export default NavLinks
