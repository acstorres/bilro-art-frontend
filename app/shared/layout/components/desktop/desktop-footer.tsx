export default function DesktopFooter() {
  return (
    <div className="bg-primary">
      <div className="relative w-full h-60 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 
         C300,120 500,300 800,150 
         C1100,0 1300,220 1440,180 
         L1440,0 L0,0 Z"
            className="fill-[var(--background)]"
          />
        </svg>
      </div>

      <div className="h-50 justify-between flex flex-col">
        <div className="justify-end flex gap-8 pl-30 pr-30 pb-6">
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
        <div className="pb-4 pl-8 pr-8 pt-4 flex justify-between text-sm gap-1 bg-primary brightness-85 text-white">
          <p>
            Copyright © {new Date().getFullYear()}, BilroArte. Direitos
            reservados.
          </p>
          <p>Desenvolvido por Instituto Federal do Maranhão</p>
        </div>
      </div>
    </div>
  )
}
