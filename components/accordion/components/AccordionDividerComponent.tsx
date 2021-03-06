import { useTranslation } from "next-i18next";
import { Disclosure } from "@headlessui/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const data = [
  {
    title: "Shop",
    details: (
      <p
        className={`my-2 text-stone-600 dark:text-stone-300 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50`}
      >
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
        ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
        amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo
        ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque
        vulputate.
      </p>
    ),
    isOpen: true,
  },
  {
    title: "Service",
    details: (
      <p
        className={`my-2 text-stone-600 dark:text-stone-300 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50`}
      >
        Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
        purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
        porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non
        quam. In suscipit faucibus urna.
      </p>
    ),
    isOpen: false,
  },
  {
    title: "About",
    details: (
      <>
        <p
          className={`my-2 text-stone-600 dark:text-stone-300 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50`}
        >
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque
          lobortis. Phasellus pellentesque purus in massa. Aenean in pede.
          Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed
          commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis
          leo purus venenatis dui.
        </p>
        <ul
          className={`mb-2 text-stone-600 dark:text-stone-400 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50`}
        >
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </>
    ),
    isOpen: false,
  },
];

function AccordionDividerComponent() {
  const { t } = useTranslation("accordion");
  const shouldReduceMotion = useReducedMotion();
  const rowStyle =
    "hover:bg-stone-200/30 focus-visible:bg-stone-200/30 dark:hover:bg-stone-600/30 dark:focus-visible:bg-stone-600/30 hover:prefers-contrast:bg-amber-300 dark:hover:prefers-contrast:bg-amber-400 text-stone-700 dark:text-stone-200 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50 dark:prefers-contrast:focus-visible:text-stone-900 dark:prefers-contrast:hover:text-stone-900 focus-within:outline-none focus-within:ring-1 focus-within:ring-stone-400 dark:focus-within:ring-stone-500 prefers-contrast:focus-within:ring-stone-900 dark:prefers-contrast:focus-within:ring-stone-200 focus-within:ring-inset transition-colors [-webkit-tap-highlight-color:transparent]";

  const ListPanel = ({ children }) => (
    <motion.div
      key={`${name}.content`}
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: {
          opacity: 0,
          height: shouldReduceMotion ? "auto" : 0,
        },
      }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: shouldReduceMotion ? 0.2 : 0.5,
      }}
      className={`overflow-hidden !mt-0 mx-4`}
    >
      {children}
    </motion.div>
  );
  return (
    <div className="w-[calc(100%-2rem)] px-2 py-1 overflow-hidden divide-y rounded-lg divide-stone-300/75 dark:divide-stone-700 prefers-contrast:divide-stone-800 dark:prefers-contrast:divide-stone-50 prefers-contrast:contrast-ring component">
      {data.map(({ title, details, isOpen }) => (
        <Disclosure
          as="div"
          key={title}
          className="space-y-1"
          defaultOpen={isOpen}
        >
          {({ open }) => (
            <>
              <div className={`py-1`}>
                <Disclosure.Button
                  as="button"
                  className={`flex px-4 py-2 w-full justify-between items-center rounded-md ${rowStyle} ${
                    open
                      ? `bg-stone-50 hover:bg-stone-50 dark:bg-stone-600/50 dark:hover:bg-stone-600/50 prefers-contrast:bg-amber-300 dark:prefers-contrast:bg-amber-400 text-stone-700 dark:text-stone-200 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-900`
                      : ``
                  }`}
                  aria-live="assertive"
                >
                  <p>{title}</p>
                  <span className={`rtl:block hidden`}>
                    <ChevronLeftIcon
                      className={`w-4 h-4 transform transition ${
                        open ? `ltr:rotate-90 rtl:-rotate-90` : "rotate-0"
                      }`}
                    />
                  </span>
                  <span className={`rtl:hidden block`}>
                    <ChevronRightIcon
                      className={`w-4 h-4 transform transition ${
                        open ? `rotate-90` : "rotate-0"
                      }`}
                    />
                  </span>
                </Disclosure.Button>
              </div>
              <AnimatePresence>
                {open && (
                  <Disclosure.Panel as={ListPanel} static>
                    {details}
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default AccordionDividerComponent;
