import { remarkCodeHike } from "@code-hike/mdx";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import theme from "shiki/themes/github-dark.json" assert {type: "json"};



/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: false,
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    scrollRestoration: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm], [remarkCodeHike, {
      theme,
      showCopyButton: true,
    }]],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})


export default withMDX(nextConfig);