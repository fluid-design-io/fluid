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
      className='px-2 py-1 space-y-1 text-sm border-t border-gray-50/60 dark:border-gray-500/30 md:!text-base'
      key={item.category}
    >
      <li className='px-2 font-semibold pointer-events-none dark:text-gray-300 text-gray-600 contrast-more:text-gray-700 dark:contrast-more:text-gray-200'>
        {item.category}
      </li>
      {item.lists.map((list) => (
        <li key={`body.${list.name}`}>
          <button
            onFocus={() => controls.start('visible')}
            className={`${selectedStyle(
              list.name
            )} px-2 py-1 transition w-full text-left rounded-md overflow-hidden focus:outline-none focus:ring-1 focus:ring-gray-200/50 dark:focus:ring-gray-50 `}
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
      <div className='absolute inset-x-0 top-0 w-full pt-9 pb-1 overflow-hidden text-xs font-semibold text-center border-b select-none border-b-gray-100 dark:border-b-gray-600/20 text-gray-500 dark:text-gray-200'>
        {selected}
      </div>
      <div className='w-full mt-11 h-[58%] flex justify-center items-center relative'>
        <AnimatePresence mode='wait'>
          {selectedComponent(selected)}
        </AnimatePresence>
      </div>
      <motion.div
        animate={controls}
        className='bg-gray-900/10 dark:bg-gray-900/30 absolute z-[9] w-full h-full inset-0 rounded-[2.15rem] !translate-y-0'
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
        className='bg-gray-50 contrast-more:bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 rounded-t-xl w-full h-full absolute z-10 focus:outline-none'
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
          className='w-8 h-1.5 bg-gray-300/60 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full mx-auto my-2'
          onClick={() => controls.start('visible')}
        />
        <div className='px-2'>{selectionBody}</div>
      </motion.div>
    </IphoneFrame>
  );
}

export default IndexIphoneFrame;
