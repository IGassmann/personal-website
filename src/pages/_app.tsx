import { NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import PlausibleProvider from 'next-plausible';
import DefaultLayout from '@/layouts/DefaultLayout';
import siteConfig from '@/site.config';
import '@/styles/globals.scss';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout ?? DefaultLayout;

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
  );
};

export default MyApp;
