import { HeartIcon, UserIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useState } from "react";

function IndexSoft() {
  const [isFav, setIsFav] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "just" }}
        className="w-5/6 h-1/2 md:!w-2/3 md:!h-3/5 neumorphism"
      >
        <div className="relative w-full h-full overflow-hidden transition select-none dark:bg-primary-700 rounded-2xl material-shadow-md hover:material-shadow active:material-shadow-sm bg-gradient-to-tl from-primary-100 to-primary-200/75 dark:from-primary-700 dark:to-primary-800/75 touch-pan-y">
          <div className="w-full h-full">
            <div
              className="absolute right-1.5 bottom-1.5 p-1 rounded-full  transition active:scale-[0.93] border border-transparent cursor-pointer hover:material-inset-sm pointer-touch:material-inset-xs"
              onClick={() => setIsFav(!isFav)}
            >
              <HeartIcon
                className={`w-4 h-4 m-1 transition ${
                  isFav
                    ? `text-rose-500 dark:text-primary-200`
                    : `text-primary-400 dark:text-primary-400/50`
                }`}
              />
            </div>
            <div className="absolute left-2.5 bottom-2.5 rounded-full w-20  flex material-shadow-sm hover:material-shadow-xs  dark:material-shadow-sm transition">
              <div className="rounded-full bg-primary-300/50 dark:bg-primary-500">
                <UserIcon className="w-4 h-4 m-1 text-primary-400 dark:text-primary-700" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="absolute w-full text-xs text-center bottom-2 text-primary-400 dark:text-primary-500">
        <span className="hidden pointer-hover:!block">
          Try hover on the card and click buttons
        </span>
        <span className="hidden pointer-touch:!block">
          Try tap the card and click buttons
        </span>
      </p>
    </>
  );
}

export default IndexSoft;
