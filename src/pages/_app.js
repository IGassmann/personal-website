import DefaultLayout from '@/layouts/DefaultLayout';
import { DefaultSeo } from 'next-seo';
import React from 'react';
import '@/styles/globals.scss';
import siteConfig from '@/site.config';

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <DefaultSeo {...siteConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}