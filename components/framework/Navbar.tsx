/* This example requires Tailwind CSS v2.0+ */
import { DocSearch } from "@docsearch/react";
import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, TranslateIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { useThemeMode } from "../../lib/ThemeContext";
import { languages } from "../../lib/languages";
import { ThemeSwitch } from "../ThemeSwitch";
import AppLogo from "../ui/AppLogo";
import { SidebarMenu } from "./Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Navbar = ({ sidebar, ...props }) => {
  const { t } = useTranslation("navbar");
  const [mode, setMode] = useThemeMode(true);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const navItems = [
    {
      name: "Docs",
      href: "/docs",
      icon: ChartBarIcon,
    },
  ];
  const handleModeChange = (mode: "light" | "dark") => {
    setMode(mode);
  };
  return (
    <Popover
      className={`sticky top-0 z-50 transition motion-safe:duration-300 motion-reduce:transition-opacity ${
        props.className ? props.className : ``
      } `}
    >
      {({ open }) => (
        <Fragment>
          <div className="flex items-center justify-between border-b border-b-primary-200 bg-primary-100/80 px-4 py-4 backdrop-blur-xl backdrop-filter transition-colors contrast-more:bg-primary-100/90 dark:border-b-primary-700 dark:bg-primary-800/60 dark:contrast-more:bg-black/80 sm:px-6 md:!justify-start md:!space-x-2.5 md:!py-2 lg:px-8">
            <div
              className={`flex flex-grow items-center justify-between space-x-4 md:!justify-start`}
            >
              <AppLogo className={`${sidebar ? "md:!hidden" : ""}`} />
              {!sidebar && (
                <div
                  className={` hidden flex-shrink-0 md:!block`}
                  aria-hidden={sidebar}
                >
                  <Link href={"/"}>
                    <a className="flex">
                      <div className="flex font-[Nunito] text-[1.175rem] font-bold text-primary-700 dark:text-primary-200">
                        <p>Fluid Design</p>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
              <DocSearch
                appId="K0KL3WHKQ9"
                indexName="fluid-design"
                apiKey={process.env.DOCSEARCH_API_KEY}
              />
            </div>
            <div className="-my-2 -mr-2 md:!hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary-400 hover:bg-primary-100 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 contrast-more:text-primary-900 dark:hover:bg-primary-800 dark:contrast-more:text-primary-50">
                <span className="sr-only">{t("Open menu")}</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:!flex">
              <div className="flex flex-shrink-0 items-center space-x-4 text-sm md:!ml-12 lg:space-x-6">
                <Link href="/docs">
                  <a className="font-medium text-primary-500 hover:text-primary-900 dark:text-primary-200 px-2 py-1 rounded clickable">
                    {t("Docs")}
                  </a>
                </Link>
                <div className="h-3 w-0.5 bg-primary-400 dark:bg-primary-500" />
                <Popover className="relative flex items-center">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-primary-900 dark:text-primary-50"
                            : "text-primary-600 dark:text-primary-100",
                          "group inline-flex items-center rounded-md py-1.5 px-2 text-base font-medium clickable focus-ring"
                        )}
                      >
                        <span>
                          <TranslateIcon className="h-4 w-4 group-hover:text-primary-500 dark:text-primary-100 dark:group-hover:text-primary-300" />
                        </span>
                        <ChevronDownIcon
                          className={classNames(
                            open
                              ? "text-primary-900 dark:text-primary-50"
                              : "text-primary-600 dark:text-primary-100",
                            "ml-2 h-4 w-4 group-hover:text-primary-500 dark:group-hover:text-primary-300"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <AnimatePresence>
                        {open && (
                          <Transition
                            show
                            as={motion.div}
                            initial={{
                              opacity: 0,
                              y: 30,
                            }}
                            animate={{
                              opacity: 1,
                              y: 20,
                            }}
                            exit={{
                              opacity: 0,
                              y: 30,
                            }}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                            }}
                          >
                            <Popover.Panel
                              static
                              className="absolute right-0 z-10 w-screen max-w-xs transform overflow-hidden rounded-lg border border-primary-50 px-2 shadow-lg dark:border-primary-700/30 sm:px-0"
                            >
                              <div className="bg-primary-50 ring-1 ring-black ring-opacity-5 dark:bg-primary-900">
                                <div className="relative bg-white px-4 py-4 font-semibold dark:bg-primary-800/50 dark:text-primary-50">
                                  {t("Language")}
                                </div>
                                <div className="px-4 py-4">
                                  <ul
                                    role="list"
                                    className="grid grid-cols-2 items-stretch gap-4"
                                  >
                                    {languages.map(
                                      ({ code, country_code, name }) => (
                                        <li
                                          key={`lang.${code}`}
                                          className="w-full text-base"
                                        >
                                          <button
                                            className="flex w-full items-center rounded-md px-2 py-1.5 font-medium text-primary-900 hover:text-primary-700 disabled:opacity-50 dark:text-primary-200 clickable"
                                            disabled={code === i18n?.language}
                                            onClick={() =>
                                              router.push(
                                                { pathname, query },
                                                asPath,
                                                {
                                                  locale: code,
                                                }
                                              )
                                            }
                                          >
                                            <span className="sr-only">
                                              {t("switch-language", { name })}
                                            </span>
                                            <span
                                              className={`fi fi-${country_code} mr-2 rounded-sm`}
                                            />
                                            {name}
                                          </button>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Popover>
                <ThemeSwitch
                  mode={mode as "light" | "dark"}
                  handleModeChange={handleModeChange}
                />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <Fragment>
                <motion.div
                  key={"mobile-sidbar-menu"}
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  className="fixed top-0 z-[61]"
                  transition={{
                    type: "spring",
                    bounce: 0.05,
                  }}
                >
                  <Popover.Panel
                    focus
                    static
                    className={`transition md:!relative md:!z-40 duration-300`}
                  >
                    <SidebarMenu />
                  </Popover.Panel>
                </motion.div>
                <Popover.Overlay
                  key="mobile-sidbar-menu-overlay"
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`bg-primary-900/30 fixed inset-0 z-[60] md:!hidden`}
                />
              </Fragment>
            )}
          </AnimatePresence>
        </Fragment>
      )}
    </Popover>
  );
}
