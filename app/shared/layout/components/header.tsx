import { Nav } from './nav'
import { Handbag, Search, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@components/ui/button'
import { RoutesEnum } from '~/routes'
import { Badge } from '@components/ui/badge'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const gotToLogin = () => navigate(RoutesEnum.LOGIN)

  return (
    <header>
      <div
        className={`w-full bg-primary h-8 transition-all duration-300 ${isScrolled ? 'hidden' : ''}`}
      ></div>
      <div
        className={`flex pl-30 pr-30 pt-2 pb-2 justify-between mx-auto transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 right-0 bg-white z-10' : 'bg-white'
        }`}
      >
        <div className="flex">
          <img
            src="app/shared/assets/logo-letter.svg"
            alt="logo-letter"
            width={50}
            height={50}
          />
          <img
            src="app/shared/assets/logo-name.svg"
            alt="logo-name"
            width={120}
            height={120}
          />
        </div>
        <Nav />
        <div className="min-w-30 flex justify-end self-center">
          <Button aria-label="search" variant="ghost">
            <Search size={25} strokeWidth={1.5} />
          </Button>
          <Button
            aria-label="login-register"
            variant="ghost"
            onClick={() => gotToLogin()}
          >
            <User size={25} strokeWidth={1.5} />
          </Button>
          <Button aria-label="bag" variant="ghost">
            <Badge
              className="h-4 min-w-4 rounded-full px-1 text-xs font-light tabular-nums z-10 absolute mt-5 mr-5"
              variant="default"
              aria-label="bag-items"
            >
              1
            </Badge>
            <Handbag size={25} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </header>
  )
}
