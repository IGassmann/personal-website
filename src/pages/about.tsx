import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import About from '@/components/About';

type AboutPageProps = {
  origin: string
  about: React.ComponentPropsWithoutRef<typeof About>
};

const AboutPage: NextPage<AboutPageProps> = ({ origin, about }) => {
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
      <About {...about} />
    </>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const { default: { origin } } = await import('@/site.config')

  const aboutPath = join(process.cwd(), 'src', 'content', 'about.md');
  const file = fs.readFileSync(aboutPath, 'utf8');
  const parsedFile = matter(file);
  const metadata: { [key: string]: unknown } = parsedFile.data;
  const content = parsedFile.content;

  return {
    props: {
      origin,
      about: {
        ...metadata,
        content,
      } as React.ComponentPropsWithoutRef<typeof About>,
    },
  };
}
