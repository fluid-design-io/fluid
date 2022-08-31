import React from 'react';

import { getPageProps } from '@/lib/getPageProps';

import { AccordionExamples, MDXLayout } from '@/components';

function AccordionPage(props) {
  const { source, meta, slug } = props;
  const components = {
    AccordionExamples,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default AccordionPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({
    page: 'accordion',
    locale,
  });
}
