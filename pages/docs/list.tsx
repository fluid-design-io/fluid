import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import { ListDetail, ListSimple } from "../../components/list";
export async function getStaticProps({ locale }) {
  console.log({ locale });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar", "list"])),
      // Will be passed to the page component as props
    },
  };
}
function ListPage() {
  const { t } = useTranslation("list");
  const meta: SiteMeta = {
    title: "Fluid Design Docs | " + t("List", { ns: "list" }),
    description:
      "lists are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples.",
  };
  const sections = [
    {
      title: {
        raw: "Simple",
        transformed: t("Simple.title", { ns: "list" }),
      },
      component: <ListSimple />,
    },
    {
      title: {
        raw: "Detail",
        transformed: t("Detail.title", { ns: "list" }),
      },
      component: <ListDetail />,
    },
  ];

  return (
    <Doc
      meta={meta}
      title={t("List", { ns: "list" })}
      description={t("description", { ns: "list" })}
      className="min-h-screen"
      sections={sections}
    />
  );
}

export default ListPage;
