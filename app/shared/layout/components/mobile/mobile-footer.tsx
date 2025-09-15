export default function MobileFooter() {
  return (
    <div className="h-40 bg-secondary pl-10 pr-10 pt-4 pb-4 justify-between flex flex-col">
      <div className="justify-center flex gap-4">
        <img
          src="app/shared/assets/logo-ifma.png"
          alt="logo-instituo-federal-maranhao"
          width={45}
          height={45}
        />
        <img
          src="app/shared/assets/logo-bg-repeat.png"
          alt="logo-bilro-arte-arco"
          width={45}
          height={45}
        />
      </div>
      <div className="border-t border-white/30 mt-2 pt-4 flex flex-col items-center text-center text-white/80 font-extralight text-xs gap-1">
        <p>
          Copyright © {new Date().getFullYear()}, BilroArte. Todos os direitos
          reservados.
        </p>
        <p>Desenvolvido por Instituto Federal do Maranhão</p>
      </div>
    </div>
  )
}
