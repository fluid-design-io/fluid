import Image from "next/image";
import { useTranslation } from "next-i18next";

export const CardASLargeImageComponent = ({ srcs = undefined, ...props }) => {
  const { t } = useTranslation("card");
  return (
    <div
      className={`component card-bg relative flex h-full w-full max-w-xs flex-col items-stretch overflow-hidden rounded-xl shadow-lg shadow-primary-900/10 motion-safe:transition motion-safe:hover:scale-[0.97] motion-safe:active:scale-95 ${
        props.className ? props.className : ` aspect-[1/1.15]`
      }`}
    >
      <div
        className="relative flex-grow"
        tabIndex={0}
        aria-label={`${t("Card")}, Cool things to check out.`}
        onClick={() => {}}
      >
        {/* Light mode image */}
        <div className="pointer-events-none relative h-full w-full touch-none select-none dark:hidden">
          <Image
            src={
              srcs
                ? srcs[0]
                : "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Dark mode image */}
        <div className="pointer-events-none relative hidden h-full w-full touch-none select-none dark:block">
          <Image
            src={
              srcs
                ? srcs[1]
                : "https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Top Content */}
      <div className="pointer-events-none absolute top-0 left-0 z-[2] p-5 dark:contrast-more:[text-shadow:0px_2px_7.5px_rgba(0,0,0,0.75)]">
        <p className="text-sm font-medium uppercase text-primary-800/60 transition contrast-more:font-bold contrast-more:text-primary-800 dark:text-primary-200/75 dark:contrast-more:text-primary-100">
          {t("Subtitle", { ns: "common" })}
        </p>
        <h3 className="w-4/5 pt-1 text-3xl font-bold text-primary-800 dark:text-primary-50">
          {t("App Store.cool-things", { ns: "card" })}
        </h3>
      </div>
      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] flex w-full flex-shrink-0 items-center justify-between space-x-4 bg-primary-50 bg-opacity-30 px-4 py-4 backdrop-blur-3xl backdrop-brightness-105 backdrop-saturate-150 backdrop-filter transition contrast-more:bg-opacity-80 dark:bg-primary-800 dark:bg-opacity-40 dark:backdrop-brightness-95 dark:contrast-more:bg-opacity-80">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
          <div className="relative h-full w-full">
            <Image
              src={
                srcs
                  ? srcs[2]
                  : "https://images.unsplash.com/photo-1538437616090-64c780652422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
              }
              alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h2 className="font-medium leading-tight text-primary-800 contrast-more:font-bold contrast-more:text-primary-900 dark:text-primary-50/90 dark:contrast-more:text-primary-50">
            {t("Card Title", { ns: "common" })}
          </h2>
          <p className="text-sm leading-none text-primary-800/60 line-clamp-2 contrast-more:font-semibold contrast-more:text-primary-800 dark:text-primary-50/50 dark:contrast-more:text-primary-200">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            className="focus-within:ring-offset relative z-[5] min-w-[4.5rem] max-w-[5rem] select-none truncate text-ellipsis rounded-full border-0 bg-primary-50 px-3 py-1.5 text-sm font-bold uppercase text-sky-600 outline-none transition focus-within:ring focus-within:ring-sky-500 hover:bg-primary-300 contrast-more:text-sky-700 contrast-more:ring-2 contrast-more:ring-sky-700 contrast-more:ring-offset-0 dark:bg-primary-700 dark:text-sky-500/80 dark:hover:bg-primary-800 dark:contrast-more:text-sky-400 dark:contrast-more:ring-sky-500"
            onClick={() => {}}
          >
            <span className="sr-only">Card action, get this item.</span>
            {t(`App Store.get`, { ns: "card" })}
          </button>
        </div>
      </div>
    </div>
  );
};
