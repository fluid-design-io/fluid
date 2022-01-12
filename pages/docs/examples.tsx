import Page from "../../components/framework/Page";
import { SiteMeta } from "../../interfaces/framwork";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  CardASLargeImageComponent,
  CardStandardComponent,
} from "../../components/card";

import { useTranslation } from "next-i18next";
import { useState } from "react";
import CodeBlockNotification from "../../components/framework/CodeBlockNotification";
import {
  ImageCollageComponent,
  ImageGridComponent,
  ImageOnlyComponent,
  ImageWithOverlayComponent,
} from "../../components/image";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

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

const GridWrap = ({ title, href, children, router, rowSpan, ...props }) => {
  return (
    <div
      className={`relative flex items-center justify-center py-4 sm:py-2 rounded-3xl grid-wrap ${
        rowSpan ? `row-span-1` : `row-span-2`
      }`}
    >
      <button
        className="absolute -left-2 -top-1.5 rounded-full bg-stone-100/60 dark:bg-stone-900/30 backdrop-filter backdrop-blur-md border border-stone-50/50 dark:border-stone-50/20 shadow-md shadow-stone-900/5 text-stone-900 dark:text-stone-200 prefers-contrast:bg-stone-50/90 dark:prefers-contrast:bg-stone-900/90 prefers-contrast:border-stone-800 dark:prefers-contrast:border-sonte-200 z-10 px-2 py-1 transition font-semibold uppercase grid-title tracking-wide backdrop-brightness-110 flex items-center justify-start space-x-0 hover:bg-stone-100 dark:hover:bg-stone-900"
        onClick={() => router.push(`/docs${href}`)}
        aria-label={`Navigate to this ${title} component.`}
      >
        <span className="text-xs prefers-contrast:text-sm">{title}</span>
        <ChevronRightIcon className="w-3.5 h-3.5" />
      </button>
      {children}
    </div>
  );
};

function ExamplesPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const title = t("Examples");
  const meta: SiteMeta = {
    title: "Fluid Design | " + title,
  };
  const [notification, setNotification] = useState(undefined);
  const exampleComponents = [
    {
      title: t("Card"),
      href: "/card/#standard",
      Component: CardStandardComponent,
      src: "https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: t("Collage"),
      href: "/image/#collage",
      Component: ImageCollageComponent,
      srcs: [
        "https://images.unsplash.com/photo-1559770968-53924e9b32de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      ],
    },
    {
      title: t("Single Image"),
      href: "/image/#single-image",
      Component: ImageOnlyComponent,
      rowSpan: 1,
      className: "max-w-md shadow-xl h-full aspect-[2.16/1] rounded-3xl",
      src: "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: t("Image With Text"),
      href: "/image/#single-image",
      Component: ImageWithOverlayComponent,
      className: "max-w-md shadow-xl h-full aspect-[2.16/1] rounded-3xl",
      rowSpan: 1,
      src: "https://images.unsplash.com/photo-1620245605605-8ab2cdd2ba91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: t("App Store.title", { ns: "card" }),
      href: "/card/#app-store",
      Component: CardASLargeImageComponent,
      srcs: [
        "https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1628432436663-9e588806592a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1540760938999-077b8231d890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      ],
    },
    {
      title: t("Grid"),
      href: "/image/#grid",
      Component: ImageGridComponent,
      rowSpan: 1,
      className: "max-w-md shadow-xl h-full aspect-[2.16/1] rounded-3xl",
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
          <div className="relative grid items-stretch max-w-xs grid-cols-1 gap-4 mx-auto sm:gap-12 sm:max-w-full md:max-w-sm lg:max-w-2xl xl:max-w-7xl sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 xl:gap-12">
            {exampleComponents.map(
              ({ title, href, className, rowSpan, Component, ...props }) => (
                <GridWrap
                  key={`example.${title}`}
                  title={title}
                  href={href}
                  router={router}
                  rowSpan={rowSpan}
                >
                  <Component
                    {...{
                      setNotification,
                      className:
                        className ||
                        "max-w-md shadow-xl h-full aspect-[1/1.16] rounded-3xl",
                      ...props,
                    }}
                  />
                </GridWrap>
              )
            )}
          </div>
        </main>
      </div>
    </Page>
  );
}

export default ExamplesPage;
