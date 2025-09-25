import type { ReactNode } from 'react'
import { cn } from '@shared/lib/utils'

interface SectionProps {
  className?: string
  children: ReactNode
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section
      className={cn(
        'pl-3 pr-3 md:pl-5 md-pr-5 lg:pl-20 lg:pr-20 xl:pl-30 xl:pr-30 2xl:pl-60 2xl:pr-60 mb-10 w-full',
        className,
      )}
    >
      {children}
    </section>
  )
}
