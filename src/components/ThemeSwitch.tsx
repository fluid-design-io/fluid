import { AnimatePresence, motion } from 'framer-motion';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

import clsxm from '../lib/clsxm';

export const ThemeSwitch = (props) => {
  const buttonVariants = {
    initial: {},
    animate: {},
    exit: {},
    tap: {
      scale: 0.9,
    },
  };
  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
      rotate: -120,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: {
      scale: 0.5,
      rotate: 90,
      opacity: 0,
    },
    tap: {
      rotate: 30,
    },
  };

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!duration-300');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!duration-300');
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }
  return (
    <div
      className={clsxm('relative min-h-[30px] min-w-[30px]', props?.className)}
    >
      <AnimatePresence initial={false}>
        <motion.button
          animate='animate'
          className='dark:hidden focus-visible:borde-gray-400/80 rounded border border-transparent p-1.5 hocus:border-gray-400/30 hocus:bg-gray-400/10 focus-visible:border focus-visible:bg-gray-500/10 focus-ring'
          exit='exit'
          initial='initial'
          key='dark-toggle'
          onClick={toggleMode}
          variants={buttonVariants}
          aria-label='Toggle dark mode'
          whileTap='tap'
        >
          <motion.div
            variants={iconVariants}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 15,
              mass: 0.2,
            }}
          >
            <MdDarkMode
              className={clsxm('h-4 w-4 fill-gray-600 transition-colors')}
            />
          </motion.div>
        </motion.button>
        <motion.button
          animate='animate'
          className='hidden dark:block focus-visible:borde-gray-400/80 absolute inset-0 rounded border border-transparent p-1.5 hocus:border-gray-400/30 hocus:bg-gray-400/10 focus-visible:border focus-visible:bg-gray-500/10 focus-ring'
          exit='exit'
          initial='initial'
          key='light-toggle'
          onClick={toggleMode}
          variants={buttonVariants}
          aria-label='Toggle dark mode'
          whileTap='tap'
        >
          <motion.div
            variants={iconVariants}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 15,
              mass: 0.2,
            }}
          >
            <MdOutlineLightMode className={clsxm('h-4 w-4 fill-gray-100')} />
          </motion.div>
        </motion.button>
      </AnimatePresence>
    </div>
  );
};
