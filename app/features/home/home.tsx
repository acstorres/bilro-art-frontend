import { RoutesEnum } from '@routes'
import { useUser } from '@shared/context/user-context'
import Layout from '@shared/layout/layout'
import { Link } from 'react-router'

export function Home() {
  const { user } = useUser()
  return (
    <Layout>
      <div className="relative w-full h-130 flex">
        <div className="bg-[url(/app/shared/assets/images/art06.png)] bg-no-repeat bg-cover bg-center w-1/2 brightness-75" />
        <div className="bg-[url(/app/shared/assets/images/art07.png)] bg-no-repeat bg-cover bg-center w-1/2 brightness-75" />

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white gap-4 font-medium">
          <div className="text-4xl">Conheça o artesanato</div>
          <Link className="underline" to={RoutesEnum.REGISTER}>
            Ver produtos
          </Link>
        </div>
      </div>
      <div className="justify-center flex text-2xl">
        #BilroArte | @bilroarte
      </div>
    </Layout>
  )
}
