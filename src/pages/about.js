import React from 'react';
import * as matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import About from '@/components/About/About';
import Layout from '@/components/Layout';

const AboutPage = ({ siteTitle, siteSubtitle, about }) => {

  const metaDescription = about.description ?? siteSubtitle;

  return (
    <Layout pageTitle={`${about.title} - ${siteTitle}`} pageDescription={metaDescription}>
      <About about={about} />
    </Layout>
  );
};

export default AboutPage;

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
  const { default: { title, description } } = await import('@/site.config')

  const aboutPath = join(process.cwd(), 'src', 'content', 'about.md');
  const fileContent = fs.readFileSync(aboutPath, 'utf8');
  const { content, data } = matter(fileContent);

  return {
    props: {
      siteTitle: title,
      siteSubtitle: description,
      about: {
        ...data,
        content,
      },
    },
  };
}