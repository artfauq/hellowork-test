import React from 'react'

import { VStack } from '@chakra-ui/react'

import { usePaginationContext } from '@src/context'
import { Ad } from '@src/types'

import { AdCard } from './AdCard'
import { Pagination } from './Pagination'

type Props = {
  ads: Ad[]
}

export const AdsList: React.FC<Props> = ({ ads }) => {
  const { page, pageSize, setPage, total } = usePaginationContext()

  return (
    <VStack spacing={4}>
      {ads.map(ad => (
        <AdCard key={ad.id} ad={ad} />
      ))}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(total / pageSize)}
        onPageChange={setPage}
      />
    </VStack>
  )
}
