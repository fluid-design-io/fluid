/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import logoDark from "../../public/assets/icon-dark.svg";
import logoLight from "../../public/assets/icon-light.svg";
import Link from "next/link";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentReportIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8 md:justify-start md:space-x-2.5 border-b border-b-stone-200 dark:border-b-stone-700 backdrop-filter backdrop-blur-xl bg-stone-100/70 dark:bg-stone-800/60 ">
        <div>
          <Link href={"/"}>
            <a className="flex">
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
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Link href={"/"}>
            <a className="flex">
              <div className="flex font-[Nunito] text-stone-700 dark:text-stone-200 font-bold text-[1.175rem]">
                <p>FluidDesign</p>
              </div>
            </a>
          </Link>
          <div className="flex items-center space-x-4 text-sm lg:space-x-6 md:ml-12">
            {/* <Link href="/components">
              <a className="font-medium text-stone-500 hover:text-stone-900 dark:text-stone-200">
                Studio
              </a>
            </Link>
            <Link href="/components">
              <a className="font-medium text-stone-500 hover:text-stone-900 dark:text-stone-200">
                Components
              </a>
            </Link> */}
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
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="divide-y-2 rounded-lg shadow-lg bg-stone-200 dark:bg-stone-700 ring-1 ring-black ring-opacity-5 divide-stone-50 dark:divide-stone-600">
            <div className="px-5 pt-5 pb-6">
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
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="px-5 py-6"></div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
