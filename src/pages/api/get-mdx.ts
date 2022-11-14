import { remarkCodeHike } from '@code-hike/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import theme from 'shiki/themes/dark-plus.json';

import getDocBySlug from '@/lib/getDocBySlug';

const fetchMdx = async ({ content }) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [remarkGfm],
        [
          remarkCodeHike,
          {
            autoImport: false,
            theme,
            showCopyButton: true,
            staticMediaQuery: 'not screen, (max-width: 1120px)',
          },
        ],
      ],
      useDynamicImport: true,
    },
  });
  return mdxSource;
};

export default async function handler(req, res) {
  const { body, method } = req;

  if (method === 'POST') {
    const { page, folder, locale } = body;

    const { content, meta, slug } = getDocBySlug(
      page,
      folder || `/docs/${page}`,
      locale
    );

    await fetchMdx({ content }).then((mdxSource) => {
      res.status(200).json({ mdxSource, meta, slug });
    });
  }
}
