import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Page from "../components/framework/Page";
import IndexIphoneFrame from "../components/instance/IndexIphoneFrame";
import FeatureCard from "../components/ui/FeatureCard";
import WindowFrame from "../components/WindowFrame";
import { SiteMeta } from "../interfaces/framwork";
import { featuresList, indexElements } from "../lib/index/data";
import bgDark from "../public/assets/index-bg-dark.jpg";
import bgLight from "../public/assets/index-bg-light.jpg";
import { SplitPane } from "react-multi-split-pane";
import Link from "next/link";
import { rawResponsiveCard } from "./examples/responsive-card";
import Code from "../util/Code";

export default function Home() {
  const [selected, setSelected] = useState("Card");
  const [isDragging, setIsDragging] = useState(false);
  const selectedStyle = (item) => {
    return selected === item
      ? `text-stone-900 dark:text-stone-800 bg-white dark:bg-stone-300 shadow`
      : `text-stone-500/80 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-100 hover:bg-stone-50/80 dark:hover:bg-stone-300/10 focus:text-stone-600 dark:focus:text-stone-100 focus:bg-stone-50/80 dark:focus:bg-stone-300/10`;
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
      className="px-2 py-1 space-y-1 text-sm border-t border-stone-50/60 dark:border-stone-500/30 md:text-base"
    >
      <li className="px-2 font-semibold pointer-events-none dark:text-stone-300 text-stone-600">
        {item.category}
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
            {list.name}
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
      <section className="relative pb-20 md:pb-40">
        <div className="absolute inset-0 z-0 hidden w-full overflow-hidden pointer-events-none filter blur-xl dark:block">
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
          <h5 className="block font-[Nunito] md:hidden pt-20 opacity-70 font-semibold px-4 dark:text-stone-100 ml-0 mr-auto text-base">
            FluidDesign
          </h5>
          <h1 className="w-4/5 max-w-4xl px-4 pt-2 text-3xl font-bold md:mx-auto dark:text-stone-100 md:text-6xl md:text-center md:pt-48 md:w-auto">
            Modern UI components with smooth transitions.
          </h1>
          <p className="px-4 mx-auto mt-6 md:text-center md:text-xl text-stone-500 dark:text-stone-300">
            Beautiful React UI that are{" "}
            <span className="font-mono font-medium text-stone-900 dark:text-stone-50">
              responsive
            </span>
            , supports features like{" "}<br className="hidden md:inline" />
            <span className="font-mono font-medium text-stone-900 dark:text-stone-50">
              dark mode
            </span>{" "}
            and{" "}
            <span className="font-mono font-medium text-stone-900 dark:text-stone-50">
              a11y
            </span>{" "}
            with elegant transitions.
          </p>
          <WindowFrame
            className={
              "mt-24 w-[80%] max-w-[680px] justify-center hidden md:flex mx-auto"
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
        className="px-4 mx-auto mt-8 text-center sm:px-8 max-w-7xl"
      >
        <h2 className="">
          "Looks right" <br className="block sm:hidden" /> {`isn't enough`}.
        </h2>
        <blockquote>
          <p className="px-4 mx-auto mt-6">
            {`Many UI libraries and component designs often only focus on the
            design and bare functionalities. They cover the majority of users'
            needs. However, some component designs may not suit users who rely
            on accessibility features like screen reader, high-contrast, and
            reduce-motion. Fluid Design aims to create components that works for
            all users.`}
          </p>
        </blockquote>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-5 lg:gap-6">
            {featuresList.map((list) => (
              <FeatureCard {...list} key={list.title} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="demo"
        className="px-4 mx-auto mt-24 sm:mt-32 md:mt-40 sm:px-8 max-w-7xl"
      >
        <h2 className="text-left">See it live.</h2>
        <p className="mt-4 text-stone-500 dark:text-stone-300">
          Powered by{" "}
          <span className="font-mono font-medium text-stone-900 dark:text-stone-50">
            tailwindcss
          </span>{" "}
          and{" "}
          <span className="font-mono font-medium text-stone-900 dark:text-stone-50">
            framer-motion
          </span>
          . Fluid Design merges these mordern framworks to create components
          that are highly customizable, by you.{" "}
          <span className="sm:hidden">
            (Try resize your screen to move the handle)
          </span>
        </p>
        <Link href={"/components"}>
          <button className="mt-6 primary-button">Browse more</button>
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
              className={`shadow w-full mx-auto`}
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
            className="mt-4 sm:mt-[-1rem] md:ml-[-0.875rem] h-[35vh] md:h-[320px] rounded-xl pt-6 max-w-[calc(100vw-2rem)] overflow-x-auto"
          />
        </div>
      </section>
    </Page>
  );
}
