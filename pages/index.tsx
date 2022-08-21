import React, { useState } from "react";
import Link from "next/link";
import Code from "../util/Code";
import { Page } from "../components/framework";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useTranslation, Trans } from "next-i18next";
import { SplitPane } from "react-multi-split-pane";
import { rawResponsiveCard } from "./examples/responsive-card";
import { SiteMeta } from "../interfaces/framwork";
import { featuresList, indexElements } from "../lib/index/data";
import IndexIphoneFrame from "../components/instance/IndexIphoneFrame";
import FeatureCard from "../components/ui/FeatureCard";
import WindowFrame from "../components/WindowFrame";
import bgDark from "../public/assets/index-bg-dark.jpg";
import bgLight from "../public/assets/index-bg-light.jpg";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("Card");
  const [isDragging, setIsDragging] = useState(false);
  const selectedStyle = (item) => {
    return selected === item
      ? `text-primary-900 dark:text-primary-800 bg-white dark:bg-primary-300 shadow`
      : `text-primary-500/80 dark:text-primary-400 contrast-more:text-primary-600 dark:contrast-more:text-primary-300 hover:text-primary-600 dark:hover:text-primary-100 hover:bg-primary-50/80 dark:hover:bg-primary-300/10 focus:text-primary-600 dark:focus:text-primary-100 focus:bg-primary-50/80 dark:focus:bg-primary-300/10`;
  };
  const selectedComponent = (selected) => {
    let match = [];
    indexElements.forEach(
      (item) =>
        (match = match.concat(
          item.lists.filter((list) => list.name === selected)
        ))
    );
    return match[0]?.component;
  };
  const selectionBody = indexElements.map((item) => (
    <ul
      key={item.category}
      className="space-y-1 border-t border-primary-50/60 px-2 py-1 text-sm dark:border-primary-500/30 md:!text-base"
    >
      <li className="pointer-events-none px-2 font-semibold text-primary-600 dark:text-primary-300">
        {t(item.category)}
      </li>
      {item.lists.map((list) => (
        <li key={`body.${list.name}`}>
          <button
            onClick={() => {
              setSelected(list.name);
            }}
            className={`${selectedStyle(
              list.name
            )} w-full overflow-hidden rounded-md px-2 py-1 text-left transition focus:outline-none focus:ring-1 focus:ring-primary-200/50 dark:focus:ring-primary-50`}
          >
            {t(list.name)}
          </button>
        </li>
      ))}
    </ul>
  ));

  const meta: SiteMeta = {
    title: "Fluid Design",
    description:
      "Beautiful React components that are responsive, supports features like dark mode and a11y with elegant transitions.",
  };

  return (
    <Page meta={meta} sidebar={false} className="">
      <section className="relative pb-20 md:!pb-40">
        <div className="pointer-events-none absolute inset-0 z-0 hidden w-full overflow-hidden blur-xl filter dark:!block">
          <Image
            alt="background blur"
            src={bgDark}
            className="w-full"
            layout="responsive"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 block w-full overflow-hidden blur-xl filter dark:hidden">
          <Image
            alt="background blur"
            src={bgLight}
            className="w-full"
            layout="responsive"
          />
        </div>
        <div className="relative z-[1]">
          <h5 className="ml-0 mr-auto block px-4 pt-20 font-[Nunito] text-base font-semibold opacity-70 dark:text-primary-100 md:!hidden">
            Fluid Design
          </h5>
          <h1 className="w-4/5 max-w-4xl px-4 pt-2 text-3xl font-bold dark:text-primary-100 md:!mx-auto md:!w-auto md:!pt-48 md:!text-center md:!text-6xl">
            {t("slogan")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl px-4 text-primary-500 dark:text-primary-300 md:!text-center md:!text-xl">
            <Trans
              i18nKey={`site-desc`}
              ns="common"
              components={{
                span: (
                  <span className="font-mono font-medium text-primary-900 dark:text-primary-50" />
                ),
              }}
            />
          </p>
          <WindowFrame
            className={
              "mx-auto mt-24 hidden w-[80%] max-w-[680px] justify-center md:!flex"
            }
            sidebar={selectionBody}
            content={
              <AnimatePresence mode="wait">
                {selectedComponent(selected)}
              </AnimatePresence>
            }
          />
          <IndexIphoneFrame
            selected={selected}
            selectedComponent={selectedComponent}
            selectedStyle={selectedStyle}
            setSelected={setSelected}
          />
        </div>
      </section>
      <section
        id="features"
        className="mx-auto mt-8 max-w-7xl text-center sm:px-8"
      >
        <h1 className="not-prose legacy">
          <Trans
            i18nKey={"looks-right-isnt-enough.title"}
            ns={"index"}
            components={{ br: <br className="block sm:!hidden" /> }}
          />
        </h1>
        <blockquote className="px-4 sm:px-0">
          <p className="mx-auto mt-6 max-w-2xl px-4 lg:text-lg">
            {t("looks-right-isnt-enough.body", { ns: "index" })}
          </p>
        </blockquote>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {featuresList.map((list) => (
              <FeatureCard {...list} key={list.title} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="demo"
        className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-8 md:!mt-40"
      >
        <h1 className="text-left legacy">{t("see-it-live", { ns: "index" })}</h1>
        <p className="mt-4 max-w-2xl text-primary-500 dark:text-primary-300 lg:text-lg">
          <Trans
            ns="index"
            i18nKey={"powered-by"}
            components={{
              span: (
                <span className="font-mono font-medium text-primary-900 dark:text-primary-50" />
              ),
            }}
          />
        </p>
        <Link href="/docs">
          <button className="primary-button mt-6">{t("browse-more")}</button>
        </Link>
        <div className="mt-8">
          <SplitPane
            split="vertical"
            onDragStarted={() => setIsDragging(true)}
            onDragFinished={() => setIsDragging(false)}
            // defaultSizes={[1, 0]}
            minSize={[336, 24]}
            className="!relative mx-auto !flex-col !overflow-visible sm:!flex-row"
            // maxSize={"calc(100% - 16px)"}
          >
            <WindowFrame
              className={`mx-auto w-full shadow dark:!bg-[#353330]`}
              content={
                <iframe
                  src="/examples/responsive-card"
                  className={`h-[496px] w-full ${
                    isDragging ? "pointer-events-none" : ""
                  }`}
                />
              }
            />
            <div></div>
          </SplitPane>

          <Code
            content={rawResponsiveCard}
            className="mt-4 h-[35vh] max-w-[calc(100vw-2rem)] overflow-x-auto rounded-xl bg-primary-800 pt-6 contrast-more:!bg-black dark:bg-primary-900 sm:mt-[-1rem] md:!ml-[-0.875rem] md:!h-[320px]"
          />
        </div>
      </section>
    </Page>
  );
}
