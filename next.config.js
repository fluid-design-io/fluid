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
  reactStrictMode: false,
}
