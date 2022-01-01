import { XIcon } from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import { m, motion } from "framer-motion";
import { useState } from "react";

function IndexSharedLayout() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-11/12 h-1/3 md:w-2/3 md:h-3/5"
      >
        <motion.div className="w-full h-full relative">
          {isActive ? (
            <motion.div
              key={"div.active"}
              layoutId={`shape-wrap`}
              initial={{ borderRadius: 25 }}
              animate={{ borderRadius: 12 }}
              className="w-full h-full bg-stone-800 overflow-hidden relative py-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45 }}
                className="font-semibold text-xl text-stone-700 dark:text-stone-200 pb-1.5 px-4 flex justify-between"
              >
                <h1>New Note</h1>
                <button
                  onClick={() => setIsActive(false)}
                  className="rounded-full p-1 dark:bg-stone-700/70 dark:hover:bg-stone-700 -mr-1"
                >
                  <XIcon className="w-5 h-5 text-stone-200 dark:text-stone-400" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.65 }}
              >
                <hr className="border-dashed border border-stone-300 dark:border-stone-700" />
                <p className="text-stone-600 dark:text-stone-300/80 px-4 py-2 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
              <motion.div
                layoutId={`shape-create`}
                className="w-9 h-9 absolute right-0 bottom-0 opacity-0"
              />
            </motion.div>
          ) : (
            <motion.div
              key={"div.inactive"}
              layoutId={`shape-wrap`}
              initial={{ borderRadius: 12 }}
              animate={{ borderRadius: 25 }}
              className="bg-stone-100 absolute right-0 bottom-0 shadow overflow-hidden"
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={`shape-create.inactive`}
                layoutId={`shape-create`}
                onClick={() => setIsActive(true)}
                className="p-2 transition-opacity"
              >
                <PencilAltIcon className="text-white dark:text-stone-700 w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <p className="absolute w-full text-center bottom-2 text-stone-400 dark:text-stone-500 text-xs">
        Click the icon to toggle the transition
      </p>
    </>
  );
}

export default IndexSharedLayout;
