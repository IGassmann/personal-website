// @flow
import React from 'react';
import Head from 'next/head';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Head>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Head>
    {children}
  </div>
);

export default Layout;
