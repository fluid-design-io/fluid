import { remarkCodeHike } from "@code-hike/mdx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import theme from "shiki/themes/dark-plus.json";

import getDocBySlug from "../lib/getDocBySlug";

export const getPageProps = async ({
  page = "test",
  folder = `/docs/${page}`,
  locale,
}) => {
  const { content, meta, slug } = getDocBySlug(page, folder, locale);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [remarkGfm],
        [
          remarkCodeHike,
          {
            autoImport: false,
            theme,
            // lineNumbers: true,
            showCopyButton: true,
            staticMediaQuery: "not screen, (max-width: 1120px)",
          },
        ],
      ],
      useDynamicImport: true,
    },
  });
  return {
    props: {
      source: mdxSource,
      meta,
      slug,
      // Translation
      ...(await serverSideTranslations(locale, [
        "common",
        "button",
        "navbar",
        "index",
        "card",
        "image",
        "list",
      ])),
    },
  };
};
