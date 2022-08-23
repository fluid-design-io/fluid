import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import cn from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Slugger from "github-slugger";
import { useTranslation } from "next-i18next";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

import clsxm from "../../lib/clsxm";
import { ActiveAnchor, useActiveAnchor } from "../contexts";

export function getHeadingText(heading: any) {
  return heading?.text ? heading.text : "";
}

function OrdedListItem({
  heading,
  text,
  slug,
  activeAnchor,
}: {
  heading: any;
  text: string;
  slug: string;
  activeAnchor: ActiveAnchor;
}): ReactElement {
  const state = activeAnchor[slug];
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    const [toc] = document.getElementsByClassName("fluid-toc");
    if (state?.isActive && el && toc) {
      scrollIntoView(el, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: toc,
      });
    }
  }, [state?.isActive]);
  return (
    <li
      className={cn(
        "scroll-my-6 scroll-py-6",
        {
          1: "",
          2: "",
          3: "ml-4",
          4: "ml-8",
          5: "ml-12",
          6: "ml-16",
        }[heading.depth || 1]
      )}
      ref={ref}
    >
      <a
        href={`#${slug}`}
        className={cn(
          "inline-block no-underline px-1 py-0.5 rounded contrast-more:hocus:contrast-bg contrast-more:hocus:contrast-text",
          heading?.depth === 2 && "font-semibold",
          state?.isActive
            ? "text-primary-800 dark:text-primary-100 subpixel-antialiased contrast-more:contrast-ring contrast-more:contrast-bg contrast-more:contrast-text"
            : "text-primary-500 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
        )}
      >
        {text}
      </a>
    </li>
  );
}

const ListItem = ({
  heading,
  slug,
  text,
  activeAnchor,
  handleClose,
}: {
  heading: any;
  slug: string;
  text: string;
  activeAnchor: ActiveAnchor;
  handleClose: () => void;
}) => {
  const state = activeAnchor[`${slug.slice(0, -2)}`];
  return (
    <li className="doc-nav">
      <a
        href={`#${slug.slice(0, -2)}`}
        className={clsxm(
          "w-full hocus:bg-primary-50/75 dark:hocus:bg-primary-900/75 rounded-md px-2 py-0.5 -mx-2 -my-0.5 transition capitalize",
          state?.isActive &&
            "font-medium text-primary-800 dark:text-primary-100"
        )}
        aria-selected={state?.isActive}
        onClick={handleClose}
      >
        {text}
      </a>
    </li>
  );
};

export function TOC(): ReactElement {
  const { t } = useTranslation("common");
  const slugger = new Slugger();
  const anchors = useActiveAnchor();
  const [showMoblieDoc, setShowMoblieDoc] = useState(false);

  const headings = Object.keys(anchors).map((anchor) => ({
    index: anchors[anchor].index,
    depth: anchors[anchor].depth,
    value: anchor,
    text: anchors[anchor]?.text,
  }));

  const hasHeadings = headings.length > 0;

  const activeHeading = (hasHeadings &&
    headings.find((heading) => {
      return anchors[heading.value]?.isActive;
    })) || {
    index: 0,
    depth: 1,
    text: t("On this page"),
  };
  return (
    <>
      <div className="fluid-toc order-last hidden xl:w-44 2xl:w-64 flex-shrink-0 pr-4 text-sm xl:block">
        <div className="fluid-toc-content sticky top-16 -mr-4 max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto pr-4 pt-8">
          {hasHeadings && (
            <ul>
              <p className="mb-4 font-semibold tracking-tight">
                {t(`On this page`)}
              </p>
              {headings.map((heading) => {
                const slug = slugger.slug(heading.text);

                return (
                  <OrdedListItem
                    heading={heading}
                    activeAnchor={anchors}
                    slug={slug}
                    text={heading.text}
                    key={slug}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
      {/* For mobile */}
      <Popover
        as="div"
        className="fluid-toc-mobile order-first fixed z-30 top-[4.25rem] w-[-webkit-fill-available] md:top-[3.3rem] xl:hidden border-b border-b-primary-200 dark:border-b-primary-700 backdrop-filter backdrop-blur-xl bg-primary-100/80 dark:bg-primary-800/60 contrast-more:bg-primary-100/90 dark:contrast-more:bg-black/80"
      >
        <Popover.Button
          role={`button`}
          className="flex w-full items-center justify-between flex-shrink-0 text-sm mobile-doc-nav py-1.5 px-4 sm:px-6 [-webkit-tap-highlight-color:transparent] focus-ring"
          tabIndex={0}
          onClick={() => setShowMoblieDoc(!showMoblieDoc)}
        >
          <span className="sr-only">{t(`Expand section list`)}</span>
          <p>{getHeadingText(activeHeading)}</p>
          <ChevronDownIcon className="w-5 h-5 text-primary-500 dark:text-primary-300 contrast-more:text-primary-800 dark:contrast-more:text-primary-200" />
        </Popover.Button>
        <AnimatePresence>
          {showMoblieDoc && (
            <Popover.Panel
              static
              as={motion.div}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{
                type: "spring",
                bounce: 0.2,
              }}
              className="doc-nav-expand contrast-more:font-semibold px-4 sm:px-6 overflow-hidden"
            >
              <div className="mt-1.5 pb-4">
                {headings.map((heading) => {
                  const slug = slugger.slug(heading.text);
                  return (
                    <ListItem
                      heading={heading}
                      activeAnchor={anchors}
                      slug={slug}
                      text={heading.text}
                      handleClose={() => setShowMoblieDoc(false)}
                      key={`${slug}-mobile`}
                    />
                  );
                })}
              </div>
            </Popover.Panel>
          )}
        </AnimatePresence>
      </Popover>
    </>
  );
}
