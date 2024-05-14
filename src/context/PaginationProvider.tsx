import { createContext, useContext } from 'react'

type PaginationContextProps = {
  page: number
  pageSize: number
  total: number
  setPage: (page: number) => void
}

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined)

type PaginationProviderProps = React.PropsWithChildren<PaginationContextProps>

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ children, ...props }) => {
  return <PaginationContext.Provider value={props}>{children}</PaginationContext.Provider>
}

export const usePaginationContext = (): PaginationContextProps => {
  const context = useContext(PaginationContext)

  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }

  return context
}
