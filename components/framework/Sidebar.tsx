/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import Tilt from "react-parallax-tilt";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Dashboard", href: "#1", current: false },
  { name: "Dashboard", href: "#2", current: false },
  { name: "Dashboard", href: "#3", current: false },
  {
    name: "Team",
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];
const secondaryNavigation = [
  { name: "Website redesign", href: "#" },
  { name: "GraphQL API", href: "#" },
  { name: "Customer migration guides", href: "#" },
  { name: "Profit sharing program", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex border-r border-stone-200 dark:border-stone-700 pt-5 pb-4 max-h-[calc(100vh-61px)] mt-[61px] overflow-y-auto relative">
      <div className=" mt-5">
        <nav className="flex-1 px-4 space-y-2" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={`nav.${item.name}`} className="rounded-md overflow-hidden">
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-stone-100 text-stone-900 dark:bg-stone-700 dark:text-stone-100"
                      : "text-stone-600 dark:text-stone-500 hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-700/80 dark:hover:text-stone-300",
                    "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md transition"
                  )}
                >
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-stone-100 text-stone-900"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900",
                        "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      )}
                    >
                      <svg
                        className={classNames(
                          open ? "text-stone-400 rotate-90" : "text-stone-300",
                          "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-stone-400 transition-colors ease-in-out duration-150"
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                      {item.name}
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-stone-600 rounded-md hover:text-stone-900 hover:bg-stone-50"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
          <div className="space-y-1">
            <h3
              className="px-3 text-xs font-semibold text-stone-500 uppercase tracking-wider"
              id="projects-headline"
            >
              Projects
            </h3>
            <div
              className="space-y-1"
              role="group"
              aria-labelledby="projects-headline"
            >
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-stone-600 rounded-md hover:text-stone-900 hover:bg-stone-50"
                >
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
