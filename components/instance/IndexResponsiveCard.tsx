import { HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import bg from "../../public/assets/index/index-resp-card-bg.jpg";

function IndexResponsiveCard() {
  const [options, setOptions] = useState({ screenSize: "large" });
  const { screenSize } = options;
  const cardWrapStyle = `${
    screenSize === "large" ? `w-full max-w-[640px]` : "w-5/6"
  }`;
  const cardStyle = `${screenSize === "large" ? `flex-row` : "flex-col"}`;
  const cardImgStyle = `${screenSize === "large" ? `w-3/5` : "aspect-video"}`;
  const cardContentStyle = {
    wrap: `${screenSize === "large" ? `w-2/5 p-4` : "p-2.5"}`,
    subtitle: `${
      screenSize === "large"
        ? ``
        : screenSize === "medium"
        ? "text-base"
        : "text-xs"
    }  text-stone-500 dark:text-stone-500`,
    title: `${
      screenSize === "large"
        ? `text-xl`
        : screenSize === "medium"
        ? "text-lg"
        : "text-base"
    }  font-semibold dark:text-stone-100`,
    p: `${
      screenSize === "large"
        ? `text-base`
        : screenSize === "medium"
        ? "text-base leading-tight"
        : "text-sm leading-tight"
    } pt-1.5 pb-2 text-stone-600 dark:text-stone-300`,
  };
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: "just" }}
      className={`overflow-hidden rounded-lg shadow-lg bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 mx-auto ${cardWrapStyle}`}
    >
      <div className={`flex ${cardStyle}`}>
        <div className={`relative overflow-hidden ${cardImgStyle} `}>
          <Image alt="nature" src={bg} />
        </div>
        <div className={` ${cardContentStyle.wrap}`}>
          <div className="flex flex-col flex-grow">
            <h3 className={cardContentStyle.subtitle}>Subtitle</h3>
            <div className={cardContentStyle.title}>Card Title</div>
            <p className={cardContentStyle.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="flex items-center justify-between pt-1">
              <button className="px-2 py-1 text-xs font-semibold uppercase transition rounded bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-200 hover:bg-stone-700 hover:text-stone-100 dark:hover:bg-stone-600 dark:active:bg-stone-500 dark:hover:text-stone-100 focus:bg-stone-700 focus:text-stone-100 dark:focus:bg-stone-600 dark:focus:text-stone-100 touch-pan-y">
                button
              </button>
              <div className="flex space-x-2">
                <ShareIcon className="w-4 h-4 text-stone-400" />
                <HeartIcon className="w-4 h-4 text-stone-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IndexResponsiveCard;
