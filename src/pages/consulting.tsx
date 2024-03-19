import fs from 'fs';
import { join } from 'path';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';

type ConsultingPageProps = {
  origin: string;
  consulting: { title: string; content: string };
};

const ConsultingPage: NextPage<ConsultingPageProps> = ({ origin, consulting }) => {
  const { title, content } = consulting;

  const router = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        description="Consulting Igor Gassmann"
        openGraph={{
          url: `${origin}${router.asPath}`,
          title,
        }}
      />
      <div className="-mt-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default ConsultingPage;

export const getStaticProps: GetStaticProps<ConsultingPageProps> = async () => {
  const {
    default: { origin },
  } = await import('@/site.config');

  const consultingPath = join(process.cwd(), 'src', 'content', 'consulting.md');
  const file = fs.readFileSync(consultingPath, 'utf8');
  const parsedFile = matter(file);
  const metadata: { [key: string]: unknown } = parsedFile.data;
  const { content } = parsedFile;

  return {
    props: {
      origin,
      consulting: {
        ...metadata,
        content,
      } as { title: string; content: string },
    },
  };
};
