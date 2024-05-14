import React from 'react'

import { Center, Spinner, SpinnerProps } from '@chakra-ui/react'

type Props = SpinnerProps & {
  fullScreen?: boolean
}

export const Loader: React.FC<Props> = ({ fullScreen, color = 'teal.600', ...props }) => {
  const spinner = <Spinner color={color} {...props} />

  return fullScreen ? <Center flex={1}>{spinner}</Center> : spinner
}
