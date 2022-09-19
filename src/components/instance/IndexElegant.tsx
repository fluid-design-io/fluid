import { HeartIcon, UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

function IndexElegant() {
  const [onClick, setOnClick] = useState(false);
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
        <div className='relative w-full h-full transition card-wrap'>
          <Tilt
            className='h-full overflow-hidden transition border select-none bg-gray-200/75 elegant-glare dark:bg-gray-700 border-gray-50 dark:border-gray-600/50 rounded-xl ring-transparent pointer-touch:shadow-ring-light dark:pointer-touch:shadow-ring-dark hover:shadow-ring-light dark:hover:shadow-ring-dark touch-pan-y'
            glareEnable={true}
            glareMaxOpacity={1}
            glarePosition='all'
            tiltMaxAngleX={onClick ? 0 : 4}
            tiltMaxAngleY={onClick ? 0 : 4}
          >
            <button
              className='w-full h-full'
              onMouseDown={() => setOnClick(true)}
              onMouseUp={() => setOnClick(false)}
            >
              <span className='sr-only'>
                {isFav ? 'UnFavorite' : 'Favorite'} current card
              </span>
              <div
                className={`absolute right-2.5 bottom-2.5 rounded-full active:scale-95 transition group cursor-pointer card-button z-10 hover:shadow-ring-light-sm dark:hover:shadow-ring-dark-sm ${
                  isFav
                    ? `bg-rose-500`
                    : `bg-gray-300/50 dark:bg-gray-500/50 contrast-more:bg-gray-500 dark:contrast-more:bg-gray-400`
                }`}
                onClick={() => {
                  setIsFav(!isFav);
                }}
              >
                <HeartIcon
                  className={`w-4 h-4 m-1 transition group-active:scale-75 ${
                    isFav
                      ? `text-gray-50 dark:text-gray-200`
                      : `text-gray-400 dark:text-gray-700`
                  }`}
                />
              </div>
              <motion.div className='absolute left-2.5 bottom-2.5 rounded-full w-20 bg-gray-300/50 dark:bg-gray-500/50 flex z-10 hover:shadow-ring-light-sm dark:hover:shadow-ring-dark-sm'>
                <div className='rounded-full bg-gray-300/50 dark:bg-gray-500'>
                  <UserIcon className='w-4 h-4 m-1 text-gray-400 dark:text-gray-700 contrast-more:text-gray-200 dark:contrast-more:text-gray-900' />
                </div>
              </motion.div>
            </button>
          </Tilt>
        </div>
      </motion.div>
      <p className='absolute w-full text-xs text-center bottom-2 text-gray-400 dark:text-gray-500'>
        <span className='hidden pointer-hover:block'>
          Try hover on the card and click buttons
        </span>
        <span className='hidden pointer-touch:block'>
          Try tap the card and click buttons
        </span>
      </p>
    </>
  );
}

export default IndexElegant;
