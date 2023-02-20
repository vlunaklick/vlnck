import { useRouter } from 'next/router'

import NavLinks from './NavLinks'
import ButtonTheme from './ButtonTheme'

const Nav = () => {
  const { asPath } = useRouter()

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 hidden h-screen w-full flex-col items-center justify-center gap-3 bg-black/70 p-6 peer-checked:flex sm:static sm:flex sm:h-fit sm:w-min sm:flex-row sm:items-start sm:justify-around sm:gap-3 sm:bg-inherit sm:p-0">
        <ul className="flex flex-col gap-3 sm:flex-row">
          {linksNav.map(link => (
            <NavLinks key={link.name} {...link} asPath={asPath} />
          ))}
        </ul>
        <ButtonTheme />
      </nav>
    </>
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
