import Hidden from '@components/ui/hidden'
import Footer from './components/footer'
import Header from './components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hidden bellow="tablet">
        <Header />
      </Hidden>

      <main>
        <div className="min-h-[calc(100vh-8.5rem)] overflow-y-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
