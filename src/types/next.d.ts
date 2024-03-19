import type { NextPage } from 'next';

declare module 'next' {
  type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
    Layout?: React.FunctionComponent<{ children: React.ReactNode }>;
  };
}
