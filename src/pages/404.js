import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

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
      <h1>Not Found</h1>
      <p>Nothing to see here. Move along.</p>
    </>
  );
};

export default NotFoundPage;

export async function getStaticProps() {
  const { default: { origin } } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  };
}