import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as StartIconOutline } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const StaredButton = ({ stared, setNotification }) => {
  const { t } = useTranslation("list");
  const [isStared, setIsStared] = useState(stared);
  return isStared ? (
    <button
      onClick={() => {
        setIsStared(!isStared);
        setNotification({
          enabled: true,
          message: t(`Detail.unstarted`, { ns: "list" }),
          Icon: StartIconOutline,
        });
      }}
      className="absolute p-1.5 rounded-full ltr:right-0.5 ltr:left-auto rtl:left-0.5 rtl:right-auto  contrast-more:group-focus-visible:bg-stone-50 contrast-more:group-hover:bg-stone-50 dark:contrast-more:group-focus-visible:bg-stone-900 dark:contrast-more:group-hover:bg-stone-900 transition"
    >
      <StarIcon className="w-5 h-5 text-yellow-400" />
    </button>
  ) : (
    <button
      onClick={() => {
        setIsStared(!isStared);
        setNotification({
          enabled: true,
          message: t(`Detail.started`, { ns: "list" }),
          Icon: StarIcon,
        });
      }}
      className="group-hover:opacity-100 group-focus:opacity-100 focus:opacity-100 opacity-80 pointer-hover:opacity-0 absolute p-1.5 rounded-full  ltr:right-0.5 ltr:left-auto rtl:left-0.5 rtl:right-auto contrast-more:group-focus-visible:bg-stone-900 contrast-more:group-hover:bg-stone-900 transition"
    >
      <StarIcon className="w-5 h-5 text-stone-300 dark:text-stone-600 dark:contrast-more:text-stone-100" />
    </button>
  );
};

function ListDetailComponent({ setNotification, ...props }) {
  const list = [
    {
      title: "Lemur",
      description: "16-19 years • Primates • 110+ species ",
      src: "https://images.unsplash.com/photo-1551336631-7de698b111f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      stared: false,
    },
    {
      title: "Monkey",
      description: "20 years • Primates • 260+ species",
      src: "https://images.unsplash.com/photo-1554457945-ba5df6648602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      stared: true,
    },
    {
      title: "Owl",
      description: "9-10 years • Strigiformes • 200+ species",
      src: "https://images.unsplash.com/photo-1549619856-ac562a3ed1a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      stared: false,
    },
  ];
  return (
    <div
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 component contrast-more:bg-white dark:contrast-more:bg-stone-900 contrast-more:contrast-ring ${
        props.className ? props.className : ``
      } `}
    >
      <ul className="divide-y select-none divide-stone-200/50 dark:divide-stone-700/30 contrast-more:divide-stone-600 dark:contrast-more:divide-stone-200">
        <li className="flex justify-between px-2 py-1 list-detail-li">
          <h1 className="text-xs font-semibold text-stone-700 dark:text-stone-200">
            Animal book
          </h1>
          <p className="text-xs text-stone-500/75 dark:text-stone-400 dark:contrast-more:text-stone-200">
            33 animals
          </p>
        </li>
        {list.map(({ title, description, src, stared }) => (
          <li
            key={title}
            className="flex space-x-2 items-center px-2 py-1.5 relative group hover:bg-stone-200/30 focus:bgstone-200/30 dark:hover:bg-stone-600/30 dark:focus:bg-stone-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 group transition outline-none"
            tabIndex={0}
          >
            <div className="relative flex-shrink-0 w-8 h-8 overflow-hidden rounded-full rtl:ml-2">
              <Image alt={title} src={src} layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 select-none">
              <h3 className="text-sm font-semibold leading-4 contrast-more:text-base md:!text-base text-stone-800 dark:text-stone-300 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 dark:contrast-more:group-focus-visible:text-stone-900 dark:contrast-more:group-hover:text-stone-900">
                {title}
              </h3>
              <p className="leading-none md:!leading-tight py-0.5 text-xs contrast-more:text-sm contrast-more:font-medium md:!text-sm text-stone-600/90 dark:text-stone-400/80 max-w-[80%] sm:max-w-[90%] line-clamp-2 md:!line-clamp-1 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 dark:contrast-more:group-focus-visible:text-stone-800 dark:contrast-more:group-hover:text-stone-800">
                {description}
              </p>
            </div>
            <StaredButton stared={stared} setNotification={setNotification} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDetailComponent;
