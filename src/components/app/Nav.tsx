/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Link from 'next/link'

import NavLinks from './NavLinks'
import ButtonTheme from './ButtonTheme'

const Nav = () => {
  const { asPath } = useRouter()

  return (
    <div className="flex w-full items-center p-4 justify-between">
      <Link href={'/'}>
        <a className="flex items-center gap-2">
          <picture>
            <img
              src={'/images' + '/icon-me.png'}
              alt="My emoji"
              className="rounded-full w-10 cursor-pointer"
            />
          </picture>
          <h1 className={'font-bold text-3xl'}>Vlnck</h1>
        </a>
      </Link>
      <nav className="flex justify-around items-center gap-3">
        <NavLinks
          href={'/'}
          name={'Home'}
          asPath={asPath}
          aria={'Link to home'}
        />

        <NavLinks
          href={'/exp'}
          name={'Experience'}
          asPath={asPath}
          aria={'Link to experience'}
        />

        <NavLinks
          href={'/blog'}
          name={'Blog'}
          asPath={asPath}
          aria={'Link to blog'}
        />

        <NavLinks
          href={'/projects'}
          name={'Projects'}
          asPath={asPath}
          aria={'Link to projects'}
        />
        <ButtonTheme />
      </nav>
    </div>
  )
}

export default Nav
