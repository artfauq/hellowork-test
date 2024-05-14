import React from 'react'

import { HStack, Icon, IconProps, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

type Props = {
  color?: IconProps['color']
  icon: IconType
  text: string | number | null | undefined
}

export const IconText: React.FC<Props> = ({ color = 'gray.500', icon, text }) => {
  if (!text) return null

  return (
    <HStack alignItems="center" spacing={1}>
      <Icon as={icon} color={color} boxSize={4} />
      <Text color={color} fontSize="sm">
        {text}
      </Text>
    </HStack>
  )
}
