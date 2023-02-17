import { useMounted } from 'src/hooks/useMounted'
import { useThemes } from 'src/hooks/useThemes'

import Sun from 'src/components/icons/Sun'
import Moon from 'src/components/icons/Moon'

const ButtonTheme = () => {
  const { theme, toggleTheme } = useThemes()
  const { mounted } = useMounted()

  return (
    <button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={
        'relative flex items-center justify-center overflow-hidden rounded border bg-slate-50 p-3 text-xs dark:border-slate-500 dark:bg-slate-900'
      }
      onClick={toggleTheme}
    >
      {mounted && (
        <>
          <div
            className={
              'absolute translate-y-0 transition-transform duration-300 ' +
              (theme === 'light' && '-translate-y-6')
            }
          >
            <Moon className={'fill-slate-200'} />
          </div>
          <div
            className={
              'absolute translate-y-0 transition-transform duration-300 ' +
              (theme === 'dark' && 'translate-y-6')
            }
          >
            <Sun className={'fill-slate-800'} />
          </div>
        </>
      )}
    </button>
  )
}

export default ButtonTheme
