/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Link from 'next/link'

import NavLinks from './NavLinks'
import ButtonTheme from './ButtonTheme'

const Nav = () => {
  const { asPath } = useRouter()

  return (
    <div className="max-w-2xl mx-auto flex w-full items-center p-4 justify-between">
      <Link href={'/'}>
        <a className="flex items-center gap-2 hover:scale-105 transition-transform">
          <picture>
            <img
              src={'/images' + '/icon-me.png'}
              alt="My emoji"
              className="rounded-full w-10 cursor-pointer"
            />
          </picture>
          <h1 className={'font-bold text-xl sm:text-3xl hidden sm:block'}>
            Vlnck
          </h1>
        </a>
      </Link>
      <nav className="flex justify-around items-center gap-3">
        {linksNav.map(link => (
          <NavLinks key={link.name} {...link} asPath={asPath} />
        ))}
        <ButtonTheme />
      </nav>
    </div>
  )
}

export default Nav

const linksNav = [
  {
    href: '/',
    name: 'Home',
    aria: 'Link to home',
  },
  {
    href: '/exp',
    name: 'Experience',
    aria: 'Link to experience',
  },
  {
    href: '/projects',
    name: 'Projects',
    aria: 'Link to projects',
  },
  {
    href: '/blog',
    name: 'Blog',
    aria: 'Link to blog',
  },
]
