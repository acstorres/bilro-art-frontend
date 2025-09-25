import type { ReactNode } from 'react'
import { cn } from '@shared/lib/utils'
import { responsivenessClasses } from './utils'

interface SectionProps {
  className?: string
  children: ReactNode
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={cn('mb-10 w-full', className, responsivenessClasses)}>
      {children}
    </section>
  )
}
