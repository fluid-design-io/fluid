import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

function IndexSimple() {
  const [isFav, setIsFav] = useState(false);
  return (
    <>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className='w-5/6 h-1/2 md:!w-2/3 md:!h-3/5'
        exit={{ y: -10, opacity: 0 }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ type: 'just' }}
      >
        <div className='relative w-full h-full overflow-hidden transition rounded-md select-none bg-primary-200/75 dark:bg-primary-700 hover:shadow dark:hover:shadow-lg group touch-pan-y'>
          <div className='w-full h-full'>
            <div
              className='absolute right-1.5 bottom-1.5 rounded-full  transition active:scale-[0.93] cursor-pointer hover:bg-primary-300/75 dark:hover:bg-primary-800/30 p-1'
              onClick={() => setIsFav(!isFav)}
            >
              <HeartIcon
                className={`w-4 h-4 m-1 transition ${
                  isFav ? `hidden` : `text-primary-500/60 dark:text-primary-400`
                }`}
              />
              <HeartIconSolid
                className={`w-4 h-4 m-1 transition ${
                  isFav ? `text-rose-500 dark:text-primary-200` : `hidden`
                }`}
              />
            </div>
            <motion.div className='absolute left-2.5 bottom-2.5 rounded-full w-24 flex items-center pointer-hover:opacity-0 group-hover:opacity-100 transition pointer-hover:translate-y-1 group-hover:translate-y-0'>
              <div className='rounded-full bg-primary-300/50 dark:bg-primary-600 hover:bg-primary-300/20 dark:hover:bg-primary-400/70'>
                <UserIcon className='w-4 h-4 m-1 text-primary-400 dark:text-primary-700' />
              </div>
              <div className='w-full h-5 ml-2 rounded-md bg-primary-300/50 dark:bg-primary-500/50' />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <p className='absolute w-full text-xs text-center bottom-2 text-primary-400 dark:text-primary-500'>
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

export default IndexSimple;
