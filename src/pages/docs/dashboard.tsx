import React from 'react';

import { getPageProps } from '@/lib/getPageProps';

import { Dashboard,MDXLayout } from '@/components';

function TestPage(props) {
  const { source, meta, slug } = props;
  const components = {
    Dashboard,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default TestPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({
    page: 'dashboard',
    locale,
  });
}
