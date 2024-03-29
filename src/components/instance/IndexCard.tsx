import { Button } from '@fluid-design/fluid-ui';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

import bg from '~/assets/index-card-bg.jpg';

function IndexCard() {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className='component w-5/6 overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-900/10 dark:bg-gray-800 dark:shadow-gray-900/30 md:!w-1/2'
      exit={{ y: -10, opacity: 0 }}
      initial={{ y: 10, opacity: 0 }}
      transition={{ type: 'just' }}
    >
      <div>
        <div className='relative aspect-video overflow-hidden'>
          <Image
            alt='landscape of a mountain at the background with clear sky'
            src={bg}
            placeholder='blur'
          />
        </div>
        <div className='p-2.5'>
          <div className='flex-grow'>
            <h2 className='text-xs text-gray-500 contrast-more:text-gray-700 dark:text-gray-500 dark:contrast-more:text-gray-300'>
              Subtitle
            </h2>
            <h1 className='font-semibold dark:text-gray-100'>Card Title</h1>
            <p className='pt-1.5 pb-2 text-sm leading-tight text-gray-600 dark:text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className='flex items-center justify-between pt-1'>
            <Button
              size='xs'
              weight='light'
              color='cyan'
              className='font-semibold uppercase'
              label='button'
            />
            <div className='flex space-x-2'>
              <Button
                color='blue'
                size='xs'
                shape='pill'
                weight='clear'
                iconOnly
                icon={ShareIcon}
                sr='Share this post'
              />

              <Button
                color='rose'
                size='xs'
                shape='pill'
                weight='clear'
                iconOnly
                icon={HeartIcon}
                sr='Fav this post'
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IndexCard;
