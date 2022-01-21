import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import UsageReqirement from "../../components/usage/UsageComponent";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar", "usage"])),
      // Will be passed to the page component as props
    },
  };
}
function UsagePage() {
  const { t } = useTranslation();
  const meta: SiteMeta = {
    title: "Fluid Design Docs | " + t("title", { ns: "usage" }),
    description:
      "Cards are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples.",
  };
  const sections = [
    {
      title: {
        raw: "requirements",
        transformed: t("requirements.title", { ns: "usage" }),
      },
      component: <UsageReqirement />,
    },
  ];

  return (
    <Doc
      meta={meta}
      title={t("title", { ns: "usage" })}
      className="min-h-screen"
      sections={sections}
    />
  );
}

export default UsagePage;
