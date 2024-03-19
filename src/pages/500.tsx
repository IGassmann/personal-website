import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

type ServerErrorPageProps = {
  origin: string;
};

const ServerErrorPage: NextPage<ServerErrorPageProps> = ({ origin }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Server Error"
        description="Something went wrong."
        openGraph={{
          title: 'Server Error',
          url: `${origin}${router.asPath}`,
        }}
      />
      <h1 className="text-xl font-medium text-cyan-500">Server Error</h1>
      <p>Oops, something went wrong.</p>
    </>
  );
};

export default ServerErrorPage;

export const getStaticProps: GetStaticProps<ServerErrorPageProps> = async () => {
  const {
    default: { origin },
  } = await import('@/site.config');

  return {
    props: {
      origin,
    },
  };
};
