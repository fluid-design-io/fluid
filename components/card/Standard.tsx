import Image from "next/image";
import { useTranslation } from "next-i18next";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { Button } from "@fluid-design/fluid-ui";

export const CardStandardComponent = ({ src = undefined, ...props }) => {
  const { t } = useTranslation("image");
  const contrastRing = `contrast-more:border contrast-more:border-primary-800 dark:contrast-more:border-primary-200`;
  return (
    <div
      className={`component card-bg w-full max-w-xs translate-x-0 transform overflow-hidden rounded-xl bg-primary-50 shadow dark:bg-primary-900 dark:contrast-more:bg-black ${contrastRing} ${
        props.className ? props.className : `aspect-[1/1.15]`
      } flex flex-col`}
    >
      <div className="h-full">
        <div className="pointer-events-none relative h-full w-full select-none overflow-hidden">
          <Image
            alt="Sunrise in the national park Gantrisch in Bern, Switzerland. By Alain from Unsplash."
            src={
              src
                ? src
                : `https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`
            }
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex h-full flex-grow flex-col px-4 pt-4 pb-2">
        <div className="flex-grow">
          <h2 className="text-xs text-primary-500 contrast-more:font-bold contrast-more:text-primary-700 dark:text-primary-500 dark:contrast-more:text-primary-300">
            {t("Subtitle", { ns: "common" })}
          </h2>
          <h1 className="font-semibold contrast-more:font-bold dark:text-primary-100">
            {t("Card Title", { ns: "common" })}
          </h1>
          <p className="pt-1.5 pb-2 text-sm leading-tight text-primary-600 contrast-more:font-medium contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <Button size="xs" weight="light" color="blue">
            {t(`Card Button`, { ns: "card" })}
          </Button>
          <div className="-mr-2 flex">
            <button className="rounded-full p-2 hover:bg-primary-200/50 focus:bg-primary-200/50 contrast-more:ml-2 contrast-more:ring-1 contrast-more:ring-primary-800 dark:hover:bg-primary-600 dark:focus:bg-primary-600 dark:contrast-more:ring-primary-200">
              <span className="sr-only">Share this post</span>
              <ShareIcon className="h-5 w-5 text-primary-400 contrast-more:text-primary-700 dark:contrast-more:text-primary-200" />
            </button>
            <button className="rounded-full p-2 hover:bg-primary-200/50 focus:bg-primary-200/50 contrast-more:ml-2 contrast-more:ring-1 contrast-more:ring-primary-800 dark:hover:bg-primary-600 dark:focus:bg-primary-600 dark:contrast-more:ring-primary-200">
              <span className="sr-only">Fav this post</span>
              <HeartIcon className="h-5 w-5 text-primary-400 contrast-more:text-primary-700 dark:contrast-more:text-primary-200" />
            </button>
            <Button weight="clear" color="blue" shape="pill" iconOnly>
              <HeartIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStandardComponent;
