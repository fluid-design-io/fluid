import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Doc from "../../components/framework/Doc";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import { GlassButton, TextButton } from "../../components/button";
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
    title: "Fluid Design Docs | " + t("Button", { ns: "button" }),
    description:
      "Buttons provide a clickable element that can be used in forms or anywhere simple, standard button functionality is required. They can show text, icons, or both. Buttons can be styled with a variety of attributes to look a certain way.",
  };
  const sections = [
    {
      title: {
        raw: "Customizer",
        transformed: t("Button Studio.title", { ns: "button" }),
      },
      description: (
        <p>
          <Trans as="p" i18nKey={"Button Studio.description"} ns={"button"} />
        </p>
      ),
      component: <TextButton />,
    },
    {
      title: {
        raw: "Glass Button",
        transformed: t("Glass Button.title", { ns: "button" }),
      },
      description: t("Glass Button.description", { ns: "button" }),
      component: <GlassButton />,
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
