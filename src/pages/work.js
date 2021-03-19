import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '@/components/Layout';
import Work from '@/components/Work/Work';

const AboutPage = ({ origin }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title='Work'
        description="Igor Gassmann's Work"
        openGraph={{
          url: `${origin}${router.asPath}`,
          title: 'Work'
        }}
      />
      <Layout>
        <Work />
      </Layout>
    </>
  );
};

export default AboutPage;

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
  const { default: { origin } } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  };
}