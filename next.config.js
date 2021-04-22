module.exports = {
  reactStrictMode: true,
  distDir: './dist/',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./build/generateSitemap');
    }

    return config;
  }
};