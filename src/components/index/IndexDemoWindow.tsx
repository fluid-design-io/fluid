import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import WindowFrame from '@/components/WindowFrame';
import IndexIphoneFrame from '@/components/instance/IndexIphoneFrame';
import { indexElements } from '@/lib/index/data';

function IndexDemoWindow() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState('Card');
  const selectedStyle = (item) => {
    return selected === item
      ? `text-gray-900 dark:text-gray-800 bg-white dark:bg-gray-300 shadow`
      : `text-gray-500/80 dark:text-gray-400 contrast-more:text-gray-600 dark:contrast-more:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 hover:bg-gray-50/80 dark:hover:bg-gray-300/10 focus:text-gray-600 dark:focus:text-gray-100 focus:bg-gray-50/80 dark:focus:bg-gray-300/10`;
  };
  const selectedComponent = (selected) => {
    let match = [];
    indexElements.forEach(
      (item) =>
        (match = match.concat(
          item.lists.filter((list) => list.name === selected)
        ))
    );
    return match[0]?.component;
  };
  const selectionBody = indexElements.map((item) => (
    <ul
      className='space-y-1 border-t border-gray-50/60 px-2 py-1 text-sm dark:border-gray-500/30 md:!text-base'
      key={item.category}
    >
      <li className='pointer-events-none px-2 font-semibold text-gray-600 dark:text-gray-300'>
        {t(item.category)}
      </li>
      {item.lists.map((list) => (
        <li key={`body.${list.name}`}>
          <button
            className={`${selectedStyle(
              list.name
            )} w-full overflow-hidden rounded-md px-2 py-1 text-left transition focus:outline-none focus:ring-1 focus:ring-gray-200/50 dark:focus:ring-gray-50`}
            onClick={() => {
              setSelected(list.name);
            }}
          >
            {t(list.name)}
          </button>
        </li>
      ))}
    </ul>
  ));
  return (
    <>
      <WindowFrame
        className='mx-auto mt-16 hidden w-[80%] max-w-[680px] justify-center md:!flex'
        sidebar={selectionBody}
        content={
          <AnimatePresence mode='wait'>
            {selectedComponent(selected)}
          </AnimatePresence>
        }
      />
      <IndexIphoneFrame
        selected={selected}
        selectedComponent={selectedComponent}
        selectedStyle={selectedStyle}
        setSelected={setSelected}
      />
    </>
  );
}
export default IndexDemoWindow;
