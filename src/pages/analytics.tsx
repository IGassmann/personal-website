import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SingleColumnLayout from '@/layouts/SingleColumnLayout';
import Analytics from '@/components/Analytics'

const AnalyticsPage = ({ origin }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title='Analytics'
        description="Website's Analytics"
        openGraph={{
          url: `${origin}${router.asPath}`,
          title: 'Analytics'
        }}
      />
      <Analytics />
    </>
  );
};

AnalyticsPage.Layout = SingleColumnLayout;

export default AnalyticsPage;

export const getStaticProps: GetStaticProps = async () => {
  const { default: { origin } } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  };
}