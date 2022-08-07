import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function ListDetailLargeComponent({ ...props }) {
  const list = [
    {
      title: "Erin",
      description: "I'm on my way!",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      time: "9:42 AM",
    },
    {
      title: "Sara Mckenna",
      description: "👌",
      src: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      time: "Yesterday",
    },
    {
      title: "Anya Deleon",
      description: "Good question - I am still trying to figure that out!",
      src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      time: "Sunday",
    },
  ];
  return (
    <div
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 component contrast-more:bg-white dark:contrast-more:bg-stone-900 contrast-more:contrast-ring ${
        props.className ? props.className : ``
      } `}
    >
      <ul className="divide-y select-none divide-stone-200/50 dark:divide-stone-700/30 contrast-more:divide-stone-600 dark:contrast-more:divide-stone-200">
        {list.map(({ title, description, src, time }) => (
          <li
            key={title}
            className="relative flex items-center px-4 py-2 space-x-3 transition outline-none hover:bg-stone-200/30 focus:bgstone-200/30 dark:hover:bg-stone-600/30 dark:focus:bg-stone-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 group"
            tabIndex={0}
          >
            <div className="relative overflow-hidden rounded-full w-11 h-11 rtl:ml-4">
              <Image alt={title} src={src} layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 select-none">
              <div className={`flex justify-between items-center`}>
                <h3 className="text-sm font-semibold md:!text-base text-stone-800 dark:text-stone-300 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 dark:contrast-more:group-focus-visible:text-stone-900 dark:contrast-more:group-hover:text-stone-900 line-clamp-1 contrast-more:text-base">
                  {title}
                </h3>
                <p
                  className={`flex-shrink-0 text-stone-400 dark:text-stone-400/80 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 flex items-center md:!text-sm text-xs`}
                >
                  {time}
                  <span className={`rtl:!block hidden`}>
                    <ChevronLeftIcon className={`w-4 h-4 transition`} />
                  </span>
                  <span className={`rtl:hidden block`}>
                    <ChevronRightIcon className={`w-4 h-4 transition`} />
                  </span>
                </p>
              </div>
              <p className="text-xs contrast-more:text-sm contrast-more:font-medium leading-tight md:!text-sm text-stone-600/90 dark:text-stone-400/80 line-clamp-2 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 dark:contrast-more:group-focus-visible:text-stone-800 dark:contrast-more:group-hover:text-stone-800 md:!leading-tight min-h-[1.75rem] w-5/6 md:!w-full">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDetailLargeComponent;
