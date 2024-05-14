import {
  theme as baseTheme,
  extendTheme,
  withDefaultColorScheme,
  Theme as DefaultTheme,
} from '@chakra-ui/react'

import breakpoints from './breakpoints'
import colors, { CustomColors } from './colors'
import styles from './styles'
import textStyles from './text-styles'

const theme = extendTheme(
  {
    breakpoints,
    colors,
    fonts: {
      heading: 'var(--font-raleway)',
      body: 'var(--font-raleway)',
      mono: 'var(--font-raleway)',
    },
    styles,
    textStyles,
  },
  withDefaultColorScheme({ colorScheme: 'teal' }),
  baseTheme,
)

export type CustomTheme = DefaultTheme & {
  colors: DefaultTheme['colors'] & CustomColors
}

export default theme
export { colors, breakpoints }
