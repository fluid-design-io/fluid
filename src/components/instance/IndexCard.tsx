import { HeartIcon, ShareIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bg from '~/assets/index-card-bg.jpg';

function IndexCard() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: 'just' }}
      className='w-5/6 overflow-hidden rounded-lg shadow-lg md:!w-1/2 bg-primary-50 dark:bg-primary-800 shadow-primary-900/10 dark:shadow-primary-900/30 component'
    >
      <div>
        <div className='relative overflow-hidden aspect-video'>
          <Image
            alt='landscape of a mountain at the background with clear sky'
            src={bg}
            layout='fill'
          />
        </div>
        <div className='p-2.5'>
          <div className='flex-grow'>
            <h2 className='text-xs text-primary-500 dark:text-primary-500 contrast-more:text-primary-700 dark:contrast-more:text-primary-300'>
              Subtitle
            </h2>
            <h1 className='font-semibold dark:text-primary-100'>Card Title</h1>
            <p className='pt-1.5 pb-2 text-sm text-primary-600 dark:text-primary-300 leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
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
    </motion.div>
  );
}

export default IndexCard;
