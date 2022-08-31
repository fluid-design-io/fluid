import React from 'react';

import { getPageProps } from '@/lib/getPageProps';

import { MDXLayout, MenuExamples } from '@/components';

function ButtonPage(props) {
  const { source, meta, slug } = props;
  const components = {
    MenuExamples,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default ButtonPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({ page: 'menu', locale });
}
