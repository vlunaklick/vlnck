import { useState, useEffect } from 'react'

import UpArrow from 'src/components/icons/UpArrow'

export default function ButtonTop() {
  const [isView, setIsView] = useState(false)

  const handleClickToTop = () => {
    if (!isView) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsView(true)
      } else {
        setIsView(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <button
      className={
        'fixed bottom-4 right-4 flex items-center	justify-center rounded-full border bg-slate-50 text-2xl font-bold transition-opacity duration-300 dark:border-slate-500 dark:bg-slate-900 ' +
        (isView ? 'opacity-100' : 'opacity-0')
      }
      onClick={handleClickToTop}
    >
      <UpArrow className={'h-9 fill-slate-800 dark:fill-slate-200'} />
    </button>
  )
}
