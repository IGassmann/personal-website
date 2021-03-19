import Layout from '@/components/Layout';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

const NotFoundPage = ({ origin }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title='Not Found'
        description="The page doesn't exist."
        openGraph={{
          title: 'Not Found',
          url: `${origin}${router.asPath}`,
        }}
      />
      <Layout>
        <h1>Not Found</h1>
        <p>Nothing to see here. Move along.</p>
      </Layout>
    </>
  );
};

// noinspection JSUnusedGlobalSymbols
export default NotFoundPage;

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
  const { default: { origin } } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  };
}