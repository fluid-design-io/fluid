import { XIcon } from "@heroicons/react/outline";
import { CursorClickIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { useTranslation } from "next-i18next";

function CodeBlockNotification({
  notification: {
    enabled = false,
    Icon = CursorClickIcon,
    image = undefined,
    title = undefined,
    message = undefined,
  } = {},
  duration = 2800,
  onDismiss,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation("common");
  const handleDismiss = () => enabled && onDismiss();
  const intervalId = useRef(null);
  useEffect(() => {
    if (enabled) {
      intervalId.current = setTimeout(handleDismiss, duration);
    }
    return () => clearTimeout(intervalId.current);
  }),
    [enabled, duration, onDismiss];

  return (
    <div
      className={`absolute inset-0 w-full h-full z-30 pointer-events-none flex-col flex items-center justify-end max-h-full overflow-hidden  ${
        props.className ? props.className : ``
      } `}
    >
      <AnimatePresence exitBeforeEnter>
        {enabled && (
          <motion.div
            key={`2`}
            className="relative w-4/5 max-w-[240px] p-1 mb-4 rounded-full shadow-lg pointer-events-auto bg-stone-50/40 dark:bg-stone-700/60 backdrop-blur-2xl backdrop-filter sm:w-3/5 shadow-stone-700/10 overflow-hidden"
            initial={{ y: shouldReduceMotion ? 0 : "150%" }}
            animate={{
              y: shouldReduceMotion ? 0 : enabled ? 0 : "150%",
            }}
            exit={{ y: shouldReduceMotion ? 0 : "150%" }}
            tabIndex={0}
            aria-label={t(`notification-clicked`, {
              title: title ? title : t(`Clicked`),
            })}
            transition={{ type: "spring", bounce: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {image ? (
                  <div className="relative overflow-hidden rounded-full w-9 h-9">
                    <Image
                      src={image}
                      alt={`notification`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Icon className="w-5 h-5 ml-2 text-stone-800 dark:text-stone-200" />
                )}
              </div>
              <div className="flex-grow">
                <h4 className="text-sm text-center text-stone-800 dark:text-stone-200">
                  {title ? title : t(`Clicked`)}
                </h4>
                <p className="text-xs font-semibold text-center text-stone-600 dark:text-stone-400">
                  {message}
                </p>
              </div>
              <button
                className="p-1.5 transition rounded-full mr-2 hover:bg-stone-400/10 dark:hover:bg-stone-200/10 flex-shrink-0 relative right-1"
                onClick={() => onDismiss()}
              >
                <span className="sr-only">{t("Close Notification")}</span>
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
