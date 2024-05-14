import React from 'react'

import { ButtonGroup, Container, IconButton, Text } from '@chakra-ui/react'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  if (totalPages <= 1) return null

  const displayedPages = Array.from({ length: 5 }, (_, index) => currentPage + index - 2).filter(
    page => page > 0 && page <= totalPages,
  )

  return (
    <Container>
      <ButtonGroup justifyContent="center" variant="outline" w="full">
        <IconButton
          aria-label="First Page"
          icon={<RxDoubleArrowLeft />}
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
          rounded="full"
          variant="outline"
        />
        {displayedPages.map(page => (
          <IconButton
            key={page}
            aria-label={`Page ${page}`}
            rounded="full"
            variant={page === currentPage ? 'solid' : 'outline'}
            onClick={() => handlePageChange(page)}
            icon={
              <Text fontSize="sm" mb={0}>
                {page}
              </Text>
            }
          />
        ))}
        <IconButton
          aria-label="Last Page"
          icon={<RxDoubleArrowRight />}
          isDisabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
          rounded="full"
          variant="outline"
        />
      </ButtonGroup>
    </Container>
  )
}
