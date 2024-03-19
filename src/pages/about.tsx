import fs from 'fs';
import { join } from 'path';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';

import About from '@/components/About';

type AboutPageProps = {
  origin: string;
  about: React.ComponentPropsWithoutRef<typeof About> & { title: string };
};

const AboutPage: NextPage<AboutPageProps> = ({ origin, about }) => {
  const { title, content, mainInterests, skills } = about;

  const router = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        description="About Igor Gassmann"
        openGraph={{
          url: `${origin}${router.asPath}`,
          title,
        }}
      />
      <About {...{ content, mainInterests, skills }} />
    </>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const {
    default: { origin },
  } = await import('@/site.config');

  const aboutPath = join(process.cwd(), 'src', 'content', 'about.md');
  const file = fs.readFileSync(aboutPath, 'utf8');
  const parsedFile = matter(file);
  const metadata: { [key: string]: unknown } = parsedFile.data;
  const { content } = parsedFile;

  return {
    props: {
      origin,
      about: {
        ...metadata,
        content,
      } as React.ComponentPropsWithoutRef<typeof About> & { title: string },
    },
  };
};
