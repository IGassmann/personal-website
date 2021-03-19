import Layout from '@/components/Layout';
import React from 'react';

const NotFoundPage = ({ siteTitle, siteSubtitle }) => {
  return (
    <Layout title={`Not Found - ${siteTitle}`} description={siteSubtitle}>
      <h1>Not Found</h1>
      <p>Nothing to see here. Move along.</p>
    </Layout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default NotFoundPage;

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
  const { default: { title, description } } = await import('@/site.config')

  return {
    props: {
      siteTitle: title,
      siteSubtitle: description,
    },
  };
}