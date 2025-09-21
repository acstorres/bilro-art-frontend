import { Nav } from './nav'
import { Handbag, Search, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { Button } from '@components/ui/button'
import { RoutesEnum } from '@routes'
import { Badge } from '@components/ui/badge'
import { useTheme } from '@shared/hooks/use-theme'

export default function Header() {
  let navigate = useNavigate()

  const gotToLogin = () => navigate(RoutesEnum.LOGIN)

  const { isDark } = useTheme()

  return (
    <header>
      <div className="pl-30 pr-30 pt-2 pb-2 fixed top-0 w-full bg-background z-50">
        <div className="justify-between flex">
          <Link className="underline" to={RoutesEnum.HOME}>
            {isDark() ? (
              <img
                src="app/shared/assets/logo/logo-name-white.png"
                alt="logo-name-white"
                width={170}
              />
            ) : (
              <img
                src="app/shared/assets/logo/logo-and-name.png"
                alt="logo-name"
                width={170}
              />
            )}
          </Link>

          <Nav />

          <div className="min-w-30 flex justify-end self-center gap-0.5">
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
      </div>
    </header>
  )
}
