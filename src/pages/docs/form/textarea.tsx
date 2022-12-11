import React from 'react';

import { MDXLayout } from '@/components';
import { FormExamples } from '@/components';
import { getPageProps } from '@/lib/getPageProps';

function Page(props) {
  const { source, meta, slug } = props;
  const components = {
    Textarea: FormExamples.Textarea,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default Page;

export async function getStaticProps({ locale }) {
  return await getPageProps({
    page: 'textarea',
    folder: '/docs/form/',
    locale,
  });
}
