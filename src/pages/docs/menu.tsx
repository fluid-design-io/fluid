import { MDXLayout, MenuExamples } from '@/components';
import { getPageProps } from '@/lib/getPageProps';
import React from 'react';

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
