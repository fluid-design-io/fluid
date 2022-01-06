/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logoDark from "../../public/assets/icon-dark.svg";
import logoLight from "../../public/assets/icon-light.svg";
import Link from "next/link";

export default function Navbar({ logo = true, ...props }) {
  const navItems = [
    {
      name: "Components",
      description:
        "Get a better understanding of where your traffic is coming from.",
      href: "/components",
      icon: ChartBarIcon,
    },
  ];
  return (
    <Popover
      className={`z-50 transition motion-safe:duration-300 motion-reduce:transition-opacity ${
        props.className ? props.className : ``
      } `}
    >
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8 md:justify-start md:space-x-2.5 border-b border-b-stone-200 dark:border-b-stone-700 backdrop-filter backdrop-blur-xl bg-stone-100/70 dark:bg-stone-800/60 ">
        <Link href={"/"}>
          <a className="flex md:hidden">
            <span className="sr-only">Fluid Design</span>
            <div className="w-auto h-7 dark:hidden">
              <Image alt="logo" src={logoDark} width={28} height={28} />
            </div>
            <div className="hidden w-auto h-7 dark:block">
              <Image alt="logo" src={logoLight} width={28} height={28} />
            </div>
          </a>
        </Link>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <div
            className={`${!logo ? "opacity-0 pointer-events-none" : ""}`}
            aria-hidden={!logo}
          >
            <Link href={"/"}>
              <a className="flex">
                <div className="flex font-[Nunito] text-stone-700 dark:text-stone-200 font-bold text-[1.175rem]">
                  <p>FluidDesign</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-4 text-sm lg:space-x-6 md:ml-12">
            {/* <Link href="/components">
              <a className="font-medium text-stone-500 hover:text-stone-900 dark:text-stone-200">
                Studio
              </a>
            </Link> */}
            <Link href="/components">
              <a className="font-medium text-stone-500 hover:text-stone-900 dark:text-stone-200">
                Components
              </a>
            </Link>
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
            <div className="px-5 py-6">
              <nav className="grid grid-cols-1 gap-7">
                {navItems.map((navItem) => (
                  <Link key={navItem.name} href={navItem.href}>
                    <a className="flex items-center p-3 -m-3 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800">
                      {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
                        <navItem.icon className="w-6 h-6" aria-hidden="true" />
                      </div> */}
                      <div className="text-base font-medium text-stone-900 dark:text-stone-200">
                        {navItem.name}
                      </div>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
