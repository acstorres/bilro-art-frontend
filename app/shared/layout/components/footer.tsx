export default function Footer() {
  return (
    <footer>
      <div className="h-80 bg-[var(--calda-de-pudim)] pl-30 pr-30 pt-12 pb-12">
        <div className="justify-end flex gap-8">
          <img
            src="app/shared/assets/logo-ifma.png"
            alt="logo-instituo-federal-maranhao"
            width={90}
            height={90}
          />
          <img
            src="app/shared/assets/logo-bg-repeat.png"
            alt="logo-bilro-arte-arco"
            width={90}
            height={90}
          />
        </div>
        <div className="border-t border-white/30 mt-4 pt-8 flex flex-col items-center text-center text-white/60 font-extralight text-sm gap-4">
          <p>
            Copyright © {new Date().getFullYear()}, BilroArte. Todos os
            direitos reservados.
          </p>
          <p>Desenvolvido por Instituto Federal do Maranhão</p>
        </div>
      </div>
    </footer>
  )
}
