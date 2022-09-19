import React from 'react';

import { getPageProps } from '@/lib/getPageProps';

import { MDXLayout } from '@/components';
import AccordionSimpleComponent from '@/components/accordion/components/AccordionSimpleComponent';

function TestPage(props) {
  const { source, meta, slug } = props;
  const components = {
    AccordionSimpleComponent,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default TestPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({ page: 'test', folder: '/test', locale });
}