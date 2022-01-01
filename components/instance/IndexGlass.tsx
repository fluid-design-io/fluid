import { HeartIcon, UserIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

function IndexGlass() {
  const [isFav, setIsFav] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 1 }}
        transition={{ type: "just" }}
        className="w-11/12 h-1/3 md:w-2/3 md:h-3/5 neumorphism relative z-[1]"
      >
        <Tilt
          tiltEnable={false}
          glareEnable={true}
          glareMaxOpacity={1}
          className="glass-glare select-none overflow-hidden rounded-2xl w-full h-full transition relative bg-gradient-to-tl from-white/20 to-stone-200/5 border border-white/20 dark:border-white/5 dark:from-stone-500/20 dark:to-stone-800/10 backdrop-filter backdrop-blur-xl shadow-lg shadow-sky-800/10"
        >
          <div className="w-full h-full">
            <div
              className={`absolute right-2.5 bottom-2.5 rounded-full active:scale-95 transition group cursor-pointer card-button z-10 ${
                isFav ? `bg-rose-500/80` : ``
              }`}
              onClick={() => {
                setIsFav(!isFav);
              }}
            >
              <HeartIcon
                className={`w-4 h-4 m-1 transition group-active:scale-75 ${
                  isFav
                    ? `text-stone-50 dark:text-stone-200`
                    : `text-stone-50/80 dark:text-stone-700`
                }`}
              />
            </div>
            <motion.div className="absolute left-2.5 bottom-2.5 rounded-full w-20 hover:bg-stone-50/30 dark:hover:bg-stone-100/10 transition border-stone-50/50 dark:border-white/5 border flex z-10">
              <div className="rounded-full bg-stone-50/10 dark:bg-stone-500/10 border-r border-stone-50/50 dark:border-white/5">
                <UserIcon className="w-4 h-4 m-1 text-stone-50/80 dark:text-stone-200/30" />
              </div>
            </motion.div>
          </div>
        </Tilt>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overflow-hidden absolute z-0 inset-0 w-full h-full from-sky-200 to-indigo-100 dark:from-sky-900/20 dark:to-indigo-800/20 bg-gradient-to-br flex justify-center items-center"
      >
        <div className="rounded-full w-32 h-32 bg-gradient-to-br to-sky-300 from-indigo-50/70 dark:to-sky-300/40 dark:from-indigo-50/20 -ml-[50%] -mt-[35%] absolute" />
        <div className="rounded-full w-32 h-32 bg-gradient-to-br from-indigo-300 to-sky-50/70 dark:from-indigo-300/40 dark:to-sky-50/20 ml-[50%] mt-[35%] absolute" />
      </motion.div>
      <p className="absolute w-full text-center bottom-2 text-stone-400 dark:text-stone-500 text-xs">
        Try hover on the card and click buttons
      </p>
    </>
  );
}

export default IndexGlass;
