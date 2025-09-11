import { useUser } from '@shared/context/user-context'
import Layout from '@shared/layout/layout'

export function Home() {
  const { user } = useUser()
  return (
    <Layout>
      <div>{user}</div>
    </Layout>
  )
}
