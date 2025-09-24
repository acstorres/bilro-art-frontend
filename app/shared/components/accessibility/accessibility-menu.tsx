import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ZoomIn,
  ZoomOut,
  Link,
  MousePointer,
  PersonStanding,
  Type,
  Sun,
  Moon,
} from 'lucide-react'
import { useAccessibility } from '../../hooks/use-accessibility'
import { Switch } from '@shared/components/ui/switch'
import { Label } from '@shared/components/ui/label'
import { Button } from '@shared/components/ui/button'
import { AccessibilityEnum } from './types'
import { Separator } from '@shared/components/ui/separator'
import { useTheme } from '@shared/hooks/use-theme'

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false)
  const {
    setTheme,
    toggleThemeHighContrastDark,
    toggleThemeHighContrastLight,
  } = useTheme()

  const {
    fontSize,
    setFontSize,
    options,
    toggleOption,
    resetSettings,
    isAtMinFontSize,
    isAtMaxFontSize,
    isFontSizeReduced,
    isFontSizeIncreased,
    FONT_SIZE_INTERVAL,
  } = useAccessibility()

  const onHighContrastLight = (option: AccessibilityEnum) => {
    const value = toggleOption(option)
    toggleThemeHighContrastLight(value)
  }

  const onHighContrastDark = (option: AccessibilityEnum) => {
    const value = toggleOption(option)
    toggleThemeHighContrastDark(value)
  }

  const reset = () => {
    resetSettings()
    setTheme('light')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        aria-label="Opções de acessibilidade"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-black text-white shadow-lg hover:scale-110 transition"
      >
        <PersonStanding strokeWidth={2.5} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 right-0 bg-card shadow-xl rounded-2xl p-4 w-80 space-y-3"
        >
          <h2 className="text-lg font-semibold mb-6">Acessibilidade visual</h2>

          <div className="flex items-center justify-between">
            <Label htmlFor="letter-spacing" className={'text-base font-normal'}>
              Espaçamento
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                id="letter-spacing"
                aria-label="Espaçamento"
                checked={options.LETTER_SPACING}
                onClick={() => toggleOption(AccessibilityEnum.LETTER_SPACING)}
              />
              <Type size={18} />
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-foreground/50" />

          <div className="flex items-center justify-between">
            <Label
              htmlFor="high-contrast-light"
              className={'text-base font-normal'}
            >
              Alto contraste claro
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                id="high-contrast-light"
                aria-label="Alto contraste claro"
                checked={options.HIGH_CONTRAST_LIGHT}
                onClick={() =>
                  onHighContrastLight(AccessibilityEnum.HIGH_CONTRAST_LIGHT)
                }
              />
              <Sun size={18} />
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-foreground/50" />

          <div className="flex items-center justify-between">
            <Label
              htmlFor="high-contrast-dark"
              className={'text-base font-normal'}
            >
              Alto contraste escuro
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                id="high-contrast-dark"
                aria-label="Alto contraste escuro"
                checked={options.HIGH_CONTRAST_DARK}
                onClick={() =>
                  onHighContrastDark(AccessibilityEnum.HIGH_CONTRAST_DARK)
                }
              />
              <Moon size={18} />
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-foreground/50" />

          <div className="flex items-center justify-between">
            <Label
              htmlFor="highlight-links"
              className={'text-base font-normal'}
            >
              Destaque links
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                id="highlight-links"
                aria-label="Destaque links"
                checked={options.HIGHLIGHT_LINKS}
                onClick={() => toggleOption(AccessibilityEnum.HIGHLIGHT_LINKS)}
              />
              <Link size={18} />
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-foreground/50" />

          <div className="flex items-center justify-between">
            <Label htmlFor="big-cursor" className={'text-base font-normal'}>
              Cursor grande
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                id="big-cursor"
                aria-label="Cursor grande"
                checked={options.BIG_CURSOR}
                onClick={() => toggleOption(AccessibilityEnum.BIG_CURSOR)}
              />
              <MousePointer size={18} />
            </div>
          </div>

          <Separator className="bg-gray-200 dark:bg-foreground/50" />

          <div className="flex items-center justify-between">
            <Label defaultValue={fontSize} className={'text-base font-normal'}>
              Tamanho do texto
            </Label>
            <div className="flex gap-2">
              <Button
                size={'sm'}
                aria-label="Diminuir tamanho do texto"
                variant={isFontSizeReduced() ? 'default' : 'secondary'}
                onClick={() => setFontSize(fontSize - FONT_SIZE_INTERVAL)}
                disabled={isAtMinFontSize()}
              >
                <ZoomOut />
              </Button>
              <Button
                size={'sm'}
                aria-label="Aumentar tamanho do texto"
                variant={isFontSizeIncreased() ? 'default' : 'secondary'}
                onClick={() => setFontSize(fontSize + FONT_SIZE_INTERVAL)}
                disabled={isAtMaxFontSize()}
              >
                <ZoomIn />
              </Button>
            </div>
          </div>
          <div className="justify-end flex mt-8">
            <Button size={'sm'} variant={'default'} onClick={reset}>
              Limpar definições
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
