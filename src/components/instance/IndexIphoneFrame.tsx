import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

import { indexElements } from '@/lib/index/data';

import IphoneFrame from '../IphoneFrame';

function IndexIphoneFrame({
  selected,
  setSelected,
  selectedComponent,
  selectedStyle,
}) {
  const controls = useAnimation();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const onDrag = (e, info) => {
    controls.set({ y: info.offset.y });
  };
  function onDragEnd(event, info) {
    const { velocity, point } = info;
    const shouldClose = velocity.y > 20 || (velocity.y >= 0 && point.y > 45);
    if (shouldClose) {
      controls.start('hidden');
    } else {
      controls.start('visible');
    }
  }
  const selectionBody = indexElements.map((item) => (
    <ul
      className='space-y-1 border-t border-gray-50/60 px-2 py-1 text-sm dark:border-gray-500/30 md:!text-base'
      key={item.category}
    >
      <li className='pointer-events-none px-2 font-semibold text-gray-600 contrast-more:text-gray-700 dark:text-gray-300 dark:contrast-more:text-gray-200'>
        {item.category}
      </li>
      {item.lists.map((list) => (
        <li key={`body.iphone.${list.name}`}>
          <button
            onFocus={() => controls.start('visible')}
            className={`${selectedStyle(
              list.name
            )} w-full overflow-hidden rounded-md px-2 py-1 text-left transition focus:outline-none focus:ring-1 focus:ring-gray-200/50 dark:focus:ring-gray-50 `}
            onClick={() => {
              controls.start('hidden');
              setSelected(list.name);
            }}
          >
            {list.name}
          </button>
        </li>
      ))}
    </ul>
  ));
  return (
    <IphoneFrame innerRef={constraintsRef}>
      <div className='absolute inset-x-0 top-0 w-full select-none overflow-hidden border-b border-b-gray-100 pt-9 pb-1 text-center text-xs font-semibold text-gray-500 dark:border-b-gray-600/20 dark:text-gray-200'>
        {selected}
      </div>
      <div className='relative mt-11 flex h-[58%] w-full items-center justify-center'>
        <AnimatePresence mode='wait'>
          {selectedComponent(selected)}
        </AnimatePresence>
      </div>
      <motion.div
        animate={controls}
        className='absolute inset-0 z-[9] h-full w-full !translate-y-0 rounded-[2.15rem] bg-gray-900/10 dark:bg-gray-900/30'
        initial='hidden'
        onClick={() => controls.start('hidden')}
        transition={{
          delay: 0,
        }}
        variants={{
          visible: { opacity: 1, pointerEvents: 'auto' },
          hidden: { opacity: 0, pointerEvents: 'none' },
        }}
      />
      <motion.div
        animate={controls}
        className='absolute z-10 h-full w-full rounded-t-xl bg-gray-50 focus:outline-none contrast-more:bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900'
        drag='y'
        dragConstraints={{ bottom: 0, top: 0 }}
        dragElastic={0.3}
        initial='hidden'
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        tabIndex={-1}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
          mass: 1.2,
        }}
        variants={{
          visible: { translateY: '30%' },
          hidden: { translateY: '65%' },
        }}
      >
        <div
          className='mx-auto my-2 h-1.5 w-8 rounded-full bg-gray-300/60 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600'
          onClick={() => controls.start('visible')}
        />
        <div className='px-2'>{selectionBody}</div>
      </motion.div>
    </IphoneFrame>
  );
}

export default IndexIphoneFrame;
