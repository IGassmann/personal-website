import { Component, useEffect } from 'react'
import type { AppPropsWithLayout } from 'next/app'
import { DefaultSeo } from 'next-seo'
import PlausibleProvider from 'next-plausible'
import DefaultLayout from '@/layouts/DefaultLayout'
import siteConfig from '@/site.config'
import '@/styles/globals.scss'
// import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout ?? DefaultLayout

  useEffect(() => {
    if ('caches' in window) {
      caches.keys().then((keys) => {
        return Promise.all(keys.map((key) => caches.delete(key)))
      })
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister()
      })
    }
  })

  return (
    <>
      <DefaultSeo {...siteConfig} />
      <PlausibleProvider
        domain="igassmann.me"
        customDomain="https://stats.igassmann.me"
        trackOutboundLinks
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  )
}

export default MyApp
