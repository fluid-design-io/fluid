import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import { TextButton } from "../../components/button";
export async function getStaticProps({ locale }) {
  console.log({ locale });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar", "button"])),
      // Will be passed to the page component as props
    },
  };
}
function ButtonPage() {
  const { t } = useTranslation("button");
  const meta: SiteMeta = {
    title: "Fluid Design | " + t("Button", { ns: "button" }),
    description:
      "Buttons provide a clickable element that can be used in forms or anywhere simple, standard button functionality is required. They can show text, icons, or both. Buttons can be styled with a variety of attributes to look a certain way.",
  };
  const sections = [
    {
      title: {
        raw: "Button Studio",
        transformed: t("Button Studio.title", { ns: "button" }),
      },
      component: <TextButton />,
    },
  ];

  return (
    <Doc
      meta={meta}
      title={t("Button")}
      description={t("description", { ns: "button" })}
      className="min-h-screen"
      sections={sections}
    />
  );
}

export default ButtonPage;
