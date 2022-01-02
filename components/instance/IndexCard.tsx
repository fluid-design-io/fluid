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
      className="rounded-lg w-5/6 md:w-1/2 bg-stone-50 dark:bg-stone-800 overflow-hidden shadow-lg shadow-stone-900/10 dark:shadow-stone-900"
    >
      <div>
        <div className="aspect-video overflow-hidden relative">
          <Image src={bg} layout="fill" />
        </div>
        <div className="p-2.5">
          <div className="flex-grow">
            <h3 className="text-xs text-stone-500 dark:text-stone-500">
              Subtitle
            </h3>
            <div className="font-semibold dark:text-stone-100">Card Title</div>
            <p className="pt-1.5 pb-2 text-sm text-stone-600 dark:text-stone-300 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="flex justify-between pt-1 items-center">
            <button className="bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-200 hover:bg-stone-700 hover:text-stone-100 dark:hover:bg-stone-600 dark:active:bg-stone-500 dark:hover:text-stone-100 focus:bg-stone-700 focus:text-stone-100 dark:focus:bg-stone-600 dark:focus:text-stone-100 transition text-xs font-semibold uppercase py-1 px-2 rounded touch-none">
              button
            </button>
            <div className="flex space-x-2">
              <ShareIcon className="h-4 w-4 text-stone-400" />
              <HeartIcon className="h-4 w-4 text-stone-400" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IndexCard;
