import { useTheme } from 'next-themes'

export const useThemes = () => {
  const { theme, systemTheme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, systemTheme, toggleTheme, resolvedTheme }
}
