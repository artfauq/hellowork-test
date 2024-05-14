import { GlobalStyles } from '@chakra-ui/theme-tools'

const styles: GlobalStyles = {
  global: {
    'html': {
      height: '100%',
      bg: 'background',
    },
    'body': {
      height: '100%',
      bg: 'background',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    'a': {
      color: 'teal',
    },
    'p': {
      fontSize: { base: 'md', sm: 'lg' },
      marginBottom: 2,
    },
    'h1': {
      fontSize: { base: '4xl', sm: '5xl' },
      fontWeight: 'medium',
      marginBottom: { base: 6, sm: 8 },
    },
    'h2': {
      fontSize: { base: '3xl', sm: '4xl' },
      fontWeight: 'medium',
      marginBottom: { base: 4, sm: 6 },
    },
    'h3': {
      fontSize: { base: 'lg', sm: 'xl' },
      fontWeight: 'medium',
      marginBottom: { base: 2, sm: 4 },
    },
    'td': {
      fontSize: 'sm',
    },
  },
}

export default styles
