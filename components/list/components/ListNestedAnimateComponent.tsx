import { useTranslation } from "next-i18next";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function ListNestedAnimateComponent({ setNotification, ...props }) {
  const { t } = useTranslation("list");
  const shouldReduceMotion = useReducedMotion();
  const rowStyle =
    "hover:bg-stone-200/30 focus-visible:bg-stone-200/30 dark:hover:bg-stone-600/30 dark:focus-visible:bg-stone-600/30 hover:prefers-contrast:bg-amber-300 dark:hover:prefers-contrast:bg-amber-400 text-stone-700 dark:text-stone-200 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50 dark:prefers-contrast:focus-visible:text-stone-900 dark:prefers-contrast:hover:text-stone-900 focus-within:outline-none focus-within:ring-1 focus-within:ring-stone-400 dark:focus-within:ring-stone-500 prefers-contrast:focus-within:ring-stone-900 dark:prefers-contrast:focus-within:ring-stone-200 focus-within:ring-inset transition-colors [-webkit-tap-highlight-color:transparent]";
  const navigation = [
    { name: "Dashboard", Icon: HomeIcon, current: true, href: "#" },
    {
      name: "Reports",
      Icon: FolderIcon,
      children: [
        { name: "Overview", href: "#" },
        { name: "Filter", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
    {
      name: "History",
      Icon: UsersIcon,
      children: [
        { name: "Overview", href: "#" },
        { name: "Filter", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
    {
      name: "Analytics",
      Icon: ChartBarIcon,
      children: [
        { name: "Overview", href: "#" },
        { name: "Filter", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
  ];

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
      className={`overflow-hidden !mt-0`}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:w-2/3 bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 component prefers-contrast:bg-white dark:prefers-contrast:bg-stone-900 prefers-contrast:contrast-ring  ${
        props.className ? props.className : ``
      }`}
    >
      <nav
        className="flex-1 px-2 py-1 prefers-contrast:divide-y prefers-contrast:divide-stone-600 dark:prefers-contrast:divide-stone-200"
        aria-label="Sidebar"
      >
        {navigation.map(({ children, name, Icon }) =>
          !children ? (
            <button
              key={`nav.${name}`}
              className={`flex items-center justify-start w-full px-4 py-2 my-1 capitalize transition outline-none select-none rounded-md ${rowStyle}`}
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name /* t(`Card Button`, { ns: "card" }) */,
                  Icon,
                })
              }
            >
              <Icon
                className={`w-4 h-4 ltr:mr-2 rtl:ml-2`}
                aria-hidden="true"
              />
              {name}
            </button>
          ) : (
            <Disclosure as="div" key={name} className="space-y-1">
              {({ open }) => (
                <>
                  <div className={`py-1`}>
                    <Disclosure.Button
                      as="button"
                      className={`flex px-4 py-2 w-full justify-between items-center rounded-md ${rowStyle} ${
                        open
                          ? `bg-stone-200/50 hover:bg-stone-200/50 dark:bg-stone-600/50 dark:hover:bg-stone-600/50 prefers-contrast:bg-amber-300 dark:prefers-contrast:bg-amber-400 text-stone-700 dark:text-stone-200 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-900`
                          : ``
                      }`}
                      aria-live="assertive"
                    >
                      <span className={`flex items-center`}>
                        <Icon
                          className="flex-shrink-0 w-4 h-4 ltr:mr-2 rtl:ml-2"
                          aria-hidden="true"
                        />
                        <p className="flex-1">{name}</p>
                      </span>
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
                        {children.map((item, i) => (
                          <Disclosure.Button
                            key={item.name}
                            className={`flex items-center w-full py-2 pr-2 ltr:pl-10 rtl:pr-10 select-none cursor-pointer rounded-md ${rowStyle}`}
                            onClick={() =>
                              setNotification({
                                enabled: true,
                                message:
                                  item.name /* t(`Card Button`, { ns: "card" }) */,
                                Icon,
                              })
                            }
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          )
        )}
      </nav>
    </div>
  );
}

export default ListNestedAnimateComponent;
