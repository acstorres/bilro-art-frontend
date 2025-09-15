import { useEffect } from 'react'
import useLocalStorage from './use-local-storage'
import { useAccessibility } from '@components/accessibility/use-accessibility'
import { AccessibilityEnum } from '@components/accessibility/types'

type Theme = 'light' | 'dark' | 'high-contrast-light' | 'high-contrast-dark'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')
  const { options: accessibilityOptions, setOptions: setAccessibilityOptions } =
    useAccessibility()

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

  const toggleTheme = () => {
    setTheme(theme.includes('dark') ? 'light' : 'dark')
    setAccessibilityOptions({
      ...accessibilityOptions,
      [AccessibilityEnum.HIGH_CONTRAST]: false,
    })
  }

  const toggleHighContrastTheme = (isHighContrast: boolean) => {
    if (isHighContrast)
      setTheme(
        theme.includes('dark') ? 'high-contrast-dark' : 'high-contrast-light',
      )
    else setTheme(theme.includes('dark') ? 'dark' : 'light')
  }

  const isDark = () => theme.includes('dark')

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    toggleHighContrastTheme,
  }
}
