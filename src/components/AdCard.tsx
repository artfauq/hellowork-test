import React from 'react'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import he from 'he'
import { FiDollarSign, FiMapPin, FiBriefcase } from 'react-icons/fi'
import { GoLog, GoOrganization } from 'react-icons/go'

import { Ad } from '@src/types'

import { IconText } from './IconText'

type Props = {
  ad: Ad
}

export const AdCard: React.FC<Props> = ({ ad }) => {
  const publicationDate = format(new Date(ad.publicationDate), 'dd/MM/yyyy')

  return (
    <Card p={2} size="sm">
      <CardHeader>
        <Heading mb={3} size="sm">
          {ad.title}
        </Heading>
        <HStack spacing={6}>
          <IconText icon={FiMapPin} text={ad.city} />
          <IconText icon={GoOrganization} text={ad.company} />
          <IconText icon={GoLog} text={ad.contractType[0]} />
          <IconText icon={FiBriefcase} text={ad.jobtitle} />
          <IconText icon={FiDollarSign} text={ad.salary ? `${ad.salary}€` : 'n/a'} />
        </HStack>
      </CardHeader>

      <CardBody>
        <Text fontSize="md" lineHeight="short" mb={0}>
          {he.decode(ad.description)}
        </Text>
      </CardBody>
      <CardFooter alignItems="flex-end" justifyContent="space-between">
        <Text color="gray.400" fontSize="sm" mb={0}>
          Publiée le {publicationDate}
        </Text>
        <Button as="a" href={ad.link} target="_blank" size="sm" variant="ghost">
          Postuler
        </Button>
      </CardFooter>
    </Card>
  )
}
