import { Footer, Header } from './components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-[calc(100dvh-8.5rem)] overflow-y-auto mt-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
