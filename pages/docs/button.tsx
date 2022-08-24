import { Button, Form, Switch } from "@fluid-design/fluid-ui";
import React from "react";

import { MDXLayout, ButtonExamples } from "../../components";
import { getPageProps } from "../../lib/getPageProps";

function ButtonPage(props) {
  const { source, meta, slug } = props;
  const components = {
    Form,
    Button,
    Switch,
    ButtonExamples,
  };
  return <MDXLayout {...{ source, meta, slug, components }} />;
}
export default ButtonPage;

export async function getStaticProps({ locale }) {
  return await getPageProps({ page: "button", locale });
}
