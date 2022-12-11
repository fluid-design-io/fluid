import React from 'react';

import { MDXLayout, TabExamples } from '@/components';
import { getPageProps } from '@/lib/getPageProps';

function TabPage(props) {
  const { source, meta, slug } = props;
  const components = {
    TabExamples,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default TabPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({ page: 'tab', locale });
}
