import Image from "next/image";
import { useTranslation } from "next-i18next";

function CardASLargeImageComponent({
  setNotification,
  srcs = undefined,
  ...props
}) {
  const { t } = useTranslation("card");
  const raw = {
    collage: ``,
  };
  const handleClick = (name) => {
    setNotification({ enabled: true, message: name });
  };
  return (
    <div
      className={`w-full max-w-xs overflow-hidden transform translate-x-0 shadow component card-bg rounded-xl h-full flex flex-col items-stretch ${
        props.className ? props.className : ` aspect-[1/1.15]`
      }`}
    >
      <div className="relative flex-grow">
        <div className="relative w-full h-full">
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
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between flex-shrink-0 w-full px-4 py-4 space-x-4 bg-stone-50/30 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 backdrop-brightness-105">
        <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-lg">
          <div className="relative w-full h-full">
            <Image
              src={
                srcs
                  ? srcs[1]
                  : "https://images.unsplash.com/photo-1538437616090-64c780652422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
              }
              alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h2 className="font-medium leading-tight text-stone-800">
            Card Title
          </h2>
          <p className="text-sm leading-none text-stone-600">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="px-3 py-1.5 font-bold rounded-full bg-stone-50 text-sky-600 min-w-[4.5rem] max-w-[5rem] text-ellipsis truncate hover:bg-stone-300 transition select-none text-sm">
            {t(`App Store.GET`, { ns: "card" })}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardASLargeImageComponent;
