import type { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="pl-3 pr-3 md:pl-5 md-pr-5 lg:pl-20 lg:pr-20 xl:pl-30 xl:pr-30 2xl:pl-60 2xl:pr-60 mb-10 w-full">
      {children}
    </section>
  )
}
