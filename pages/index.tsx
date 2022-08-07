import React, { useState } from "react";
import Link from "next/link";
import Code from "../util/Code";
import Page from "../components/framework/Page";
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
      ? `text-stone-900 dark:text-stone-800 bg-white dark:bg-stone-300 shadow`
      : `text-stone-500/80 dark:text-stone-400 contrast-more:text-stone-600 dark:contrast-more:text-stone-300 hover:text-stone-600 dark:hover:text-stone-100 hover:bg-stone-50/80 dark:hover:bg-stone-300/10 focus:text-stone-600 dark:focus:text-stone-100 focus:bg-stone-50/80 dark:focus:bg-stone-300/10`;
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
      className="px-2 py-1 space-y-1 text-sm border-t border-stone-50/60 dark:border-stone-500/30 md:!text-base"
    >
      <li className="px-2 font-semibold pointer-events-none dark:text-stone-300 text-stone-600">
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
            )} px-2 py-1 transition w-full text-left rounded-md overflow-hidden focus:outline-none focus:ring-1 focus:ring-stone-200/50 dark:focus:ring-stone-50`}
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
        <div className="absolute inset-0 z-0 hidden w-full overflow-hidden pointer-events-none filter blur-xl dark:!block">
          <Image
            alt="background blur"
            src={bgDark}
            className="w-full"
            layout="responsive"
          />
        </div>
        <div className="absolute inset-0 z-0 block w-full overflow-hidden pointer-events-none filter blur-xl dark:hidden">
          <Image
            alt="background blur"
            src={bgLight}
            className="w-full"
            layout="responsive"
          />
        </div>
        <div className="z-[1] relative">
          <h5 className="block font-[Nunito] md:!hidden pt-20 opacity-70 font-semibold px-4 dark:text-stone-100 ml-0 mr-auto text-base">
            FluidDesign
          </h5>
          <h1 className="w-4/5 max-w-4xl px-4 pt-2 text-3xl font-bold md:!mx-auto dark:text-stone-100 md:!text-6xl md:!text-center md:!pt-48 md:!w-auto">
            {t("slogan")}
          </h1>
          <p className="px-4 mx-auto mt-6 md:!text-center md:!text-xl text-stone-500 dark:text-stone-300">
            <Trans
              i18nKey={`site-desc`}
              ns="common"
              components={{
                span: (
                  <span className="font-mono font-medium text-stone-900 dark:text-stone-50" />
                ),
              }}
            />
          </p>
          <WindowFrame
            className={
              "mt-24 w-[80%] max-w-[680px] justify-center hidden md:!flex mx-auto"
            }
            sidebar={selectionBody}
            content={
              <AnimatePresence exitBeforeEnter>
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
        className="mx-auto mt-8 text-center sm:px-8 max-w-7xl"
      >
        <h1>
          <Trans
            i18nKey={"looks-right-isnt-enough.title"}
            ns={"index"}
            components={{ br: <br className="block sm:!hidden" /> }}
          />
        </h1>
        <blockquote className="px-4 sm:px-0">
          <p className="px-4 mx-auto mt-6">
            {t("looks-right-isnt-enough.body", { ns: "index" })}
          </p>
        </blockquote>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
            {featuresList.map((list) => (
              <FeatureCard {...list} key={list.title} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="demo"
        className="px-4 mx-auto mt-24 sm:mt-32 md:!mt-40 sm:px-8 max-w-7xl"
      >
        <h1 className="text-left">{t("see-it-live", { ns: "index" })}</h1>
        <p className="mt-4 text-stone-500 dark:text-stone-300">
          <Trans
            ns="index"
            i18nKey={"powered-by"}
            components={{
              span: (
                <span className="font-mono font-medium text-stone-900 dark:text-stone-50" />
              ),
            }}
          />
        </p>
        <Link href={"/docs"}>
          <button className="mt-6 primary-button">{t("browse-more")}</button>
        </Link>
        <div className="mt-8">
          <SplitPane
            split="vertical"
            onDragStarted={() => setIsDragging(true)}
            onDragFinished={() => setIsDragging(false)}
            // defaultSizes={[1, 0]}
            minSize={[336, 24]}
            className="!relative mx-auto !flex-col sm:!flex-row !overflow-visible"
            // maxSize={"calc(100% - 16px)"}
          >
            <WindowFrame
              className={`shadow w-full mx-auto dark:!bg-[#353330]`}
              content={
                <iframe
                  src="/examples/responsive-card"
                  className={`w-full h-[496px] ${
                    isDragging ? "pointer-events-none" : ""
                  }`}
                />
              }
            />
            <div></div>
          </SplitPane>

          <Code
            content={rawResponsiveCard}
            className="mt-4 sm:mt-[-1rem] md:!ml-[-0.875rem] h-[35vh] md:!h-[320px] rounded-xl pt-6 max-w-[calc(100vw-2rem)] overflow-x-auto bg-stone-800 dark:bg-stone-900 contrast-more:!bg-black"
          />
        </div>
      </section>
    </Page>
  );
}
