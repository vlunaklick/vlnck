import { BsSun, BsMoon } from 'react-icons/bs'

import { useThemes } from '../../hooks/useThemes'

const ButtonTheme = () => {
  const { theme, toggleTheme } = useThemes()

  return (
    <button
      className={
        'rounded border bg-slate-50 p-2 text-xs text-slate-800 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-200'
      }
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ButtonTheme
