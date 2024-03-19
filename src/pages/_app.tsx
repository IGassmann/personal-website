import type { NextPageWithLayout } from 'next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import localFont from 'next/font/local';
import DefaultLayout from '@/layouts/DefaultLayout';
import siteConfig from '@/site.config';
import '@/styles/globals.css';

const blenderPro = localFont({
  src: [
    {
      path: '../fonts/BlenderPro/BlenderPro-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-BookItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/BlenderPro/BlenderPro-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-blender-pro',
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? DefaultLayout;

  return (
    <div className={`${blenderPro.variable} font-sans`}>
      <DefaultSeo {...siteConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
