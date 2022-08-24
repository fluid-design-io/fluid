import React from "react";

import { MDXLayout } from "../../components";
import { getPageProps } from "../../lib/getPageProps";

function TestPage(props) {
  const { source, meta, slug } = props;
  const components = {};
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default TestPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({ page: "usage", locale });
}
