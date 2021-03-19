module.exports = {
  distDir: './dist/',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      }
    ];
  },
};