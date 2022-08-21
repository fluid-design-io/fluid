import Image from "next/image";
import { useTranslation } from "next-i18next";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

function CardStandardComponent({ setNotification, src = undefined, ...props }) {
  const { t } = useTranslation("image");
  const contrastRing = `contrast-more:border contrast-more:border-primary-800 dark:contrast-more:border-primary-200`;
  return (
    <div
      className={`w-full max-w-xs overflow-hidden transform translate-x-0 shadow component card-bg rounded-xl bg-primary-50 dark:bg-primary-900 dark:contrast-more:bg-black ${contrastRing} ${
        props.className ? props.className : `aspect-[1/1.15]`
      } flex flex-col`}
    >
      <div className="h-full">
        <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
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
      <div className="flex flex-col flex-grow h-full px-4 pt-4 pb-2">
        <div className="flex-grow">
          <h2 className="text-xs text-primary-500 dark:text-primary-500 contrast-more:text-primary-700 dark:contrast-more:text-primary-300 contrast-more:font-bold">
            {t("Subtitle", { ns: "common" })}
          </h2>
          <h1 className="font-semibold dark:text-primary-100 contrast-more:font-bold">
            {t("Card Title", { ns: "common" })}
          </h1>
          <p className="pt-1.5 pb-2 text-sm text-primary-600 dark:text-primary-300 leading-tight contrast-more:text-primary-900 dark:contrast-more:text-primary-100 contrast-more:font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <button
            className={`px-2 py-1 text-xs font-semibold uppercase transition rounded bg-primary-200 text-primary-700 dark:bg-primary-800 dark:text-primary-200 hover:bg-primary-700 hover:text-primary-100 dark:hover:bg-primary-600 dark:active:bg-primary-500 dark:hover:text-primary-100 focus:bg-primary-700 focus:text-primary-100 dark:focus:bg-primary-600 dark:focus:text-primary-100 contrast-more:py-2 contrast-more:px-3 contrast-more:dark:bg-transparent contrast-more:font-bold ${contrastRing}`}
            onClick={() =>
              setNotification({
                enabled: true,
                message: t(`Card Button`, { ns: "card" }),
              })
            }
          >
            {t(`Card Button`, { ns: "card" })}
          </button>
          <div className="flex -mr-2">
            <button className="p-2 rounded-full hover:bg-primary-200/50 focus:bg-primary-200/50 dark:hover:bg-primary-600 dark:focus:bg-primary-600 contrast-more:ring-primary-800 dark:contrast-more:ring-primary-200 contrast-more:ring-1 contrast-more:ml-2">
              <span className="sr-only">Share this post</span>
              <ShareIcon
                className="w-5 h-5 text-primary-400 contrast-more:text-primary-700 dark:contrast-more:text-primary-200"
                onClick={() =>
                  setNotification({
                    enabled: true,
                    message: t(`Share Icon`),
                    Icon: ShareIcon,
                  })
                }
              />
            </button>
            <button className="p-2 rounded-full hover:bg-primary-200/50 focus:bg-primary-200/50 dark:hover:bg-primary-600 dark:focus:bg-primary-600 contrast-more:ring-primary-800 dark:contrast-more:ring-primary-200 contrast-more:ring-1 contrast-more:ml-2">
              <span className="sr-only">Fav this post</span>
              <HeartIcon
                className="w-5 h-5 text-primary-400 contrast-more:text-primary-700 dark:contrast-more:text-primary-200"
                onClick={() =>
                  setNotification({
                    enabled: true,
                    message: t(`Heart Icon`),
                    Icon: HeartIcon,
                  })
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardStandardComponent;
