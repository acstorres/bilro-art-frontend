export default function MobileFooter() {
  return (
    <div className="bg-primary">
      <div className="relative w-full h-25 overflow-hidden">
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
            fill="white"
          />
        </svg>
      </div>

      <div>
        <div className="pb-4 justify-center flex flex-row ">
          <img
            src="app/shared/assets/logo/logo-ifma.png"
            alt="logo-instituo-federal-maranhao"
            width={45}
            height={45}
          />
          <img
            src="app/shared/assets/logo/logo-bg-repeat.png"
            alt="logo-bilro-arte-arco"
            width={45}
            height={45}
          />
        </div>

        <div className="pb-2 pt-2 flex flex-col justify-center text-center text-xs gap-1 bg-primary brightness-85 text-white">
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
