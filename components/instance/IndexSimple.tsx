import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid, UserIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useState } from "react";

function IndexSimple() {
  const [isFav, setIsFav] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "just" }}
        className="w-11/12 h-1/3 md:w-2/3 md:h-3/5"
      >
        <div className="bg-stone-200/75 dark:bg-stone-700 select-none overflow-hidden rounded-md w-full h-full transition relative hover:shadow dark:hover:shadow-lg group">
          <div className="w-full h-full">
            <div
              className="absolute right-1.5 bottom-1.5 rounded-full  transition active:scale-[0.93] cursor-pointer hover:bg-stone-300/75 dark:hover:bg-stone-800/30 p-1"
              onClick={() => setIsFav(!isFav)}
            >
              <HeartIcon
                className={`w-4 h-4 m-1 transition ${
                  isFav ? `hidden` : `text-stone-500/60 dark:text-stone-400`
                }`}
              />
              <HeartIconSolid
                className={`w-4 h-4 m-1 transition ${
                  isFav ? `text-rose-500 dark:text-stone-200` : `hidden`
                }`}
              />
            </div>
            <motion.div className="absolute left-2.5 bottom-2.5 rounded-full w-24 flex items-center pointer-hover:opacity-0 group-hover:opacity-100 transition pointer-hover:translate-y-1 group-hover:translate-y-0">
              <div className="rounded-full bg-stone-300/50 dark:bg-stone-600 hover:bg-stone-300/20 dark:hover:bg-stone-400/70">
                <UserIcon className="w-4 h-4 m-1 text-stone-400 dark:text-stone-700" />
              </div>
              <div className="bg-stone-300/50 dark:bg-stone-500/50 w-full h-5 ml-2 rounded-md" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <p className="absolute w-full text-center bottom-2 text-stone-400 dark:text-stone-500 text-xs">
        Try hover on the card and click buttons
      </p>
    </>
  );
}

export default IndexSimple;
