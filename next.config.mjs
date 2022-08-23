import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import i18n from "./next-i18next.config.js";
import theme from "shiki/themes/github-dark.json" assert {type: "json"};
import { remarkCodeHike } from "@code-hike/mdx";



/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18n.i18n,
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
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm], [remarkCodeHike, { theme }]],
    rehypePlugins: [],
    providerImportSource: "next-mdx-remote",
  },
})


export default withMDX(nextConfig);