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
  ImageBGResponsiveComponent,
  ImageCollageComponent,
  ImageGridComponent,
  ImageOnlyComponent,
  ImageWithOverlayComponent,
} from "../../components/image";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { ListDetailComponent } from "../../components/list";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "index",
        "card",
        "image",
        "list",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const GridWrap = ({
  title,
  href,
  children,
  router,
  rowSpan = undefined,
  colSpan = undefined,
  ...props
}) => {
  return (
    <div
      className={`relative flex items-center justify-center py-4 sm:py-2 rounded-3xl grid-wrap ${
        colSpan ? colSpan : ``
      } ${rowSpan ? `row-span-1` : `row-span-2`} 
      `}
    >
      <button
        className="absolute -left-2 -top-1.5 rounded-full bg-stone-100/60 dark:bg-stone-900/30 backdrop-filter backdrop-blur-md border border-stone-50/50 dark:border-stone-50/20 shadow-md shadow-stone-900/5 text-stone-900 dark:text-stone-200 contrast-more:bg-stone-50/90 dark:contrast-more:bg-stone-900/90 contrast-more:border-stone-800 dark:contrast-more:border-sonte-200 z-10 px-2 py-1 transition font-semibold uppercase grid-title tracking-wide backdrop-brightness-110 flex items-center justify-start space-x-0 hover:bg-stone-100 dark:hover:bg-stone-900 contrast-more:top-0.5"
        onClick={() => router.push(`/docs${href}`)}
        aria-label={`Navigate to this ${title} component.`}
      >
        <span className="text-xs contrast-more:text-sm">{title}</span>
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
    title: "Fluid Design Docs | " + title,
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
      title: t("Collage", { ns: "image" }),
      href: "/image/#collage",
      Component: ImageCollageComponent,
      srcs: [
        "https://images.unsplash.com/photo-1559770968-53924e9b32de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      ],
    },
    {
      title: t("Single Image", { ns: "image" }),
      href: "/image/#single-image",
      Component: ImageOnlyComponent,
      rowSpan: 1,
      className: "max-w-md shadow-xl h-full aspect-[2.16/1] rounded-3xl",
      src: "https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: t("with-overlay.title", { ns: "image" }),
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
      title: t("Background", { ns: "image" }),
      href: "/image/#background",
      Component: ImageBGResponsiveComponent,
      colSpan: "col-span-1 lg:col-span-2",
      className: "shadow-xl h-full rounded-3xl overflow-hidden",
    },
    {
      title: t("Grid", { ns: "image" }),
      href: "/image/#grid",
      Component: ImageGridComponent,
      rowSpan: 1,
      className: "max-w-md shadow-xl h-full aspect-[2.16/1] rounded-3xl",
    },
    {
      title: t("List", { ns: "list" }),
      href: "/list/#detail",
      Component: ListDetailComponent,
      className: "max-w-md shadow-xl h-full !rounded-3xl example",
    },
  ];
  return (
    <Page meta={meta} hasMain>
      <CodeBlockNotification
        onDismiss={() => setNotification(undefined)}
        notification={notification}
        className="!fixed"
      />
      <div className="flex-grow min-h-screen p-4 mx-auto xl:max-w-[76rem] md:!px-16 lg:px-8 xl:px-16">
        <main id="main" title={t(`doc-for`, { title })}>
          <h1 className="md:!pt-12">{title}</h1>
          <p className="pb-6 text-lg md:!text-xl"> {t(`list-of-examples`)} </p>
          <div className="relative grid items-stretch mx-auto grid-cols-1 max-w-xs lg:max-w-2xl lg:grid-cols-2 xl:max-w-none xl:grid-cols-3 md:!gap-6 lg:gap-8 xl:gap-12 grid-flow-row-dense grid-rows-[16]">
            {exampleComponents.map(({ className, Component, ...props }) => (
              <GridWrap
                key={`example.${props.title}`}
                router={router}
                {...props}
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
            ))}
          </div>
        </main>
      </div>
    </Page>
  );
}

export default ExamplesPage;
