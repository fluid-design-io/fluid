import Page from "../../components/framework/Page";
import { SiteMeta } from "../../interfaces/framwork";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CardStandardComponent } from "../../components/card";

import { useTranslation } from "next-i18next";
import { useState } from "react";
import CodeBlockNotification from "../../components/framework/CodeBlockNotification";
import {
  ImageCollageComponent,
  ImageOnlyComponent,
} from "../../components/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "index",
        "card",
        "image",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const GridWrap = ({ children, ...props }) => {
  return (
    <div className="flex items-center justify-center p-2 py-4 shadow-xl shadow-stone-800/[0.02] sm:py-2 bg-stone-50 dark:bg-stone-700 rounded-2xl">
      {children}
    </div>
  );
};

function ExamplesPage() {
  const { t } = useTranslation("common");
  const title = t("Examples");
  const meta: SiteMeta = {
    title: "Fluid Design | " + title,
  };
  const [notification, setNotification] = useState(undefined);
  const exampleComponents = [
    {
      title: t("Card"),
      href: "card",
      Component: CardStandardComponent,
    },
    {
      title: t("Collage"),
      href: "card",
      Component: ImageCollageComponent,
    },
    {
      title: t("Single Image"),
      href: "card",
      Component: ImageOnlyComponent,
    },
  ];
  return (
    <Page meta={meta} hasMain>
      <CodeBlockNotification
        onDismiss={() => setNotification(undefined)}
        notification={notification}
        className="!fixed"
      />
      <div className="flex-grow min-h-screen p-4 mx-auto max-w-7xl md:px-16 lg:px-8 xl:px-16">
        <main id="main" title={t(`doc-for`, { title })}>
          <h1 className="md:pt-12">{title}</h1>
          <p className="pb-6 text-lg md:text-xl"> List of examples </p>
          <div className="relative grid grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {exampleComponents.map(({ title, Component }) => (
              <GridWrap key={`example.${title}`}>
                <Component {...{ setNotification }} />
              </GridWrap>
            ))}
          </div>
        </main>
      </div>
    </Page>
  );
}

export default ExamplesPage;
