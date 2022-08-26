import Image from "next/image";
import { useTranslation } from "next-i18next";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { Button } from "@fluid-design/fluid-ui";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

/** Merge classes with tailwind-merge with clsx full feature */
function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const CardStandardComponent = ({ src = undefined, ...props }) => {
  const { t } = useTranslation("image");
  const contrastRing = `contrast-more:border contrast-more:border-primary-800 dark:contrast-more:border-primary-200`;
  return (
    <div
      className={clsxm(
        `component card-bg flex w-full max-w-xs translate-x-0 transform flex-col overflow-hidden rounded-xl bg-primary-50 shadow  dark:bg-primary-900 dark:contrast-more:bg-black`,
        contrastRing,
        props.className ? props.className : `aspect-[1/1.15]`
      )}
    >
      <div className="h-full">
        <div className="pointer-events-none relative h-full w-full select-none overflow-hidden">
          <Image
            alt="Sunrise in the national park Gantrisch in Bern, Switzerland. By Alain from Unsplash."
            src={
              src
                ? src
                : `https://images.unsplash.com/photo-1612993239130-c5e816a63d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`
            }
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex h-full flex-grow flex-col px-4 pt-4 pb-2">
        <div className="flex-grow">
          <h2 className="text-xs text-primary-500 contrast-more:font-bold contrast-more:text-primary-700 dark:text-primary-500 dark:contrast-more:text-primary-300">
            France
          </h2>
          <h1 className="font-semibold contrast-more:font-bold dark:text-primary-100">
            Chamonix Centre-ville
          </h1>
          <p className="pt-1.5 pb-2 text-sm leading-tight text-primary-600 contrast-more:font-medium contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-100">
            A photo shot by Guillaume Marques on Unsplash.
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <Button size="xs" weight="light" color="blue">
            {t(`Card Button`, { ns: "card" })}
          </Button>
          <div className="-mr-2 flex">
            <Button
              weight="clear"
              color="sky"
              shape="pill"
              className="text-gray-500 hocus:text-inherit dark:text-gray-400"
              iconOnly
            >
              <span className="sr-only">Share this post</span>
              <ShareIcon className="h-5 w-5" />
            </Button>
            <Button
              weight="clear"
              color="rose"
              shape="pill"
              className="text-gray-500 hocus:text-inherit dark:text-gray-400"
              iconOnly
            >
              <span className="sr-only">Fav this post</span>
              <HeartIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStandardComponent;
