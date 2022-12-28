import { BsSun, BsMoon } from 'react-icons/bs'

import { useThemes } from '../../hooks/useThemes'

const ButtonTheme = () => {
  const { theme, toggleTheme } = useThemes()

  return (
    <button
      className={
        'border text-xs dark:border-slate-500 p-2 dark:bg-slate-900 bg-slate-50 rounded text-slate-800 dark:text-slate-200'
      }
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ButtonTheme
