import { StarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import lemur from '~/assets/index/lemur.jpg';
import monkey from '~/assets/index/monkey.jpg';
import owl from '~/assets/index/owl.jpg';

const StaredButton = ({ stared }) => {
  const [isStared, setIsStared] = useState(stared);
  return isStared ? (
    <button
      className='absolute right-0.5 rounded-full p-1.5'
      onClick={() => setIsStared(!isStared)}
    >
      <StarIcon className='h-5 w-5 text-yellow-400' />
    </button>
  ) : (
    <button
      className='absolute right-0.5 rounded-full p-1.5 opacity-80 focus:opacity-100 group-hover:opacity-100 group-focus:opacity-100 pointer-hover:opacity-0'
      onClick={() => setIsStared(!isStared)}
    >
      <StarIcon className='h-5 w-5 text-gray-300 dark:text-gray-600' />
    </button>
  );
};

function IndexList() {
  const list = [
    {
      title: 'Lemur',
      description: '16-19 years • Primates • 110+ species ',
      src: lemur,
      stared: false,
    },
    {
      title: 'Monkey',
      description: '20 years • Primates • 260+ species',
      src: monkey,
      stared: true,
    },
    {
      title: 'Owl',
      description: '9-10 years • Strigiformes • 200+ species',
      src: owl,
      stared: false,
    },
  ];
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className='component w-5/6 overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-900/10 dark:bg-gray-800 dark:shadow-gray-900/30 md:!w-2/3'
      exit={{ y: -10, opacity: 0 }}
      initial={{ y: 10, opacity: 0 }}
      transition={{ type: 'just' }}
    >
      <ul className='select-none divide-y divide-gray-200/50 dark:divide-gray-700/30'>
        <li className='flex justify-between px-2 py-1'>
          <h1 className='text-xs font-semibold text-gray-700 dark:text-gray-200'>
            Animal book
          </h1>
          <p className='text-xs text-gray-500/75 dark:text-gray-500'>
            33 animals
          </p>
        </li>
        {list.map(({ title, description, src, stared }) => (
          <li
            className='focus:bgstone-200/30 dark:focus:bgstone-600/30 group relative flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-200/30 dark:hover:bg-gray-600/30'
            key={title}
            tabIndex={0}
          >
            <div className='relative h-8 w-8 min-w-[32px] overflow-hidden rounded-full'>
              <Image
                alt={title}
                className='object-cover'
                placeholder='blur'
                src={src}
              />
            </div>
            <div className='flex-1 select-none'>
              <h3 className='text-sm font-semibold leading-4 text-gray-800 dark:text-gray-300 md:!text-base'>
                {title}
              </h3>
              <p className='max-w-[80%] py-0.5 text-xs leading-none text-gray-600/90 line-clamp-2 dark:text-gray-400/80 sm:max-w-[90%] md:!text-sm md:!leading-tight md:!line-clamp-1'>
                {description}
              </p>
            </div>
            <StaredButton stared={stared} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default IndexList;
