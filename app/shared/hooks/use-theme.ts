import { useEffect } from 'react'
import useLocalStorage from './use-local-storage'

type Theme = 'light' | 'dark' | 'high-contrast-light' | 'high-contrast-dark'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  useEffect(() => {
    const themes: Theme[] = [
      'dark',
      'high-contrast-light',
      'high-contrast-dark',
      'light',
    ]
    const root = document.documentElement
    themes.forEach((t) => root.classList.remove(t))
    if (themes.includes(theme)) root.classList.add(theme)
  }, [theme])

  const toggleThemeHighContrastLight = (isHighContrastLight: boolean) => {
    if (isHighContrastLight) setTheme('high-contrast-light')
    else setTheme('light')
  }

  const toggleThemeHighContrastDark = (isHighContrastDark: boolean) => {
    if (isHighContrastDark) setTheme('high-contrast-dark')
    else setTheme('light')
  }

  const isDark = () => theme.includes('dark')

  return {
    theme,
    isDark,
    setTheme,
    toggleThemeHighContrastLight,
    toggleThemeHighContrastDark,
  }
}
