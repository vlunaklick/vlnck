import { useMounted } from 'src/hooks/useMounted'
import { useThemes } from 'src/hooks/useThemes'
import Sun from 'src/components/icons/Sun'
import Moon from 'src/components/icons/Moon'

const ButtonTheme = () => {
  const { theme, systemTheme, toggleTheme } = useThemes()
  const { mounted } = useMounted()

  if (!mounted) {
    return (
      <button
        className={
          'relative flex items-center justify-center overflow-hidden rounded border bg-slate-50 p-3 text-xs dark:border-slate-500 dark:bg-slate-900'
        }
      />
    )
  }

  const themeToUse = theme === 'system' ? systemTheme : theme

  const textLabel = `Switch to ${themeToUse === 'dark' ? 'light' : 'dark'} mode`
  const themeIsDark = themeToUse === 'dark'

  return (
    <button
      aria-label={textLabel}
      className={
        'relative flex items-center justify-center overflow-hidden rounded border bg-slate-50 p-3 text-xs dark:border-slate-500 dark:bg-slate-900'
      }
      title={textLabel}
      onClick={toggleTheme}
    >
      {mounted && (
        <>
          <div
            className={
              'absolute translate-y-0 transition-transform duration-300 ' +
              (!themeIsDark && '-translate-y-6')
            }
          >
            <Moon className={'mx-auto h-2/4 w-2/4 fill-slate-200'} />
          </div>
          <div
            className={
              'absolute translate-y-0 transition-transform duration-300 ' +
              (themeIsDark && 'translate-y-6')
            }
          >
            <Sun className={'mx-auto h-2/4 w-2/4 fill-slate-800'} />
          </div>
        </>
      )}
    </button>
  )
}

export default ButtonTheme
