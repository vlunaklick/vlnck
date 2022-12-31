/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Link from 'next/link'

import NavLinks from './NavLinks'
import ButtonTheme from './ButtonTheme'

const Nav = () => {
  const { asPath } = useRouter()

  return (
    <div className="mx-auto flex w-full max-w-2xl items-center justify-between p-4">
      <Link href={'/'}>
        <a className="flex items-center gap-2 transition-transform hover:scale-105">
          <picture>
            <img
              src={'/images' + '/icon-me.png'}
              alt="My emoji"
              className="w-10 cursor-pointer rounded-full"
            />
          </picture>
          <h1 className={'hidden text-xl font-bold sm:block sm:text-3xl'}>
            Vlnck
          </h1>
        </a>
      </Link>
      <nav className="flex items-center justify-around gap-3">
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
