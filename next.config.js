module.exports = {
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/components/examples",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: false,
}
