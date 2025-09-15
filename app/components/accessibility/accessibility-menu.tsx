import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ZoomIn,
  ZoomOut,
  Contrast,
  Link,
  MousePointer,
  PersonStanding,
  Type,
} from 'lucide-react'
import { useAccessibility } from './use-accessibility'
import { Switch } from '@components/ui/switch'
import { Label } from '@components/ui/label'
import { Button } from '@components/ui/button'
import { AccessibilityEnum } from './types'
import { Separator } from '@components/ui/separator'

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false)
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
          className="absolute bottom-16 right-0 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-4 w-80 space-y-3"
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
            <Label htmlFor="high-contrast" className={'text-base font-normal'}>
              Alto contraste
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                id="high-contrast"
                aria-label="Alto contraste"
                checked={options.HIGH_CONTRAST}
                onClick={() => toggleOption(AccessibilityEnum.HIGH_CONTRAST)}
              />
              <Contrast size={18} />
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
            <Button size={'sm'} variant={'default'} onClick={resetSettings}>
              Limpar definições
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
