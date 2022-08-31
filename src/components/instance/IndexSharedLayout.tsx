import { XMarkIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useId,useState } from 'react';

function IndexSharedLayout() {
  const [active, setActive] = useState(null);
  const id = useId();
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        className="border border-dashed border-primary-300 dark:border-primary-700 contrast-more:border-primary-600 dark:contrast-more:border-primary-400 rounded-xl w-5/6 md:!w-2/3 md:!h-3/5 h-1/2"
        exit={{ opacity: 0 }}
        initial={false}
      >
        <div className='relative w-full h-full'>
          {!active ? (
            <motion.div
              animate={{ borderRadius: 25 }}
              className='absolute bottom-0 right-0 overflow-hidden shadow bg-primary-700 dark:bg-primary-100'
              initial={{ borderRadius: 12 }}
              layoutId={`shape.1.${id}`}
            >
              <motion.button className='p-2 ' onClick={() => setActive(true)}>
                <PencilIcon className='w-5 h-5 text-white dark:text-primary-700' />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              animate={{ borderRadius: 12 }}
              className='relative w-full h-full py-2 overflow-hidden shadow-sm rounded-xl bg-primary-50 dark:bg-primary-800'
              exit={{ borderRadius: 25 }}
              initial={{ borderRadius: 25 }}
              layoutId={`shape.1.${id}`}
            >
              <motion.div
                animate={{ opacity: 1, transition: { delay: 0.45 } }}
                className='font-semibold text-lg md:!text-xl text-primary-700 dark:text-primary-200 pb-1.5 px-4 flex justify-between component'
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                <h1>New Note</h1>
                <button
                  className='p-1 -mr-1 rounded-full dark:bg-primary-700/70 dark:hover:bg-primary-700'
                  onClick={() => setActive(false)}
                >
                  <XMarkIcon className='w-4 h-4 md:!w-5 md:!h-5 text-primary-500 dark:text-primary-400' />
                </button>
              </motion.div>
              <motion.div
                animate={{ opacity: 1, transition: { delay: 0.65 } }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
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
