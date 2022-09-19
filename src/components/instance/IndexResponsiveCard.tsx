import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import bg from '~/assets/index/index-resp-card-bg.jpg';

function IndexResponsiveCard() {
  const [options, setOptions] = useState({ screenSize: 'large' });
  const { screenSize } = options;
  const cardWrapStyle = `${
    screenSize === 'large' ? `w-full max-w-[640px]` : 'w-5/6'
  }`;
  const cardStyle = `${screenSize === 'large' ? `flex-row` : 'flex-col'}`;
  const cardImgStyle = `${screenSize === 'large' ? `w-3/5` : 'aspect-video'}`;
  const cardContentStyle = {
    wrap: `${screenSize === 'large' ? `w-2/5 p-4` : 'p-2.5'}`,
    subtitle: `${
      screenSize === 'large'
        ? ``
        : screenSize === 'medium'
        ? 'text-base'
        : 'text-xs'
    }  text-gray-500 dark:text-gray-500`,
    title: `${
      screenSize === 'large'
        ? `text-xl`
        : screenSize === 'medium'
        ? 'text-lg'
        : 'text-base'
    }  font-semibold dark:text-gray-100`,
    p: `${
      screenSize === 'large'
        ? `text-base`
        : screenSize === 'medium'
        ? 'text-base leading-tight'
        : 'text-sm leading-tight'
    } pt-1.5 pb-2 text-gray-600 dark:text-gray-300`,
  };
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={`overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900 shadow-gray-900/10 dark:shadow-gray-900/30 mx-auto ${cardWrapStyle}`}
      exit={{ y: -10, opacity: 0 }}
      initial={{ y: 10, opacity: 0 }}
      transition={{ type: 'just' }}
    >
      <div className={`flex ${cardStyle}`}>
        <div className={`relative overflow-hidden ${cardImgStyle} `}>
          <Image alt='nature' src={bg} />
        </div>
        <div className={` ${cardContentStyle.wrap}`}>
          <div className='flex flex-col flex-grow'>
            <h3 className={cardContentStyle.subtitle}>Subtitle</h3>
            <div className={cardContentStyle.title}>Card Title</div>
            <p className={cardContentStyle.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className='flex items-center justify-between pt-1'>
              <button className='px-2 py-1 text-xs font-semibold uppercase transition rounded bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100 dark:focus:bg-gray-600 dark:focus:text-gray-100 touch-pan-y'>
                button
              </button>
              <div className='flex space-x-2'>
                <ShareIcon className='w-4 h-4 text-gray-400' />
                <HeartIcon className='w-4 h-4 text-gray-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IndexResponsiveCard;
