import { useTheme } from 'next-themes'

export const useThemes = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme, resolvedTheme }
}
