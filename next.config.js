// @ts-check

// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

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

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
