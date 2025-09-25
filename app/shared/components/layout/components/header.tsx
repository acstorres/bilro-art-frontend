import { Link, useNavigate } from 'react-router'
import { Handbag, Menu, User } from 'lucide-react'

import { Button } from '@shared/components/ui/button'
import { Badge } from '@shared/components/ui/badge'
import Hidden from '@shared/components/ui/hidden'

import { useTheme } from '@shared/hooks/use-theme'
import { RoutesEnum } from '@routes'
import Nav from './nav'

export default function Header() {
  const { isDark } = useTheme()

  let navigate = useNavigate()

  const gotToLogin = () => navigate(RoutesEnum.LOGIN)
  return (
    <header>
      <div className="pt-3 pb-2 pl-3 pr-3 md:pl-5 md-pr-5 lg:pl-20 lg:pr-20 xl:pl-30 xl:pr-30 2xl:pl-60 2xl:pr-60 mb-10 fixed top-0 w-full bg-background z-50">
        <div className="justify-between flex">
          <Link className="underline" to={RoutesEnum.HOME}>
            {isDark() ? (
              <img
                src="app/shared/assets/logo/logo-and-name-white.png"
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
          <Hidden bellow="tablet">
            <Nav />
          </Hidden>
          <div className="min-w-30 flex justify-end self-center gap-0.5">
            {/* <Button aria-label="search" variant="ghost">
              <Search size={25} strokeWidth={1.5} />
            </Button> */}
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
            <Hidden above="tablet">
              <Button aria-label="bag" variant="ghost">
                <Menu size={25} strokeWidth={1.5} />
              </Button>
            </Hidden>
          </div>
        </div>
      </div>
    </header>
  )
}
