import { useEffect } from 'react'
import useLocalStorage from './use-local-storage'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    setTheme(theme)
  }, [theme, setTheme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const isDark = () => theme === 'dark'

  return { theme, isDark, toggleTheme }
}
