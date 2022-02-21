import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import { AccordionDivider, AccordionSimple } from "../../components/accordion";
export async function getStaticProps({ locale }) {
  console.log({ locale });
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "accordion",
      ])),
      // Will be passed to the page component as props
    },
  };
}
function AccordionPage() {
  const { t } = useTranslation("accordion");
  const meta: SiteMeta = {
    title: "Fluid Design Docs | " + t("accordion", { ns: "accordion" }),
    description:
      "accordions are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples.",
  };
  const sections = [
    {
      title: {
        raw: "Simple",
        transformed: t("Simple.title", { ns: "accordion" }),
      },
      component: <AccordionSimple />,
    },
    {
      title: {
        raw: "Divider",
        transformed: t("Divider.title", { ns: "accordion" }),
      },
      component: <AccordionDivider />,
    },
  ];

  return (
    <Doc
      meta={meta}
      title={t("accordion", { ns: "accordion" })}
      description={t("description", { ns: "accordion" })}
      className="min-h-screen"
      sections={sections}
    />
  );
}

export default AccordionPage;
