import React from 'react';
import Layout from '@/components/Layout';
import Work from '@/components/Work/Work';

const AboutPage = ({ siteTitle, siteSubtitle }) => {
  return (
    <Layout pageTitle={`Work - ${siteTitle}`} pageDescription={siteSubtitle}>
      <Work />
    </Layout>
  );
};

export default AboutPage;

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