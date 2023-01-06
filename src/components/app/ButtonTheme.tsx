import { BsSun, BsMoon } from 'react-icons/bs'

import { useThemes } from '../../hooks/useThemes'

const ButtonTheme = () => {
  const { theme, toggleTheme } = useThemes()

  return (
    <button
      className={
        'relative flex items-center justify-center overflow-hidden rounded border bg-slate-50 p-3 text-xs text-slate-800 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-200'
      }
      onClick={toggleTheme}
    >
      <div
        className={
          'absolute transition-transform duration-300' +
          ' ' +
          (theme === 'dark' ? 'translate-y-0' : '-translate-y-6')
        }
      >
        <BsMoon />
      </div>
      <div
        className={
          'absolute transition-transform duration-300 ' +
          ' ' +
          (theme === 'light' ? 'translate-y-0' : 'translate-y-6')
        }
      >
        <BsSun />
      </div>
    </button>
  )
}

export default ButtonTheme