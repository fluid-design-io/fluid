const { i18n } = require('./next-i18next.config');
module.exports = {
  i18n,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/examples",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: false,
  trailingSlash: true,
}
