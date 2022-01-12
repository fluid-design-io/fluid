/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useTranslation, i18n } from "next-i18next";
import Link from "next/link";
import logoDark from "../../public/assets/icon-dark.svg";
import logoLight from "../../public/assets/icon-light.svg";

import packageInfo from "../../package.json";
import { ChevronDownIcon, TranslateIcon } from "@heroicons/react/solid";
import { languages } from "../../lib/languages";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar({ logo = true, ...props }) {
  const { t } = useTranslation("navbar");
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const navItems = [
    {
      name: "Docs",
      href: "/docs",
      icon: ChartBarIcon,
    },
  ];
  return (
    <Popover
      className={`z-50 transition motion-safe:duration-300 motion-reduce:transition-opacity ${
        props.className ? props.className : ``
      } `}
    >
      <div className="flex justify-between items-center px-4 py-4 md:py-2 sm:px-6 lg:px-8 md:justify-start md:space-x-2.5 border-b border-b-stone-200 dark:border-b-stone-700 backdrop-filter backdrop-blur-xl bg-stone-100/70 dark:bg-stone-800/60 prefers-contrast:bg-stone-100/90 dark:prefers-contrast:bg-black/80">
        <div className={`flex items-center space-x-4 ${logo ? "" : "w-full"}`}>
          <div className={`${logo ? "" : `md:hidden`}`}>
            <Link href={"/"}>
              <a className={`flex flex-shrink-0 h-7 w-7`}>
                <span className="sr-only">Fluid Design</span>
                <div className="w-auto h-7 dark:hidden">
                  <Image alt="logo" src={logoDark} width={28} height={28} />
                </div>
                <div className="hidden w-auto h-7 dark:block">
                  <Image alt="logo" src={logoLight} width={28} height={28} />
                </div>
              </a>
            </Link>
          </div>
          {!logo && (
            <div className="sm:text-sm text-left text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50 text-xs">
              V{packageInfo.version}
            </div>
          )}
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50">
            <span className="sr-only">{t("Open menu")}</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div
          className={` hidden md:block flex-shrink-0 ${
            !logo ? "opacity-0 pointer-events-none hidden" : ""
          }`}
          aria-hidden={!logo}
        >
          <Link href={"/"}>
            <a className="flex">
              <div className="flex font-[Nunito] text-stone-700 dark:text-stone-200 font-bold text-[1.175rem]">
                <p>Fluid Design</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="hidden w-full lg:block" />
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <div className="flex items-center flex-shrink-0 space-x-4 text-sm lg:space-x-6 md:ml-12">
            {/* <Link href="/Docs">
              <a className="font-medium text-stone-500 hover:text-stone-900 dark:text-stone-200">
                Studio
              </a>
            </Link> */}
            <Link href="/docs">
              <a className="font-medium text-stone-500 hover:text-stone-900 dark:text-stone-200">
                {t("Docs")}
              </a>
            </Link>
            <div className="w-0.5 h-3 bg-stone-400 dark:bg-stone-500" />
            <Popover className="relative flex items-center">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-gray-900 dark:text-gray-200"
                        : "text-gray-500 dark:text-gray-400",
                      "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-stone-500 dark:hover:text-stone-200 dark:focus:ring-stone-300 transition hover:bg-stone-100 dark:hover:bg-stone-600/30 py-3 px-2"
                    )}
                  >
                    <span>
                      <TranslateIcon className="w-5 h-5 dark:text-stone-400 group-hover:text-gray-500 dark:group-hover:text-stone-300" />
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open
                          ? "text-gray-600 dark:text-gray-200"
                          : "text-gray-400 dark:text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-stone-300"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="overflow-hidden absolute right-0 z-10 w-screen max-w-xs px-2 mt-3 transform top-[54px] sm:px-0 border border-stone-50 dark:border-stone-700/30 rounded-lg shadow-lg">
                      <div className="ring-1 ring-black ring-opacity-5 bg-stone-50 dark:bg-stone-900">
                        <div className="relative px-4 py-4 font-semibold bg-white dark:bg-stone-800/50 dark:text-stone-50">
                          {t("Language")}
                        </div>
                        <div className="px-4 py-4">
                          <ul
                            role="list"
                            className="grid items-stretch grid-cols-2 gap-4"
                          >
                            {languages.map(({ code, country_code, name }) => (
                              <li
                                key={`lang.${code}`}
                                className="w-full text-base"
                              >
                                <button
                                  className="font-medium w-full flex items-center rounded-md text-stone-900 hover:text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 px-2 py-1.5 disabled:opacity-50"
                                  disabled={code === i18n?.language}
                                  onClick={() =>
                                    router.push({ pathname, query }, asPath, {
                                      locale: code,
                                    })
                                  }
                                >
                                  <span className="sr-only">
                                    {t("switch-language", { name })}
                                  </span>
                                  <span
                                    className={`fi fi-${country_code} rounded-sm mr-2`}
                                  />
                                  {name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform motion-reduce:transition-none md:hidden"
        >
          <div className="divide-y-2 rounded-lg shadow-lg bg-stone-200 dark:bg-stone-700 ring-1 ring-black ring-opacity-5 divide-stone-100/50 dark:divide-stone-600 prefers-contrast:bg-stone-50 dark:prefers-contrast:bg-stone-900 prefers-contrast:border prefers-contrast:border-stone-100 prefers-contrast:divide-stone-600 dark:prefers-contrast:divide-stone-200">
            <div className="px-4 pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="w-auto h-7 dark:hidden">
                    <Image alt="logo" src={logoDark} width={28} height={28} />
                  </div>
                  <div className="hidden w-auto h-7 dark:block">
                    <Image alt="logo" src={logoLight} width={28} height={28} />
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-200">
                    <span className="sr-only">{t("Close menu")}</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="px-5 py-6">
              <nav className="grid grid-cols-1 gap-7">
                {navItems.map((navItem) => (
                  <Link key={navItem.name} href={navItem.href}>
                    <a className="flex items-center px-4 -m-4 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800">
                      <div className="text-base font-medium text-stone-900 dark:text-stone-200 dark:prefers-contrast:text-stone-50 prefers-contrast:font-bold">
                        {t(navItem.name)}
                      </div>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4">
              <ul role="list" className="grid items-stretch grid-cols-2 gap-4">
                {languages.map(({ code, country_code, name }) => (
                  <li key={`lang.${code}`} className="w-full text-base">
                    <button
                      className="font-medium w-full flex items-center rounded-md text-stone-900 hover:text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 px-2 py-1.5 disabled:opacity-50"
                      disabled={code === i18n?.language}
                      onClick={() =>
                        router.push({ pathname, query }, asPath, {
                          locale: code,
                        })
                      }
                    >
                      <span className="sr-only">
                        {t("switch-language", { name })}
                      </span>
                      <span
                        className={`fi fi-${country_code} rounded-sm mr-2`}
                      />
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
