import React, { useEffect, useState } from 'react'

import { Skeleton, Text, VStack } from '@chakra-ui/react'

import { PaginationProvider, useAuthContext } from '@src/context'
import { trpc } from '@src/utils/trpc'

import { AdsList } from './AdsList'

type Props = {
  city: string
  search: string
}

export const AdsSearch: React.FC<Props> = ({ city, search }) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const { token } = useAuthContext()
  const { data, isError, isFetching, isSuccess } = trpc.job.search.useQuery(
    {
      limit: pageSize,
      page,
      token,
      what: search,
      where: city,
    },
    {
      enabled: !!search,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  )

  useEffect(() => {
    setPage(1)
  }, [search])

  if (isFetching) {
    return (
      <VStack alignItems="stretch">
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
      </VStack>
    )
  }

  if (isError) {
    return <Text>Une erreur est survenue</Text>
  }

  if (isSuccess) {
    return (
      <PaginationProvider page={page} pageSize={pageSize} setPage={setPage} total={data.total}>
        <Text color="gray.800" fontSize="md" textAlign="center">
          {data.total} annonce{data.total > 1 ? 's' : ''} trouvée{data.total > 1 ? 's' : ''}
        </Text>
        <AdsList ads={data.ads} />
      </PaginationProvider>
    )
  }

  return null
}
