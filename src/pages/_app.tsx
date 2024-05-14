import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl'

import theme from '@src/theme'
import { fonts } from '@src/theme/fonts'
import { trpc } from '@src/utils/trpc'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          :root {
            --font-raleway: ${fonts.raleway.style.fontFamily};
          }
        `}
      </style>
      <IntlProvider locale="fr">
        <ChakraProvider theme={theme} resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </IntlProvider>
    </>
  )
}

export default trpc.withTRPC(App)
