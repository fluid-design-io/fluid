import { XIcon } from '@heroicons/react/24/outline';
import { PencilAltIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState, useId } from 'react';

function IndexSharedLayout() {
  const [active, setActive] = useState(null);
  const id = useId();
  return (
    <>
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`border border-dashed border-primary-300 dark:border-primary-700 contrast-more:border-primary-600 dark:contrast-more:border-primary-400 rounded-xl w-5/6 md:!w-2/3 md:!h-3/5 h-1/2`}
      >
        <div className='relative w-full h-full'>
          {!active ? (
            <motion.div
              layoutId={`shape.1.${id}`}
              initial={{ borderRadius: 12 }}
              animate={{ borderRadius: 25 }}
              className='absolute bottom-0 right-0 overflow-hidden shadow bg-primary-700 dark:bg-primary-100'
            >
              <motion.button onClick={() => setActive(true)} className='p-2 '>
                <PencilAltIcon className='w-5 h-5 text-white dark:text-primary-700' />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ borderRadius: 25 }}
              animate={{ borderRadius: 12 }}
              exit={{ borderRadius: 25 }}
              layoutId={`shape.1.${id}`}
              className='relative w-full h-full py-2 overflow-hidden shadow-sm rounded-xl bg-primary-50 dark:bg-primary-800'
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.45 } }}
                exit={{ opacity: 0 }}
                className='font-semibold text-lg md:!text-xl text-primary-700 dark:text-primary-200 pb-1.5 px-4 flex justify-between component'
              >
                <h1>New Note</h1>
                <button
                  onClick={() => setActive(false)}
                  className='p-1 -mr-1 rounded-full dark:bg-primary-700/70 dark:hover:bg-primary-700'
                >
                  <XIcon className='w-4 h-4 md:!w-5 md:!h-5 text-primary-500 dark:text-primary-400' />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.65 } }}
                exit={{ opacity: 0 }}
              >
                <hr className='border border-dashed border-primary-300 dark:border-primary-700 contrast-more:border-primary-500 dark:contrast-more:border-primary-500' />
                <p className='px-4 py-2 text-sm leading-tight text-primary-600 dark:text-primary-300/80 md:!text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                  <span className='hidden md:!inline'>
                    {' '}
                    tempor incididunt ut labore et dolore magna
                  </span>
                  aliqua.
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <p className='absolute w-full text-xs text-center bottom-2 text-primary-400 dark:text-primary-500'>
        Click the icon to toggle the transition
      </p>
    </>
  );
}

export default IndexSharedLayout;
