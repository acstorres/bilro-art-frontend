import { Link } from 'react-router'

import { TypographyBase } from '@shared/components/typography'
import { RoutesEnum } from '@routes'
import { responsivenessClasses } from './utils'
import { cn } from '@shared/lib/utils'

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary">
        <div className="relative w-full h-25 lg:h-60 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 
         C300,120 500,300 800,150 
         C1100,0 1300,220 1440,180 
         L1440,0 L0,0 Z"
              className="fill-[var(--background)]"
            />
          </svg>
        </div>

        <div
          className={cn(
            'mb-10 w-full flex flex-col justify-center text-center md:text-start md:justify-between md:flex-row gap-8',
            responsivenessClasses,
          )}
        >
          <div className="flex flex-col self-center gap-2">
            <img
              src="app/shared/assets/logo/logo-and-name-white.png"
              alt="logo-name-white"
              width={170}
            />
            <div className="flex flex-col">
              <TypographyBase className="text-white text-sm">
                contato@bilroarte.com
              </TypographyBase>
              <TypographyBase className="text-white text-sm">
                Telefone: +55 (98) 98736-7688
              </TypographyBase>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Link to={RoutesEnum.HOME} className="text-white text-sm">
              FAQs
            </Link>
            <Link to={RoutesEnum.HOME} className="text-white text-sm">
              Sobre nós
            </Link>
            <Link to={RoutesEnum.HOME} className="text-white text-sm">
              Devolução e Troca
            </Link>
          </div>
          <div className="flex gap-8 self-center">
            <img
              src="app/shared/assets/logo/logo-ifma.png"
              alt="Logo IFMA"
              width={90}
              height={90}
            />
            <img
              src="app/shared/assets/logo/logo-bg-repeat.png"
              alt="Logo Bilro Arte"
              width={90}
              height={90}
            />
          </div>
        </div>

        <div className="py-2 md:py-4 md:px-8 flex flex-col md:flex-row justify-center text-center text-xs md:text-sm gap-1 bg-primary-dark text-white">
          <p>
            Copyright © {new Date().getFullYear()}, BilroArte. Direitos
            reservados.
          </p>
          <p>Desenvolvido por Instituto Federal do Maranhão</p>
        </div>
      </div>
    </footer>
  )
}
