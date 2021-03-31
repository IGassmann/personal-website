import React, { Component, useEffect } from 'react';
import { AppLayoutProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import DefaultLayout from '@/layouts/DefaultLayout';
import GoogleTagManager from '@/components/GoogleTagManager/GoogleTagManager';
import siteConfig from '@/site.config';
import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.Layout || DefaultLayout;

  useEffect(() => {
    if ('caches' in window) {
      caches.keys()
        .then(keys => {
          return Promise.all(keys.map(key => caches.delete(key)));
        })
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  });

  return (
    <GoogleTagManager>
      <DefaultSeo {...siteConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleTagManager>
  );
};

export default MyApp;