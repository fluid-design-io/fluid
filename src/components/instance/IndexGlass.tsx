import { HeartIcon, UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

function IndexGlass() {
  const [isFav, setIsFav] = useState(false);
  return (
    <>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className='w-5/6 h-1/2 md:!w-2/3 md:!h-3/5 neumorphism relative z-[1]'
        exit={{ y: -10, opacity: 1 }}
        initial={{ y: 10, opacity: 1 }}
        transition={{ type: 'just' }}
      >
        <Tilt
          className='relative w-full h-full overflow-hidden transition border shadow-lg select-none glass-glare rounded-2xl bg-gradient-to-tl from-white/20 to-primary-200/5 border-white/20 dark:border-white/5 dark:from-primary-500/20 dark:to-primary-800/10 backdrop-filter backdrop-blur-xl shadow-sky-800/10 touch-pan-y'
          glareEnable={true}
          glareMaxOpacity={1}
          tiltEnable={false}
        >
          <div className='w-full h-full'>
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
                    ? `text-primary-50 dark:text-primary-200`
                    : `text-primary-50/80 dark:text-primary-700`
                }`}
              />
            </div>
            <motion.div className='absolute left-2.5 bottom-2.5 rounded-full w-20 hover:bg-primary-50/30 dark:hover:bg-primary-100/10 transition border-primary-50/50 dark:border-white/5 border flex z-10'>
              <div className='border-r rounded-full bg-primary-50/10 dark:bg-primary-500/10 border-primary-50/50 dark:border-white/5'>
                <UserIcon className='w-4 h-4 m-1 text-primary-50/80 dark:text-primary-200/30' />
              </div>
            </motion.div>
          </div>
        </Tilt>
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        className='absolute inset-0 z-0 flex items-center justify-center w-full h-full overflow-hidden from-sky-200 to-indigo-100 dark:from-sky-900/20 dark:to-indigo-800/20 bg-gradient-to-br'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        <div className='rounded-full w-32 h-32 bg-gradient-to-br to-sky-300 from-indigo-50/70 dark:to-sky-300/40 dark:from-indigo-50/20 -ml-[50%] -mt-[35%] absolute' />
        <div className='rounded-full w-32 h-32 bg-gradient-to-br from-indigo-300 to-sky-50/70 dark:from-indigo-300/40 dark:to-sky-50/20 ml-[50%] mt-[35%] absolute' />
      </motion.div>
      <p className='absolute w-full text-xs text-center bottom-2 text-primary-700/70 dark:text-primary-300'>
        <span className='hidden pointer-hover:!block'>
          Try hover on the card and click buttons
        </span>
        <span className='hidden pointer-touch:!block'>
          Try tap the card and click buttons
        </span>
      </p>
    </>
  );
}

export default IndexGlass;
