import { Popover, Transition } from "@headlessui/react";
import {
  BookOpenIcon,
  ChevronDownIcon,
  MenuAlt4Icon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import AppLogo from "../ui/AppLogo";
import packageInfo from "../../package.json";

const navigation = [
  { name: "Examples", href: "examples", icon: ViewGridIcon },
  { name: "Usage", href: "usage", icon: BookOpenIcon },
];
const secondaryNavigation = [
  {
    groupName: "Components",
    groupList: [
      // { name: "Alert", href: "alert", isDone: false },
      { name: "Accordion", href: "accordion", isDone: true },
      { name: "Avatar", href: "avatar", isDone: false },
      // { name: "Badge", href: "badge", isDone: false },
      // { name: "Breadcrumbs", href: "breadcrumbs", isDone: false },
      { name: "Button", href: "button", isDone: true },
      { name: "Card", href: "card", isDone: true },
      { name: "Empty State", href: "empty-state", isDone: false },
      // { name: "Collapse", href: "collapse", isDone: false },
      // { name: "Divider", href: "divider", isDone: false },
      // { name: "Drawer", href: "drawer", isDone: false },
      // { name: "Dropdown", href: "dropdown", isDone: false },
      // { name: "Footer", href: "footer", isDone: false },
      // { name: "Hero", href: "hero", isDone: false },
      // { name: "Indicator", href: "indicator", isDone: false },
      { name: "Image", href: "image", isDone: true },
      { name: "List", href: "list", isDone: true },
      // { name: "Mask", href: "mask", isDone: false },
      // { name: "Menu", href: "menu", isDone: false },
      // { name: "Modal", href: "modal", isDone: false },
      // { name: "Navbar", href: "navbar", isDone: false },
      // { name: "Pagination", href: "pagination", isDone: false },
      // { name: "Progress", href: "progress", isDone: false },
      { name: "Tab", href: "tab", isDone: false },
      // { name: "Table", href: "table", isDone: false },
      // { name: "Tooltip", href: "tooltip", isDone: false },
    ],
  },
  {
    groupName: "Forms",
    groupList: [
      { name: "Checkbox", href: "form-Checkbox", isDone: false },
      { name: "Input", href: "form-Input", isDone: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarMenu({ activeTab, disabled }) {
  const { t } = useTranslation("navbar");
  return (
    <div className="md:!fixed z-40 top-0 left-0 h-full max-h-screen overflow-x-hidden overflow-y-auto bg-stone-50 dark:bg-stone-900 w-[18rem] sm:w-[12.5rem] md:!w-[15.625rem] lg:w-[13.5rem] xl:w-[15.625rem] flex pb-4 border-r border-stone-200 dark:border-stone-700 contrast-more:border-stone-600 dark:contrast-more:border-stone-200 dark:contrast-more:bg-[rgb(18,15,13)] min-h-screen">
      <div className="w-full">
        <div className="sticky top-0 z-10 flex items-center justify-start mx-2.5 lg:mx-4 mt-2 pt-2 pb-3 space-x-2 bg-stone-50/80 dark:bg-stone-900/80 backdrop-filter backdrop-blur-md">
          <span className="sr-only">Fluid Design</span>
          <AppLogo />
          <div className="font-[Nunito] text-stone-700 dark:text-stone-200 font-bold md:!text-[1.175rem] -mt-[0.125rem]">
            <p>Fluid Design</p>
            <div className="text-[0.6rem] tracking-wide font-bold font-sans text-left text-stone-500 dark:text-stone-400 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 -mt-1.5">
              V{packageInfo.version}
            </div>
          </div>
        </div>
        <nav className="flex-1 p-1 px-4 pb-8 space-y-2" aria-label="Sidebar">
          {navigation.map(({ name, href, icon: ItemIcon }) => (
            <div key={`nav.${name}.${href}`} className="rounded-md">
              <Link key={name} href={`/docs/${href}`}>
                <a
                  className={classNames(
                    activeTab === href
                      ? "bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-stone-100 contrast-more:border contrast-more:border-stone-700 dark:contrast-more:border-stone-200"
                      : "hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-700/80 dark:hover:text-stone-300 ",
                    "group w-full px-2 py-2 text-sm font-medium rounded-md transition flex items-center"
                  )}
                >
                  <div
                    className={`flex items-center justify-center flex-shrink-0 w-6 h-6 border rounded-md 
                  ${
                    activeTab === href
                      ? `text-teal-400 border-teal-400 shadow shadow-teal-400/40`
                      : `border-stone-500 dark:border-stone-200/80 text-stone-600 dark:text-stone-300`
                  }`}
                  >
                    <ItemIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div className="ml-2 text-base font-medium text-stone-900 dark:text-stone-200">
                    {activeTab === href && (
                      <span className="sr-only">Currently selected.</span>
                    )}
                    {t(name)}
                  </div>
                </a>
              </Link>
            </div>
          ))}

          {secondaryNavigation.map(({ groupList, groupName }) => (
            <div key={`${groupName}`} className="py-2 space-y-1">
              <h3
                className="px-3 text-xs font-semibold tracking-wider uppercase select-none text-stone-500 dark:text-stone-400 contrast-more:text-stone-700 dark:contrast-more:text-slate-100"
                id={`${groupName}-headline`}
              >
                {t(groupName)}
              </h3>
              <div
                className="space-y-1"
                role="group"
                aria-labelledby={`${groupName}-headline`}
              >
                {groupList.map(({ name, href, isDone }) =>
                  !isDone ? (
                    <p
                      key={`isNotDone.${groupName}.${name}`}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md group contrast-bg contrast-text
                  ${!isDone ? "opacity-50" : ""} 
                  ${
                    activeTab === href
                      ? `bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-stone-100 contrast-more:border contrast-more:border-stone-700 dark:contrast-more:border-stone-200`
                      : `text-stone-700 dark:text-stone-300/80 contrast-more:text-stone-900 dark:contrast-more:text-stone-100`
                  }`}
                    >
                      {t(name)}
                      {!isDone && (
                        <span className="pl-1 text-[0.65rem]">
                          ({t("in-progress")})
                        </span>
                      )}
                    </p>
                  ) : (
                    <Link key={`${groupName}.${name}`} href={`/docs/${href}`}>
                      <a
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md group contrast-bg contrast-text
                      ${!isDone ? "opacity-50" : ""} 
                      ${
                        activeTab === href
                          ? `bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-stone-100 contrast-more:border contrast-more:border-stone-700 dark:contrast-more:border-stone-200`
                          : `text-stone-700 dark:text-stone-300/80 contrast-more:text-stone-900 dark:contrast-more:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors`
                      }`}
                      >
                        <span className="flex items-center truncate">
                          {t(name)}
                          {!isDone && (
                            <span className="pl-1 text-[0.65rem]">
                              ({t("in-progress")})
                            </span>
                          )}
                        </span>
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Sidebar({ hideNav = false, docNav = undefined }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [showMobileDocNav, setShowMobileDocNav] = useState(false);
  const router = useRouter();
  const activeTab = router?.pathname?.split("/")?.pop();
  useEffect(() => {
    const onRouteChangeStart = (url) => {
      sidebarActive && setSidebarActive(false);
    };
    const onHashChanged = () => {
      console.log("hash changed");
      setShowMobileDocNav(false);
    };

    router.events.on("routeChangeStart", () => onRouteChangeStart);
    window.addEventListener("hashchange", onHashChanged);
    return () => {
      router.events.off("routeChangeStart", () => onRouteChangeStart);
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, [router.events]);
  const body = <SidebarMenu activeTab={activeTab} disabled={!hideNav} />;
  return (
    <>
      <div
        className={`transition fixed top-0 z-[61] hidden md:!block duration-300`}
      >
        {body}
      </div>

      <Popover>
        <div
          className={`border-b md:!hidden px-4 border-b-stone-200 dark:border-b-stone-700 backdrop-filter backdrop-blur-xl bg-stone-100/70 dark:bg-stone-800/60 contrast-more:bg-stone-100/90 dark:contrast-more:bg-black/80 motion-safe:transition-all motion-safe:duration-300 contrast-more:border-b-stone-700 dark:contrast-more:border-b-stone-200 ${
            hideNav ? "translate-y-[-69px] py-4" : " py-2"
          }`}
        >
          <div
            className={`flex items-center justify-between`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex">
              <Popover.Button
                className="mr-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 dark:ring-offset-stone-600"
                onClick={() => setSidebarActive(true)}
              >
                <MenuAlt4Icon className="w-5 h-5 text-stone-400 contrast-more:text-stone-800 dark:contrast-more:text-stone-50" />
              </Popover.Button>
              <div className="text-sm font-medium capitalize text-stone-700 dark:text-stone-300 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 contrast-more:font-bold">
                {activeTab}
              </div>
            </div>
            {docNav && (
              <div
                role={`button`}
                className="flex items-center justify-center flex-shrink-0 text-sm mobile-doc-nav"
                tabIndex={0}
                onClick={() => setShowMobileDocNav(!showMobileDocNav)}
              >
                <span className="sr-only">Expand section list</span>
                {docNav}
                <ChevronDownIcon className="w-5 h-5 text-stone-500 dark:text-stone-300 contrast-more:text-stone-800 dark:contrast-more:text-stone-200" />
              </div>
            )}
          </div>
          {showMobileDocNav && (
            <div className="mt-1.5 doc-nav-expand contrast-more:font-semibold">
              {docNav}
            </div>
          )}
        </div>

        <Popover.Overlay
          className={`bg-stone-900 duration-500 opacity-30 fixed inset-0 z-[60] md:!hidden`}
        />
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="motion-safe:-translate-x-full opacity-0"
          enterTo="motion-safe:translate-x-0 opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="motion-safe:translate-x-0 opacity-100 scale-100"
          leaveTo="motion-safe:-translate-x-full pacity-0"
        >
          <Popover.Panel
            focus
            className={`transition fixed top-0 z-[61] md:!relative md:!z-40 duration-300`}
          >
            {body}
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
