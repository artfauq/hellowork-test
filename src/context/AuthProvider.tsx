import { createContext, useContext, useEffect, useMemo } from 'react'

import { Loader } from '@src/components'
import { trpc } from '@src/utils/trpc'

type AuthContextProps = {
  token: string
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

type AuthProviderProps = React.PropsWithChildren<{}>

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { data: token, mutateAsync: refreshToken } = trpc.job.login.useMutation({
    cacheTime: 60 * 60,
  })

  useEffect(() => {
    if (!token) {
      refreshToken().catch(console.error)
    }
  }, [token])

  const context = useMemo(() => (token ? { token } : undefined), [token])

  if (!context) {
    return <Loader fullScreen />
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
