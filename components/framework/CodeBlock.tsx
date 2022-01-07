import { Tab } from "@headlessui/react";
import {
  BeakerIcon,
  CheckCircleIcon,
  ClipboardIcon,
  CodeIcon,
  CursorClickIcon,
  EyeIcon,
} from "@heroicons/react/solid";
import { motion, useReducedMotion } from "framer-motion";
import { CodeBlockProps } from "../../interfaces/CodeBlock";
import Code from "../../util/Code";
import ComponentFeatures from "./ComponentFeatures";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

function CodeBlock({
  title,
  raw,
  features = undefined,
  children,
  ...props
}: CodeBlockProps) {
  const [isCoping, setIsCoping] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const touchStyle =
    "pointer-touch:opacity-100 pointer-touch:pointer-events-auto opacity-0 pointer-events-none code-block-touch ";
  const buttonStyle =
    "rounded-md motion-safe:transition relative z-[5] focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 dark:ring-offset-stone-600 ";
  const panels = [
    {
      name: "Features",
      Icon: BeakerIcon,
      component: <ComponentFeatures features={features} />,
    },
    {
      name: "Preview",
      Icon: EyeIcon,
      component: children,
    },
    {
      name: "Code",
      Icon: CodeIcon,
      component: (
        <div className="relative grid w-full">
          <Code
            content={raw}
            className="w-full flex-shrink !bg-transparent z-[2] max-h-[max(calc(80vh-61px),768px)] pt-12 pb-4"
          />
          <div className="bg-stone-800 dark:bg-stone-900/70 w-full h-full absolute inset-0 z-[0]" />
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
      } relative rounded-xl border border-stone-300/50 dark:border-stone-500/20 w-full min-h-[16rem] overflow-hidden my-6 not-prose code-block-wrap `}
      tabIndex={0}
    >
      <Tab.Group
        defaultIndex={getPanels().findIndex(
          (panel) => panel.name === "Preview"
        )}
      >
        <Tab.List className="absolute top-0 left-0 flex w-full px-2 pt-2 space-x-2 text-sm text-stone-500 prefers-contrast:text-stone-800 dark:text-stone-100">
          <div className="relative z-[2] font-medium py-1.5 px-2 truncate max-w-full flex space-x-1 items-center">
            <span>{title}</span>
            <span className="sr-only">This is an interactive component</span>
            {features?.interactions && <CursorClickIcon className="w-4 h-4" />}
          </div>
          <div className="flex-grow" />
          <div
            className={`flex space-x-2 rounded-md z-[4] py-1 justify-center px-1 backdrop-filter backdrop-blur-md backdrop-brightness-90 bg-stone-50/75 dark:bg-stone-800/30 motion-safe:transition-opacity ${touchStyle}`}
          >
            {getPanels().map(({ name, Icon }) => (
              <Tab
                className={`rounded-md relative z-[3] tap-highlight-none`}
                key={`tab.${title}.${name}`}
              >
                {({ selected }) => (
                  <div className="relative">
                    <div
                      className={`py-1.5 text-xs font-medium px-2 ${buttonStyle} ${
                        selected
                          ? "motion-reduce:bg-stone-200/70 dark:motion-reduce:bg-stone-900/60 motion-reduce:backdrop-blur-md motion-reduce:backdrop-filter text-stone-800 dark:text-stone-100"
                          : ""
                      }`}
                    >
                      <span className="sr-only sm:hidden">{name}</span>
                      <span className="hidden sm:block">{name}</span>
                      <span className="sm:hidden">
                        <Icon className="w-4 h-4" />
                      </span>
                    </div>
                    {selected && (
                      <motion.div
                        className={`motion-reduce:hidden absolute z-[2] inset-0 w-full h-full rounded-md bg-stone-50/70 dark:bg-stone-200/10 prefers-contrast:bg-white dark:prefers-contrast:bg-stone-200/40`}
                        layoutId={`underline.${title}`}
                      />
                    )}
                  </div>
                )}
              </Tab>
            ))}
            <div
              className={`w-[2px] flex-grow-0 my-2 mx-1 bg-white bg-opacity-10`}
            />
            <CopyToClipboard text={raw} onCopy={handleCopy}>
              <button
                className={`py-1.5 sm:w-14 text-xs font-medium ${buttonStyle}`}
              >
                <span className="sr-only">
                  {isCoping ? "Source code copied" : "Copy cource code"}
                </span>
                <span className="hidden sm:block">
                  {isCoping ? "Copied!" : "Copy"}
                </span>
                <span className="sm:hidden">
                  {isCoping ? (
                    <CheckCircleIcon className={`w-4 h-4 text-lime-400`} />
                  ) : (
                    <ClipboardIcon className={`w-4 h-4`} />
                  )}
                </span>
              </button>
            </CopyToClipboard>
          </div>
        </Tab.List>
        <Tab.Panels>
          {getPanels().map(({ name, component }) => (
            <Tab.Panel key={`panel.${title}.${name}`}>
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                className="relative flex items-center justify-center"
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
