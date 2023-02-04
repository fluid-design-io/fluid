import { remarkCodeHike } from '@code-hike/mdx';
import { compile } from '@mdx-js/mdx';
import glob from 'fast-glob';
import * as path from 'path';
import remarkGfm from 'remark-gfm';
import theme from 'shiki/themes/dark-plus.json';

async function importArticle(docFilename) {
  const { meta, default: rawContent } = await import(
    `../pages/docs/${docFilename}`
  );
  console.log(`importing ${docFilename}...`);
  const content = String(
    await compile(rawContent, {
      remarkPlugins: [
        [remarkGfm],
        [
          remarkCodeHike,
          {
            theme,
            showCopyButton: true,
          },
        ],
      ],
    })
  );

  // slug should be the first part of the filename,
  // eg: test.en.mdx -> test
  const slug = docFilename.replace(/(\/index)?\.mdx$/, '');
  return {
    slug,
    meta,
    content,
  };
}

export const getAllDocs = async () => {
  const articleFilenames = await glob([`*.mdx`, `*/index.mdx`], {
    cwd: path.join(process.cwd(), 'src/pages/docs'),
  });
  console.log(`found ${articleFilenames.length} docs...`, articleFilenames);

  const docs = await Promise.all(articleFilenames.map(importArticle));
  console.log(docs.length);
  return docs;
};
