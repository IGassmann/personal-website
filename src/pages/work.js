import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Work from '@/components/Work/Work';

const WorkPage = ({ origin }) => {
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
      <Work />
    </>
  );
};

export default WorkPage;

export async function getStaticProps() {
  const { default: { origin } } = await import('@/site.config')

  return {
    props: {
      origin,
    },
  };
}