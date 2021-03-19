import { DefaultSeo } from 'next-seo';
import React from 'react';
import '@/styles/globals.scss';
import siteConfig from '@/site.config';

// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...siteConfig} />
      <Component {...pageProps} />
    </>
  );
}