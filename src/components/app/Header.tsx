import { useId, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import Menu from '@/src/components/icons/Menu'
import Cross from '@/src/components/icons/Cross'
import Nav from './Nav'

const Header = () => {
  const checkboxId = useId()

  useEffect(() => {
    hideOverFlow(false)
    const checkbox = document.getElementById(checkboxId) as HTMLInputElement
    const mediaQuery = window.matchMedia('(min-width: 640px)')

    if (mediaQuery) {
      mediaQuery.addEventListener('change', e => {
        if (e.matches) {
          hideOverFlow(false)
          checkbox.checked = false
        }
      })

      return () => {
        mediaQuery.removeEventListener('change', e => {
          if (e.matches) {
            hideOverFlow(false)
            checkbox.checked = false
          }
        })
      }
    }
  }, [checkboxId])

  const hideOverFlow = (value: boolean) => {
    if (value) {
      window.scrollTo(0, 0)
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  const handleClick = (e: any) => {
    const target = e.target as HTMLInputElement

    hideOverFlow(target.checked)
  }

  return (
    <header className="mx-auto mb-7 flex w-full max-w-2xl items-center justify-between p-4">
      <Link
        href={'/'}
        className="flex items-center gap-2 transition-transform hover:scale-105"
      >
        <picture className="flex items-center justify-center">
          <Image
            src={'/images' + '/icon-me.png'}
            alt="My emoji"
            className="cursor-pointer rounded-full"
            width={40}
            height={40}
          />
        </picture>

        <h1 className={'text-xl font-bold sm:block sm:text-3xl'}>Vlnck</h1>
      </Link>

      <input
        type="checkbox"
        id={checkboxId}
        className="peer"
        hidden
        onClick={handleClick}
      />
      <label
        htmlFor={checkboxId}
        className="z-10 w-9 cursor-pointer fill-slate-900 dark:fill-white sm:hidden peer-checked:[&>.open]:hidden peer-checked:[&>.close]:block"
      >
        <Menu className="open" />
        <Cross className="close hidden stroke-white stroke-2" />
      </label>

      <Nav />
    </header>
  )
}

export default Header
