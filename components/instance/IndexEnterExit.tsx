import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function IndexEnterExit() {
  const [show, setShow] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center"
    >
      <AnimatePresence exitBeforeEnter>
        {show && (
          <>
            <motion.div
              key={`enter.card1`}
              className="rounded-full w-24 h-24 bg-gradient-to-br from-indigo-300 to-sky-50/70 dark:from-indigo-300/50 dark:to-sky-50/30"
              initial={{ opacity: 0, scale: 0.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.05 }}
            />
            <div className="flex space-x-4">
              <motion.div
                key={`enter.card2`}
                className="rounded-full w-24 h-24 bg-gradient-to-br from-rose-300 to-indigo-50/70 dark:from-rose-300/50 dark:to-indigo-50/30"
                initial={{ opacity: 0, scale: 0.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.05 }}
                transition={{ delay: 0.05 }}
              />
              <motion.div
                key={`enter.card2`}
                className="rounded-full w-24 h-24 bg-gradient-to-br from-sky-300 to-rose-50/70 dark:from-sky-300/50 dark:to-rose-50/30"
                initial={{ opacity: 0, scale: 0.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.05 }}
                transition={{ delay: 0.1 }}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="absolute w-full text-center bottom-2 text-xs left-0">
        <button
          onClick={() => setShow(!show)}
          className=" text-stone-500 hover:text-stone-700 transition dark:text-stone-400 py-1 px-2 bg-stone-50 hover:bg-white dark:bg-stone-700 dark:hover:bg-stone-800 rounded-md shadow-sm"
        >
          Toggle
        </button>
      </div>
    </motion.div>
  );
}

export default IndexEnterExit;
