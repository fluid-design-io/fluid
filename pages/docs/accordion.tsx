import React from "react";

import { AccordionExamples } from "../../components/accordion";
import MDXLayout from "../../components/mdx/MDXLayout";
import { getPageProps } from "../../lib/getPageProps";

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
    page: "accordion",
    folder: "/docs/accordion",
    locale,
  });
}