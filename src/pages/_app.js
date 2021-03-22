import GoogleTagManager from '@/components/GoogleTagManager/GoogleTagManager';
import DefaultLayout from '@/layouts/DefaultLayout';
import { DefaultSeo } from 'next-seo';
import React, { useEffect } from 'react';
import '@/styles/globals.scss';
import siteConfig from '@/site.config';

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  // Unregister previous website version service worker and clean its cache.
  useEffect(() => {
    if ('caches' in window) {
      caches.keys()
        .then(keys => {
          return Promise.all(keys.map(key => caches.delete(key)));
        })
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, [])

  return (
    <GoogleTagManager>
      <DefaultSeo {...siteConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleTagManager>
  );
}