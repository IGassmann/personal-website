import type { NextPage } from 'next';
import type { VFC } from 'react';

declare module 'next' {
  type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
    Layout?: VFC;
  };
}
