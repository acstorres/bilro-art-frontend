export default function DesktopFooter() {
  return (
    <div className="h-80 bg-calda-de-pudim dark:bg-secondary pl-30 pr-30 pt-12 pb-6 justify-between flex flex-col">
      <div className="justify-end flex gap-8">
        <img
          src="app/shared/assets/logo-ifma.png"
          alt="Logo IFMA"
          width={90}
          height={90}
        />
        <img
          src="app/shared/assets/logo-bg-repeat.png"
          alt="Logo Bilro Arte"
          width={90}
          height={90}
        />
      </div>
      <div className="border-t border-white/50 mt-4 pt-8 flex flex-col items-center text-center text-white font-extralight text-sm gap-1">
        <p>
          Copyright © {new Date().getFullYear()}, BilroArte. Todos os direitos
          reservados.
        </p>
        <p>Desenvolvido por Instituto Federal do Maranhão</p>
      </div>
    </div>
  )
}
