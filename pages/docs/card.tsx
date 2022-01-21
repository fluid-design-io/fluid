import { SiteMeta } from "../../interfaces/framwork";
import React from "react";
import Link from "next/link";
import Doc from "../../components/framework/Doc";
import { CardAppStore, CardCollage, CardStandard } from "../../components/card";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
export async function getStaticProps({ locale }) {
  console.log({ locale });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar", "card"])),
      // Will be passed to the page component as props
    },
  };
}
function CardPage() {
  const { t } = useTranslation("card");
  const meta: SiteMeta = {
    title: "Fluid Design Docs | " + t("Card", { ns: "card" }),
    description:
      "Cards are a standard piece of UI and are widely used accross many use cases. It can contain one or multiple elements, components below shows varianties of examples.",
  };
  const sections = [
    {
      title: {
        raw: "Standard",
        transformed: t("Standard.title", { ns: "card" }),
      },
      component: <CardStandard />,
    },
    {
      title: {
        raw: "App Store",
        transformed: t("App Store.title", { ns: "card" }),
      },
      component: <CardAppStore />,
    },
    {
      title: {
        raw: "Collage",
        transformed: t("Collage.title", { ns: "card" }),
      },
      description: (
        <Trans
          i18nKey={"Collage.desc"}
          components={{
            p: <p />,
            a: <a href={`/components/image#collage`} />,
          }}
          ns="card"
        />
      ),
      component: <CardCollage />,
    },
  ];

  return (
    <Doc
      meta={meta}
      title={t("Card", { ns: "card" })}
      description={t("description", { ns: "card" })}
      className="min-h-screen"
      sections={sections}
    />
  );
}

export default CardPage;
