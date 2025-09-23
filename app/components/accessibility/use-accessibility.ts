import { useEffect } from 'react'
import { AccessibilityEnum, type AccessibilityOptions } from './types'
import useLocalStorage from '@shared/hooks/use-local-storage'

export function useAccessibility() {
  const DEFAULT_FONT_SIZE = 100
  const MIN_FONT_SIZE = 80
  const MAX_FONT_SIZE = 150
  const FONT_SIZE_INTERVAL = 10

  const defaultOptions: AccessibilityOptions = {
    HIGH_CONTRAST_LIGHT: false,
    HIGH_CONTRAST_DARK: false,
    LETTER_SPACING: false,
    HIGHLIGHT_LINKS: false,
    BIG_CURSOR: false,
  }

  const [fontSize, setFontSize] = useLocalStorage(
    'accessibility-font-size',
    DEFAULT_FONT_SIZE,
  )

  const [options, setOptions] = useLocalStorage<AccessibilityOptions>(
    'accessibility-settings',
    defaultOptions,
  )

  const isFontSizeReduced = () => fontSize < DEFAULT_FONT_SIZE

  const isFontSizeIncreased = () => fontSize > DEFAULT_FONT_SIZE

  const isAtMinFontSize = () => fontSize === MIN_FONT_SIZE

  const isAtMaxFontSize = () => fontSize === MAX_FONT_SIZE

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    document.documentElement.classList.toggle(
      'letter-spacing',
      options.LETTER_SPACING,
    )
    document.documentElement.classList.toggle(
      'highlight-links',
      options.HIGHLIGHT_LINKS,
    )
    document.documentElement.classList.toggle('big-cursor', options.BIG_CURSOR)
  }, [fontSize, options])

  const toggleOption = (key: AccessibilityEnum) => {
    if (key === AccessibilityEnum.HIGH_CONTRAST_LIGHT && options[key] === false)
      setOptions({
        ...options,
        [AccessibilityEnum.HIGH_CONTRAST_LIGHT]: true,
        [AccessibilityEnum.HIGH_CONTRAST_DARK]: false,
      })
    else if (
      key === AccessibilityEnum.HIGH_CONTRAST_DARK &&
      options[key] === false
    )
      setOptions({
        ...options,
        [AccessibilityEnum.HIGH_CONTRAST_DARK]: true,
        [AccessibilityEnum.HIGH_CONTRAST_LIGHT]: false,
      })
    else
      setOptions({
        ...options,
        [key]: !options[key],
      })

    return !options[key]
  }

  const resetSettings = () => {
    setFontSize(DEFAULT_FONT_SIZE)
    setOptions(defaultOptions)
  }

  return {
    fontSize,
    setFontSize,
    options,
    setOptions,
    toggleOption,
    resetSettings,
    DEFAULT_FONT_SIZE,
    isAtMinFontSize,
    isAtMaxFontSize,
    isFontSizeReduced,
    isFontSizeIncreased,
    FONT_SIZE_INTERVAL,
  }
}
