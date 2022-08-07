import { HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../../public/assets/index-card-bg.jpg";

function IndexCard() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: "just" }}
      className="w-5/6 overflow-hidden rounded-lg shadow-lg md:!w-1/2 bg-stone-50 dark:bg-stone-800 shadow-stone-900/10 dark:shadow-stone-900/30 component"
    >
      <div>
        <div className="relative overflow-hidden aspect-video">
          <Image
            alt="landscape of a mountain at the background with clear sky"
            src={bg}
            layout="fill"
          />
        </div>
        <div className="p-2.5">
          <div className="flex-grow">
            <h2 className="text-xs text-stone-500 dark:text-stone-500 contrast-more:text-stone-700 dark:contrast-more:text-stone-300">
              Subtitle
            </h2>
            <h1 className="font-semibold dark:text-stone-100">Card Title</h1>
            <p className="pt-1.5 pb-2 text-sm text-stone-600 dark:text-stone-300 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
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
    </motion.div>
  );
}

export default IndexCard;
