import Image from "next/image";
import { useTranslation } from "next-i18next";

function CardASLargeImageComponent({
  setNotification,
  srcs = undefined,
  ...props
}) {
  const { t } = useTranslation("card");
  return (
    <div
      className={`w-full max-w-xs overflow-hidden shadow-lg shadow-stone-900/10 component card-bg rounded-xl h-full flex flex-col items-stretch relative motion-safe:hover:scale-[0.97] motion-safe:active:scale-95 motion-safe:transition ${
        props.className ? props.className : ` aspect-[1/1.15]`
      }`}
    >
      <div
        className="relative flex-grow"
        tabIndex={0}
        aria-label={`${t("Card")}, Cool things to check out.`}
        onClick={() =>
          setNotification({
            enabled: true,
            message: t(`Card`),
          })
        }
      >
        {/* Light mode image */}
        <div className="relative w-full h-full pointer-events-none select-none dark:hidden touch-none">
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
        <div className="relative hidden w-full h-full pointer-events-none select-none dark:block touch-none">
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
      <div className="absolute top-0 left-0 p-5 z-[2] pointer-events-none dark:contrast-more:[text-shadow:0px_2px_7.5px_rgba(0,0,0,0.75)]">
        <p className="text-sm font-medium uppercase transition text-stone-800/60 dark:text-stone-200/75 contrast-more:font-bold contrast-more:text-stone-800 dark:contrast-more:text-stone-100">
          {t("Subtitle", { ns: "common" })}
        </p>
        <h3 className="w-4/5 pt-1 text-3xl font-bold dark:text-stone-50 text-stone-800">
          {t("App Store.cool-things", { ns: "card" })}
        </h3>
      </div>
      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between flex-shrink-0 w-full px-4 py-4 space-x-4 bg-stone-50 bg-opacity-30 dark:bg-stone-800 dark:bg-opacity-40 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 backdrop-brightness-105 dark:backdrop-brightness-95 z-[3] contrast-more:bg-opacity-80 dark:contrast-more:bg-opacity-80 transition">
        <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-lg">
          <div className="relative w-full h-full">
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
          <h2 className="font-medium leading-tight text-stone-800 dark:text-stone-50/90 contrast-more:text-stone-900 dark:contrast-more:text-stone-50 contrast-more:font-bold">
            {t("Card Title", { ns: "common" })}
          </h2>
          <p className="text-sm leading-none text-stone-800/60 dark:text-stone-50/50 line-clamp-2 contrast-more:text-stone-800 dark:contrast-more:text-stone-200 contrast-more:font-semibold">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            className="px-3 py-1.5 font-bold rounded-full bg-stone-50 text-sky-600 min-w-[4.5rem] max-w-[5rem] text-ellipsis truncate hover:bg-stone-300 transition select-none text-sm relative z-[5] dark:bg-stone-700 dark:hover:bg-stone-800 dark:text-sky-500/80 contrast-more:ring-2 contrast-more:ring-sky-700 dark:contrast-more:ring-sky-500 contrast-more:ring-offset-0 outline-none contrast-more:text-sky-700 dark:contrast-more:text-sky-400 uppercase focus-within:ring focus-within:ring-sky-500 focus-within:ring-offset border-0"
            onClick={(e) => {
              e.preventDefault();
              setNotification({
                enabled: true,
                message: t(`App Store.get`),
              });
            }}
          >
            <span className="sr-only">Card action, get this item.</span>
            {t(`App Store.get`, { ns: "card" })}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardASLargeImageComponent;
