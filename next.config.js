module.exports = {
  distDir: './dist/',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./build/generateSitemap');
    }

    return config;
  }
};