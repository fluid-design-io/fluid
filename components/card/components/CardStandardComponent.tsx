import Image from "next/image";
import { useTranslation } from "next-i18next";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

function CardStandardComponent({ setNotification }) {
  const { t } = useTranslation("image");
  const contrastRing = `prefers-contrast:border prefers-contrast:border-stone-800 dark:prefers-contrast:border-stone-200`;
  return (
    <div className="mx-auto">
      {/* transform translate-x-0 is needed to patch ios touch will break rounded corners. */}
      <div
        className={`w-full max-w-xs overflow-hidden transform translate-x-0 shadow component card-bg rounded-xl bg-stone-5 dark:bg-stone-900 dark:prefers-contrast:bg-black ${contrastRing}`}
      >
        <div className="relative w-full overflow-hidden aspect-video">
          <Image
            alt="Sunrise in the national park Gantrisch in Bern, Switzerland. By Alain from Unsplash."
            src={`https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="px-4 pt-4 pb-2">
          <div className="flex-grow">
            <h2 className="text-xs text-stone-500 dark:text-stone-500 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-300 prefers-contrast:font-bold">
              Subtitle
            </h2>
            <h1 className="font-semibold dark:text-stone-100 prefers-contrast:font-bold">
              Card Title
            </h1>
            <p className="pt-1.5 pb-2 text-sm text-stone-600 dark:text-stone-300 leading-tight prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-100 prefers-contrast:font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="flex items-center justify-between pt-1">
            <button
              className={`px-2 py-1 text-xs font-semibold uppercase transition rounded bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-200 hover:bg-stone-700 hover:text-stone-100 dark:hover:bg-stone-600 dark:active:bg-stone-500 dark:hover:text-stone-100 focus:bg-stone-700 focus:text-stone-100 dark:focus:bg-stone-600 dark:focus:text-stone-100 prefers-contrast:py-2 prefers-contrast:px-3 prefers-contrast:dark:bg-transparent prefers-contrast:font-bold ${contrastRing}`}
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: t(`Card Button`),
                })
              }
            >
              button
            </button>
            <div className="flex -mr-2">
              <button className="p-2 rounded-full hover:bg-stone-200/50 focus:bg-stone-200/50 dark:hover:bg-stone-600 dark:focus:bg-stone-600 prefers-contrast:ring-stone-800 dark:prefers-contrast:ring-stone-200 prefers-contrast:ring-1 prefers-contrast:ml-2">
                <span className="sr-only">Share this post</span>
                <ShareIcon
                  className="w-5 h-5 text-stone-400 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-200"
                  onClick={() =>
                    setNotification({
                      enabled: true,
                      message: t(`Share Icon`),
                      Icon: ShareIcon,
                    })
                  }
                />
              </button>
              <button className="p-2 rounded-full hover:bg-stone-200/50 focus:bg-stone-200/50 dark:hover:bg-stone-600 dark:focus:bg-stone-600 prefers-contrast:ring-stone-800 dark:prefers-contrast:ring-stone-200 prefers-contrast:ring-1 prefers-contrast:ml-2">
                <span className="sr-only">Fav this post</span>
                <HeartIcon
                  className="w-5 h-5 text-stone-400 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-200"
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
    </div>
  );
}

export default CardStandardComponent;
