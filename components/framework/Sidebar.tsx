import { Popover, Transition } from "@headlessui/react";
import {
  BookOpenIcon,
  MenuAlt4Icon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import logoDark from "../../public/assets/icon-dark.svg";
import logoLight from "../../public/assets/icon-light.svg";

const navigation = [
  { name: "Examples", href: "examples", icon: ViewGridIcon },
  { name: "Usage", href: "usage", icon: BookOpenIcon },
];
const secondaryNavigation = [
  {
    groupName: "Components",
    groupList: [
      { name: "Alert", href: "alert", isDone: false },
      { name: "Avatar", href: "avatar", isDone: false },
      { name: "Badge", href: "badge", isDone: false },
      // { name: "Breadcrumbs", href: "breadcrumbs", isDone: false },
      { name: "Button", href: "button", isDone: false },
      { name: "Card", href: "card", isDone: true },
      // { name: "Collapse", href: "collapse", isDone: false },
      // { name: "Divider", href: "divider", isDone: false },
      // { name: "Drawer", href: "drawer", isDone: false },
      { name: "Dropdown", href: "dropdown", isDone: false },
      // { name: "Footer", href: "footer", isDone: false },
      // { name: "Hero", href: "hero", isDone: false },
      // { name: "Indicator", href: "indicator", isDone: false },
      { name: "Link", href: "link", isDone: false },
      // { name: "Mask", href: "mask", isDone: false },
      // { name: "Menu", href: "menu", isDone: false },
      { name: "Modal", href: "modal", isDone: false },
      // { name: "Navbar", href: "navbar", isDone: false },
      { name: "Pagination", href: "pagination", isDone: false },
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
  return (
    <div className="md:fixed z-40 top-0 left-0 h-full max-h-screen overflow-x-hidden overflow-y-auto bg-stone-50 dark:bg-stone-900 w-[300px] sm:w-[200px] lg:w-[250px] flex pb-4 border-r border-stone-200 dark:border-stone-700">
      <div className="w-full">
        <Link href={"/"}>
          <a className="sticky top-0 z-10 flex items-center justify-start px-2.5 pt-4 pb-3 space-x-2 bg-stone-50/80 dark:bg-stone-900/80 backdrop-filter backdrop-blur-md" tabIndex={-1} aria-hidden="true">
            <span className="sr-only">Fluid Design</span>
            <div className="w-auto h-7 dark:hidden">
              <Image alt="logo" src={logoDark} width={28} height={28} />
            </div>
            <div className="hidden w-auto h-7 dark:block">
              <Image alt="logo" src={logoLight} width={28} height={28} />
            </div>
            <div className="flex font-[Nunito] text-stone-700 dark:text-stone-200 font-bold md:text-[1.175rem]">
              <p>Fluid Design</p>
            </div>
          </a>
        </Link>
        <nav className="flex-1 p-1 px-4 pb-8 space-y-2" aria-label="Sidebar">
          {navigation.map(({ name, href, icon: ItemIcon }) => (
            <div key={`nav.${name}`} className="rounded-md">
              <Link key={name} href={`/components/${href}`}>
                <a
                  className={classNames(
                    activeTab === href
                      ? "bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-stone-100"
                      : "hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-700/80 dark:hover:text-stone-300",
                    "group w-full px-2 py-2 text-sm font-medium rounded-md transition flex items-center"
                  )}
                >
                  <div
                    className={`flex items-center justify-center flex-shrink-0 w-6 h-6 border rounded-md 
                  ${
                    activeTab === href
                      ? `text-teal-400 border-teal-400 shadow shadow-teal-400/40`
                      : `border-stone-100 dark:border-stone-600/80 text-stone-600 dark:text-stone-300`
                  }`}
                  >
                    <ItemIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div className="ml-2 text-base font-medium text-stone-900 dark:text-stone-200">
                    {activeTab === href && (
                      <span className="sr-only">Currently selected.</span>
                    )}
                    {name}
                  </div>
                </a>
              </Link>
            </div>
          ))}

          {secondaryNavigation.map(({ groupList, groupName }) => (
            <div key={`${groupName}`} className="py-2 space-y-1">
              <h3
                className="px-3 text-xs font-semibold tracking-wider uppercase select-none text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-700 dark:prefers-contrast:text-slate-100"
                id={`${groupName}-headline`}
              >
                {groupName}
              </h3>
              <div
                className="space-y-1"
                role="group"
                aria-labelledby={`${groupName}-headline`}
              >
                {groupList.map(({ name, href, isDone }) => (
                  <Link
                    key={`${groupName}.${name}`}
                    href={`/components/${href}`}
                  >
                    <a
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md group 
                      ${!isDone ? "opacity-50" : ""} 
                      ${
                        activeTab === href
                          ? `bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-stone-100`
                          : `text-stone-700 dark:text-stone-300/80 hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-700/80 dark:hover:text-stone-100`
                      }`}
                    >
                      <span className="truncate">{name}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Sidebar({ hideNav = false }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const router = useRouter();
  const activeTab = router?.pathname?.split("/")?.pop();
  useEffect(() => {
    Router.events.on(
      "routeChangeStart",
      () => !sidebarActive && setSidebarActive(false)
    );
    return () => {
      Router.events.off("routeChangeStart", () => {});
    };
  }, []);
  const body = <SidebarMenu activeTab={activeTab} disabled={!hideNav} />;
  return (
    <>
      <div
        className={`transition fixed top-0 z-[61] hidden md:block duration-300`}
      >
        {body}
      </div>
      <Popover>
        <div
          className={`flex items-center px-4 border-b md:hidden border-b-stone-200 dark:border-b-stone-700 backdrop-filter backdrop-blur-xl bg-stone-100/70 dark:bg-stone-800/60 motion-safe:transition-all motion-safe:duration-300 ${
            hideNav ? "translate-y-[-61px] py-4" : " py-2"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <Popover.Button
            className="mr-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 dark:ring-offset-stone-600"
            onClick={() => setSidebarActive(true)}
          >
            <MenuAlt4Icon className="w-5 h-5 text-stone-400" />
          </Popover.Button>
          <div className="text-sm font-medium capitalize text-stone-700 dark:text-stone-300">
            {activeTab}
          </div>
        </div>

        <Popover.Overlay
          className={`bg-stone-900 duration-500 opacity-30 fixed inset-0 z-[60] md:hidden`}
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
            className={`transition fixed top-0 z-[61] md:relative md:z-40 duration-300`}
          >
            {body}
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
