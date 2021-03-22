import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import About from '@/components/About/About';

const AboutPage = ({ about, origin }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={about.title}
        description="About Igor Gassmann"
        openGraph={{
          url: `${origin}${router.asPath}`,
          title: about.title
        }}
      />
      <About about={about} />
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const { default: { origin } } = await import('@/site.config')

  const aboutPath = join(process.cwd(), 'src', 'content', 'about.md');
  const fileContent = fs.readFileSync(aboutPath, 'utf8');
  const { content, data } = matter(fileContent);

  return {
    props: {
      origin,
      about: {
        ...data,
        content,
      },
    },
  };
}