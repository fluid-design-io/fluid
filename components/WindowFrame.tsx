import { motion } from "framer-motion";
export const WindowDots = (
  <div className="flex items-center h-8 space-x-1.5 px-3">
    <div className="w-2.5 h-2.5 bg-stone-300 dark:bg-stone-600 contrast-more:bg-stone-400 dark:contrast-more:bg-stone-300 rounded-full" />
    <div className="w-2.5 h-2.5 bg-stone-300 dark:bg-stone-600 contrast-more:bg-stone-400 dark:contrast-more:bg-stone-300 rounded-full" />
    <div className="w-2.5 h-2.5 bg-stone-300 dark:bg-stone-600 contrast-more:bg-stone-400 dark:contrast-more:bg-stone-300 rounded-full" />
  </div>
);
function WindowFrame({ sidebar = null, content, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`rounded-xl border border-stone-200/50 dark:border-stone-700 contrast-more:border-stone-400 dark:contrast-more:border-stone-500 bg-stone-100 dark:bg-stone-700/50 flex overflow-hidden shadow-lg ${
        props.className ? props.className : ``
      } `}
    >
      {sidebar && (
        <div className="min-w-[180px] bg-stone-50 dark:bg-stone-700 flex-col relative pb-1">
          {WindowDots}
          <div className="flex items-center justify-center flex-1">
            <div className="w-full text-sm">{sidebar}</div>
          </div>
        </div>
      )}
      <div className="relative flex items-center justify-center flex-1 w-full">
        {!sidebar && (
          <div className="absolute top-0 left-0 z-10">{WindowDots}</div>
        )}
        {content}
      </div>
    </motion.div>
  );
}

export default WindowFrame;
