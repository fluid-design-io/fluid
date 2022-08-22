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
import { IoLogoGithub } from "react-icons/io";
import clsxm from "../../lib/clsxm";

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
  const navBarLinkClassName =
    "clickable text-primary-500 hover:text-primary-900 dark:text-primary-200 rounded";
  return (
    <Popover
      className={`sticky top-0 z-50 transition motion-safe:duration-300 motion-reduce:transition-opacity ${
        props.className ? props.className : ``
      } `}
    >
      {({ open }) => (
        <Fragment>
          <div className="flex items-center justify-between border-b border-b-primary-200 bg-primary-100/80 px-4 py-4 pr-[env(safe-area-inset-right,1rem)] backdrop-blur-xl backdrop-filter transition-colors contrast-more:bg-primary-100/90 dark:border-b-primary-700 dark:bg-primary-800/60 dark:contrast-more:bg-black/80 sm:px-6 sm:pr-[env(safe-area-inset-right,1.5rem)] md:!justify-start md:!space-x-2.5 md:!py-2 lg:px-8">
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
                      <div className="flex font-rounded text-[1.175rem] font-bold text-primary-700 dark:text-primary-200">
                        <p>Fluid Design</p>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
              <DocSearch
                indexName="fluid-design"
                appId={process.env.DOCSEARCH_APP_ID}
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
                  <a
                    className={clsxm(
                      "px-2 py-1 font-medium",
                      navBarLinkClassName
                    )}
                  >
                    {t("Docs")}
                  </a>
                </Link>
                <div className="h-3 w-0.5 bg-primary-400 dark:bg-primary-500" />
                <a
                  className={clsxm("px-1.5 py-1.5", navBarLinkClassName)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/fluid-design-io/fluid"
                >
                  <IoLogoGithub className="h-4 w-4" aria-hidden="true" />
                </a>
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
                    className={`transition duration-300 md:!relative md:!z-40`}
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
                  className={`fixed inset-0 z-[60] bg-primary-900/30 md:!hidden`}
                />
              </Fragment>
            )}
          </AnimatePresence>
        </Fragment>
      )}
    </Popover>
  );
};
