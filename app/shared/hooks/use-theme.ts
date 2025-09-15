import { useEffect } from 'react'
import useLocalStorage from './use-local-storage'

type Theme = 'light' | 'dark' | 'dark-high-contrast'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  useEffect(() => {
    const root = document.documentElement

    root.classList.add(value)

    setTheme(theme)
  }, [theme, value, setTheme])

  const isDark = () => theme === 'dark'
  const isLight = () => theme === 'light'

  return { theme, isDark, isLight. setTheme }
}
