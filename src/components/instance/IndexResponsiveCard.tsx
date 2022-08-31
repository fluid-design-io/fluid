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
    }  text-primary-500 dark:text-primary-500`,
    title: `${
      screenSize === 'large'
        ? `text-xl`
        : screenSize === 'medium'
        ? 'text-lg'
        : 'text-base'
    }  font-semibold dark:text-primary-100`,
    p: `${
      screenSize === 'large'
        ? `text-base`
        : screenSize === 'medium'
        ? 'text-base leading-tight'
        : 'text-sm leading-tight'
    } pt-1.5 pb-2 text-primary-600 dark:text-primary-300`,
  };
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={`overflow-hidden rounded-lg shadow-lg bg-primary-50 dark:bg-primary-900 shadow-primary-900/10 dark:shadow-primary-900/30 mx-auto ${cardWrapStyle}`}
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
              <button className='px-2 py-1 text-xs font-semibold uppercase transition rounded bg-primary-200 text-primary-700 dark:bg-primary-800 dark:text-primary-200 hover:bg-primary-700 hover:text-primary-100 dark:hover:bg-primary-600 dark:active:bg-primary-500 dark:hover:text-primary-100 focus:bg-primary-700 focus:text-primary-100 dark:focus:bg-primary-600 dark:focus:text-primary-100 touch-pan-y'>
                button
              </button>
              <div className='flex space-x-2'>
                <ShareIcon className='w-4 h-4 text-primary-400' />
                <HeartIcon className='w-4 h-4 text-primary-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IndexResponsiveCard;
