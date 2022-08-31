import { MDXLayout } from '@/components';
import { FormExamples } from '@/components';
import { getPageProps } from '@/lib/getPageProps';
import React from 'react';

function Page(props) {
  const { source, meta, slug } = props;
  const components = {
    FormExamples,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default Page;

export async function getStaticProps({ locale }) {
  return await getPageProps({
    page: 'input',
    folder: '/docs/form/',
    locale,
  });
}
