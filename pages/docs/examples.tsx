import React from "react";

import { MDXLayout } from "../../components";
import { getPageProps } from "../../lib/getPageProps";
import { Examples } from "../../components/Examples";

function TestPage(props) {
  const { source, meta, slug } = props;
  const components = {
    Examples,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default TestPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({
    page: "examples",
    locale,
  });
}
