import Footer from './components/footer'
import Header from './components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-[calc(100dvh-8.5rem)] overflow-y-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
