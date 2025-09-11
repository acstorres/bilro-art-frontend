import { isAuthenticated, getUser } from '@shared/auth/auth'

import {
  createContext,
  useContext,
  useMemo,
  type JSX,
  type ReactNode,
} from 'react'

interface Context {
  isAuthenticated: boolean
  user: string | undefined
}

const UserContext = createContext<Context | undefined>(undefined)

const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const value = useMemo<Context>(
    () => ({
      isAuthenticated: isAuthenticated(),
      user: getUser(),
    }),
    [],
  )

  return <UserContext value={value}>{children}</UserContext>
}

function useUser(): Context {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUser }
