import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function IndexEnterExit() {
  const [show, setShow] = useState(true);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className='flex flex-col items-center justify-center'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <AnimatePresence mode='wait'>
        {show && (
          <>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className='w-24 h-24 rounded-full bg-gradient-to-br from-indigo-300 to-sky-50/70 dark:from-indigo-300/50 dark:to-sky-50/30'
              exit={{ opacity: 0, scale: 0.05 }}
              initial={{ opacity: 0, scale: 0.05 }}
              key="enter.card1"
            />
            <div className='flex space-x-4'>
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className='w-24 h-24 rounded-full bg-gradient-to-br from-rose-300 to-indigo-50/70 dark:from-rose-300/50 dark:to-indigo-50/30'
                exit={{ opacity: 0, scale: 0.05 }}
                initial={{ opacity: 0, scale: 0.05 }}
                key="enter.card2"
                transition={{ delay: 0.05 }}
              />
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className='w-24 h-24 rounded-full bg-gradient-to-br from-sky-300 to-rose-50/70 dark:from-sky-300/50 dark:to-rose-50/30'
                exit={{ opacity: 0, scale: 0.05 }}
                initial={{ opacity: 0, scale: 0.05 }}
                key="enter.card3"
                transition={{ delay: 0.1 }}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <div className='absolute left-0 w-full text-xs text-center bottom-2'>
        <button
          className='px-2 py-1 transition rounded-md shadow-sm  text-primary-500 hover:text-primary-700 dark:text-primary-400 bg-primary-50 hover:bg-white dark:bg-primary-700 dark:hover:bg-primary-800'
          onClick={() => setShow(!show)}
        >
          Toggle
        </button>
      </div>
    </motion.div>
  );
}

export default IndexEnterExit;
