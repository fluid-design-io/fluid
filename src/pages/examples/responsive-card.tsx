import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

import bg from '~/assets/index/index-resp-card-bg.jpg';

function ResponsiveCard() {
  return (
    <>
      <Head>
        <style
          id='holderStyle'
          dangerouslySetInnerHTML={{
            __html: `
         html, body {
           background: none !important;
         }
         `,
          }}
        />
      </Head>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className='flex items-center justify-center w-full h-screen overflow-hidden'
        exit={{ y: -10, opacity: 0 }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ type: 'just' }}
      >
        <div className='grid grid-cols-1 w-full max-w-[280px] xs:max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg sm:max-w-2xl sm:w-5/6 card-bg sm:grid-cols-12 sm:justify-center items-stretch'>
          <div className='relative h-48 col-span-1 sm:h-auto sm:col-span-5 md:!col-span-6'>
            <Image
              alt='forest with fog cover part of the tree branches'
              layout='fill'
              objectFit='cover'
              src={bg}
            />
          </div>
          <div className='flex flex-col col-span-1 p-3 sm:p-4 md:!p-6 sm:col-span-7 md:!col-span-6'>
            <div className='flex-grow'>
              <h3 className='text-xs md:!text-base text-gray-500 dark:text-gray-500 contrast-more:text-gray-700 dark:contrast-more:text-gray-300'>
                Subtitle
              </h3>
              <div className='font-semibold sm:text-lg dark:text-gray-100'>
                Card Title
              </div>
              <p className='pt-1.5 pb-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-tight contrast-more:text-gray-800 dark:contrast-more:text-gray-50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et magna aliqua enim ad
                minim.
              </p>
            </div>
            <div className='flex items-center justify-between pt-1'>
              <button className='px-2 py-1 text-xs font-semibold uppercase transition border rounded sm:px-4 sm:py-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100 dark:focus:bg-gray-600 dark:focus:text-gray-100 touch-pan-y border-gray-100 dark:border-gray-700'>
                <span className='sr-only'>
                  Card action to perform via click
                </span>
                button
              </button>
              <div className='flex space-x-2 sm:space-x-3 md:!space-x-4'>
                <button>
                  <span className='sr-only'>Share this post</span>
                  <ShareIcon className='w-4 h-4 text-gray-400 contrast-more:text-gray-800 dark:contrast-more:text-gray-50' />
                </button>
                <button>
                  <span className='sr-only'>Favorite this post</span>
                  <HeartIcon className='w-4 h-4 text-gray-400 contrast-more:text-gray-800 dark:contrast-more:text-gray-50' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export const rawResponsiveCard = `
  <div className="grid grid-cols-1 w-full max-w-[280px] xs:max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg sm:max-w-2xl sm:w-5/6 bg-gray-50 dark:bg-gray-800 shadow-gray-900/10 dark:shadow-gray-900/30 sm:grid-cols-12 sm:justify-center items-stretch">
    <div className="relative h-48 col-span-1 sm:h-auto sm:col-span-5 md:!col-span-6">
      <Image alt="nature" src={bg} layout="fill" objectFit="cover" />
    </div>
    <div className="flex flex-col col-span-1 p-3 sm:p-4 md:!p-6 sm:col-span-7 md:!col-span-6">
      <div className="flex-grow">
        <h3 className="text-xs md:!text-base text-gray-500 dark:text-gray-500 contrast-more:text-gray-700 dark:contrast-more:text-gray-300">
          Subtitle
        </h3>
        <div className="font-semibold sm:text-lg dark:text-gray-100">
          Card Title
        </div>
        <p className="pt-1.5 pb-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-tight contrast-more:text-gray-800 dark:contrast-more:text-gray-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et magna aliqua enim ad minim.
        </p>
      </div>
      <div className="flex items-center justify-between pt-1">
        <button className="px-2 py-1 text-xs font-semibold uppercase transition border rounded sm:px-4 sm:py-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100 dark:focus:bg-gray-600 dark:focus:text-gray-100 touch-pan-y border-gray-100 dark:border-gray-700">
          <span className="sr-only">Card action to perform via click</span>
          button
        </button>
        <div className="flex space-x-2 sm:space-x-3 md:!space-x-4">
          <button>
            <span className="sr-only">Share this post</span>
            <ShareIcon className="w-4 h-4 text-gray-400 contrast-more:text-gray-800 dark:contrast-more:text-gray-50" />
          </button>
          <button>
            <span className="sr-only">Favorite this post</span>
            <HeartIcon className="w-4 h-4 text-gray-400 contrast-more:text-gray-800 dark:contrast-more:text-gray-50" />
          </button>
        </div>
      </div>
    </div>
  </div>
`.trim();
export default ResponsiveCard;
