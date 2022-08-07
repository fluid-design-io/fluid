import { XIcon } from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function IndexSharedLayout() {
  const [active, setActive] = useState(null);
  return (
    <>
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`border border-dashed border-stone-300 dark:border-stone-700 contrast-more:border-stone-600 dark:contrast-more:border-stone-400 rounded-xl w-5/6 md:!w-2/3 md:!h-3/5 h-1/2`}
      >
        <div className="relative w-full h-full">
          {!active && (
            <motion.div
              key={`button`}
              layoutId={`shape.1`}
              initial={{ borderRadius: 12 }}
              animate={{ borderRadius: 25 }}
              className="absolute bottom-0 right-0 overflow-hidden shadow bg-stone-700 dark:bg-stone-100"
            >
              <motion.button onClick={() => setActive(true)} className="p-2 ">
                <PencilAltIcon className="w-5 h-5 text-white dark:text-stone-700" />
              </motion.button>
            </motion.div>
          )}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ borderRadius: 25 }}
                animate={{ borderRadius: 12 }}
                exit={{ borderRadius: 25 }}
                key={`shape`}
                layoutId={`shape.1`}
                className="relative w-full h-full py-2 overflow-hidden shadow-sm rounded-xl bg-stone-50 dark:bg-stone-800"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.45 } }}
                  exit={{ opacity: 0 }}
                  className="font-semibold text-lg md:!text-xl text-stone-700 dark:text-stone-200 pb-1.5 px-4 flex justify-between component"
                >
                  <h1>New Note</h1>
                  <button
                    onClick={() => setActive(false)}
                    className="p-1 -mr-1 rounded-full dark:bg-stone-700/70 dark:hover:bg-stone-700"
                  >
                    <XIcon className="w-4 h-4 md:!w-5 md:!h-5 text-stone-500 dark:text-stone-400" />
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.65 } }}
                  exit={{ opacity: 0 }}
                >
                  <hr className="border border-dashed border-stone-300 dark:border-stone-700 contrast-more:border-stone-500 dark:contrast-more:border-stone-500" />
                  <p className="px-4 py-2 text-sm leading-tight text-stone-600 dark:text-stone-300/80 md:!text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                    <span className="hidden md:!inline">
                      {" "}tempor incididunt ut labore et dolore magna
                    </span>
                    aliqua.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <p className="absolute w-full text-xs text-center bottom-2 text-stone-400 dark:text-stone-500">
        Click the icon to toggle the transition
      </p>
    </>
  );
}

export default IndexSharedLayout;
