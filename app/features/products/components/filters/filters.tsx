import { useEffect, useState } from 'react'
import { ChevronDownIcon, Settings2 } from 'lucide-react'
import { Button } from '@shared/components/ui/button'

export function Filters() {
  const [showSticky, setShowSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowSticky(true)
      } else {
        setShowSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={`flex flex-row bg-background/87 z-10 w-full backdrop-blur-xs pb-6 pt-4 transition-all duration-400 ${showSticky && 'fixed top-16'}`}
    >
      <Settings2 size={24} strokeWidth={1.5} className="self-center" />
      <Button
        variant="ghost"
        size="sm"
        className="self-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filtros{' '}
        <ChevronDownIcon
          className={`relative top-[1px] ml-1 size-4 transition duration-300 ${isOpen && 'rotate-180'}`}
          aria-hidden="true"
        />
      </Button>
    </div>
  )
}
