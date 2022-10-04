// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  distDir: './dist/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
