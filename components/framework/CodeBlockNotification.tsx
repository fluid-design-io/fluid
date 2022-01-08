import { XIcon } from "@heroicons/react/outline";
import { CursorClickIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

function CodeBlockNotification({
  notification: title,
  duration = 2800,
  onDismiss,
}) {
  const shouldReduceMotion = useReducedMotion();
  const handleDismiss = () => title !== undefined && onDismiss();
  useEffect(() => {
    if (title !== undefined) {
      setTimeout(() => {
        title && handleDismiss();
      }, duration);
    }
    return () => {
      //   handleDismiss();
    };
  }, [title !== undefined]);
  return (
    <div className="absolute inset-0 w-full h-full z-[10] pointer-events-none flex-col flex items-center justify-end max-h-full overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        {title && (
          <motion.div
            key={`2`}
            className="relative w-4/5 max-w-[240px] p-1 mb-4 rounded-full shadow-lg pointer-events-auto bg-stone-50/40 dark:bg-stone-700/60 backdrop-blur-2xl backdrop-filter sm:w-3/5 shadow-stone-700/10"
            initial={{ y: shouldReduceMotion ? 0 : "100%", opacity: 0 }}
            animate={{
              y: shouldReduceMotion ? 0 : title !== undefined ? 0 : "100%",
              opacity: 1,
            }}
            exit={{ y: shouldReduceMotion ? 0 : "100%", opacity: 0 }}
            tabIndex={0}
            aria-label={`Notification, ${title} clicked`}
            transition={{ type: "spring", bounce: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CursorClickIcon className="w-5 h-5 ml-2 text-stone-800 dark:text-stone-200" />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm text-center text-stone-800 dark:text-stone-200">
                  Clicked
                </h4>
                <p className="text-xs font-semibold text-center text-stone-600 dark:text-stone-400">
                  {title}
                </p>
              </div>
              <button
                className="p-1.5 transition rounded-full mr-2 hover:bg-stone-400/10 dark:hover:bg-stone-200/10 flex-shrink-0 relative right-1"
                onClick={() => onDismiss()}
              >
                <span className="sr-only">Close Notification</span>
                <XIcon className="w-4 h-4 text-stone-800 dark:text-stone-200" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CodeBlockNotification;
