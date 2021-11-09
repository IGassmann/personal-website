import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'
import type { VFC } from 'react'

declare module 'next' {
  type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
    Layout?: VFC
  }
}

declare module 'next/app' {
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }
}
