// @ts-check

import { createMdxtsPlugin } from 'mdxts/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // We configure `pageExtensions` to include MDX files
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/post/:slug',
        destination: '/articles/:slug',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

const withMDXTS = createMdxtsPlugin({
  theme: 'nord',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
});

export default withMDXTS(nextConfig);
