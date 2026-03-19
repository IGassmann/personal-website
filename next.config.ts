import type { NextConfig } from 'next';
import nextMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Include MDX files in the output file tracing for serverless deployments (e.g., Vercel)
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
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
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['@mapbox/rehype-prism'],
  },
});

export default withMDX(nextConfig);
