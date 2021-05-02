module.exports = {
  future: { webpack5: true },
  reactStrictMode: true,
  distDir: './dist/',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./build/generateSitemap');
    }

    return config;
  }
};