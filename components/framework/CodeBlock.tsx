import { Tab } from "@headlessui/react";
import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";
import Code from "../../util/Code";

function CodeBlock({ title, raw, children, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const touchStyle =
    "pointer-touch:opacity-100 pointer-touch:pointer-events-auto opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto";
  const buttonStyle =
    "rounded-md motion-safe:transition relative z-[5] focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 dark:ring-offset-stone-600 " +
    touchStyle;

  const panels = [
    {
      name: "Preview",
      component: children,
    },
    {
      name: "Code",
      component: (
        <>
          <Code
            content={raw}
            className="w-full !bg-transparent z-[2] max-h-[768px] pt-12 pb-4"
          />
          <div className="bg-stone-900/70 w-full h-full absolute inset-0 z-[0]" />
        </>
      ),
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      className={` ${
        props.className ? props.className : ``
      } relative rounded-xl border border-stone-50/50 dark:border-stone-500/20 w-full min-h-[16rem] overflow-hidden my-6 not-prose group`}
      tabIndex={0}
    >
      <Tab.Group>
        <Tab.List className="absolute top-0 left-0 flex w-full px-2 pt-2 space-x-2 text-sm text-stone-600 prefers-contrast:text-stone-800 dark:text-stone-100">
          <div className="relative z-[2] font-medium py-1.5 px-2 truncate max-w-full">
            {title}
          </div>
          <div className="flex-grow" />
          {panels.map(({ name }) => (
            <Tab
              className={`flex space-x-2 rounded-md backdrop-filter backdrop-blur-md relative z-[4] py-1 justify-center px-1 motion-safe:transition-opacity ${touchStyle}`}
              key={`tab.${title}.${name}`}
            >
              {({ selected }) => (
                <div className="relative">
                  <div
                    className={`py-1.5 px-2 ${buttonStyle} ${
                      selected
                        ? "motion-reduce:bg-stone-200/70 dark:motion-reduce:bg-stone-900/60 motion-reduce:backdrop-blur-md motion-reduce:backdrop-filter"
                        : ""
                    }`}
                  >
                    {name}
                  </div>
                  {selected && (
                    <motion.div
                      className={`motion-reduce:hidden absolute z-[3] inset-0 w-full h-full rounded-md bg-stone-200/70 dark:bg-stone-200/10 backdrop-brightness-125 backdrop-filter`}
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
          <button className={`py-1.5 w-16 ${buttonStyle}`}>Copy</button>
        </Tab.List>
        <Tab.Panels>
          {panels.map(({ name, component }) => (
            <Tab.Panel key={`panel.${title}.${name}`}>
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                className="grid justify-center w-full grid-cols-1 place-items-center"
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
