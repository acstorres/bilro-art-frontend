import type { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="pl-10 pr-10 lg:pl-30 mb-10 lg:pr-30 w-full">
      {children}
    </section>
  )
}
