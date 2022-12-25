import { BsSun, BsMoon } from 'react-icons/bs'

import { useThemes } from '../hooks/useThemes'

const ButtonTheme = () => {
  const { theme, toggleTheme } = useThemes()

  return (
    <div className="absolute right-4 bottom-4 w-8">
      <button
        className={
          'fixed border text-xs bottom-4 ml-8 dark:border-slate-500 p-2 dark:bg-slate-900 bg-slate-50 rounded text-slate-800 dark:text-slate-200'
        }
        onClick={toggleTheme}
      >
        {theme === 'light' ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  )
}

export default ButtonTheme
