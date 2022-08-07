import { Tab } from "@headlessui/react";
import {
  BeakerIcon,
  CheckCircleIcon,
  ClipboardIcon,
  CodeIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  EyeIcon,
} from "@heroicons/react/solid";
import { motion, useReducedMotion } from "framer-motion";
import { CodeBlockProps } from "../../interfaces/CodeBlock";
import Code from "../../util/Code";
import ComponentFeatures from "./ComponentFeatures";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import CodeBlockNotification from "./CodeBlockNotification";
import SplitView from "./SplitView";
import clsxm from "../../lib/clsxm";

function CodeBlock({
  title,
  raw,
  features = undefined,
  notification = undefined,
  onDismiss = null,
  iframe = null,
  children = null,
  ...props
}: CodeBlockProps) {
  const [isCoping, setIsCoping] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation("common");
  const touchStyle =
    "pointer-touch:opacity-100 pointer-touch:pointer-events-auto opacity-0 pointer-events-none code-block-touch ";
  const buttonStyle =
    "rounded-md motion-safe:transition relative z-[5] focus-ring ";
  const panels = [
    {
      name: "Features",
      Icon: BeakerIcon,
      component: <ComponentFeatures features={features} />,
    },
    {
      name: "Preview",
      Icon: EyeIcon,
      component: children || (
        <SplitView iframe={iframe} className="min-h-[28rem]" />
      ),
    },
    {
      name: "Code",
      Icon: CodeIcon,
      component: (
        <div className="relative grid w-full">
          {/* max-h-[max(calc(80vh-61px),400px)] sm:max-h-[max(80vh,720px)] */}
          <Code
            content={raw}
            className="w-full flex-shrink !bg-transparent z-[2]  pt-12 pb-4"
          />
          <div className="bg-stone-800 dark:bg-stone-900/70 w-full h-full absolute inset-0 z-[0] contrast-more:!bg-black" />
        </div>
      ),
    },
  ];
  const getPanels = () =>
    panels.filter((panel) =>
      features !== undefined ? true : panel.name !== "Features"
    );
  const handleCopy = () => {
    setIsCoping(true);
    setTimeout(() => {
      setIsCoping(false);
    }, 3000);
  };
  return (
    <div
      className={` ${
        props.className ? props.className : ``
      } relative rounded-xl border border-stone-300/50 dark:border-stone-500/20 contrast-more:border-stone-800 dark:contrast-more:border-stone-100 w-full min-h-[16rem] overflow-hidden transform-gpu translate-x-0 my-6 not-prose code-block-wrap focus-ring`}
      tabIndex={0}
      aria-label={`Example. ${title}. ${
        features?.interactions ? `This is an interactive component` : ""
      }`}
    >
      <CodeBlockNotification
        notification={notification}
        onDismiss={() => onDismiss()}
      />
      <Tab.Group
        defaultIndex={getPanels().findIndex(
          (panel) => panel.name === "Preview"
        )}
      >
        <Tab.List className="absolute top-0 left-0 flex w-full px-2 pt-2 space-x-2 text-sm text-stone-500/75 contrast-more:text-stone-800 dark:text-stone-100">
          <div className="flex items-stretch justify-between w-full space-x-4">
            <div
              className="relative z-[2] font-medium py-1.5 pl-2 max-w-full flex space-x-1 items-center overflow-ellipsis component flex-shrink-0"
              aria-label={`${title}`}
            >
              <h3 className="dark:[text-shadow:0px_2px_5px_rgba(0,0,0,0.25)] line-clamp-1">
                {title}
              </h3>
              {features?.interactions && (
                <CursorClickIcon className="flex-shrink-0 w-4 h-4 filter drop-shadow-md" />
              )}
              {features?.ui?.responsive && (
                <DesktopComputerIcon className="flex-shrink-0 w-4 h-4 filter drop-shadow-md" />
              )}
            </div>
            {/* <div
              className={`overflow-y-hidden overflow-x-auto z-[4] flex items-stretch flex-nowrap justify-start w-full px-2`}
            >
              <div
                className={`rounded-md flex items-center justify-center px-4 flex-shrink-0 ring-1 ring-stone-300 ring-inset`}
              >
                <span className={`text-sm font-semibold`}>Form.tsx</span>
              </div>
            </div> */}
            <div
              className={`flex space-x-2 rounded-md z-[4] py-1 flex-shrink-0 justify-center px-1 backdrop-filter backdrop-blur-md backdrop-brightness-90 bg-stone-50/75 dark:bg-stone-800/30 motion-safe:transition-opacity sm:shadow-md sm:shadow-stone-400/10 contrast-more:shadow-none dark:shadow-stone-900/20 ${touchStyle}`}
            >
              {getPanels().map(({ name, Icon }) => (
                <Tab
                  className={`rounded-md relative z-[3] tap-highlight-none`}
                  key={`tab.${title}.${name}`}
                  aria-label={`Component ${name}`}
                >
                  {({ selected }) => (
                    <div className="relative">
                      <div
                        className={clsxm(
                          `py-1.5 text-xs font-medium px-2`,
                          buttonStyle,
                          selected
                            ? "motion-reduce:bg-stone-200/70 dark:motion-reduce:bg-stone-900/60 motion-reduce:backdrop-blur-md motion-reduce:backdrop-filter text-stone-800 dark:text-stone-100"
                            : "hover:text-stone-800 dark:hover:text-stone-100"
                        )}
                      >
                        <span className="hidden sm:!block">{t(name)}</span>
                        <span className="sm:hidden">
                          <Icon className="w-4 h-4" />
                        </span>
                      </div>
                      {selected && (
                        <motion.div
                          className={`motion-reduce:hidden absolute z-[2] inset-0 w-full h-full rounded-md bg-stone-50/70 dark:bg-stone-200/20 contrast-more:bg-white dark:contrast-more:bg-stone-200/30 contrast-more:border contrast-more:border-stone-800 dark:contrast-more:border-stone-100`}
                          layoutId={`underline.${title}`}
                        />
                      )}
                    </div>
                  )}
                </Tab>
              ))}
              <div
                className={`w-[2px] flex-grow-0 my-2 mx-1 bg-stone-400/30 dark:bg-white/10`}
              />
              <CopyToClipboard text={raw} onCopy={handleCopy}>
                <button
                  className={`py-1.5 sm:w-14 text-xs font-medium hover:text-stone-800 dark:hover:text-stone-100 ${buttonStyle}`}
                  aria-live="assertive"
                >
                  <span className="sr-only">
                    {isCoping ? t("Source code copied") : t("Copy source code")}
                  </span>
                  <span className="hidden sm:!block">
                    {isCoping ? t("Copied!") : t("Copy")}
                  </span>
                  <span className="sm:!hidden">
                    {isCoping ? (
                      <CheckCircleIcon className={`w-4 h-4 text-lime-500`} />
                    ) : (
                      <ClipboardIcon className={`w-4 h-4`} />
                    )}
                  </span>
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </Tab.List>
        <Tab.Panels>
          {getPanels().map(({ name, component }) => (
            <Tab.Panel
              key={`panel.${title}.${name}`}
              className="focus-visible:border-2 focus-visible:border-stone-500 rounded-xl focus:outline-none"
            >
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                className="relative flex items-center justify-center will-change-transform"
              >
                {component}
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default CodeBlock;
