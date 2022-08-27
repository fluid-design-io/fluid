import { StarIcon } from '@heroicons/react/solid';
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
      onClick={() => setIsStared(!isStared)}
      className='absolute p-1.5 rounded-full right-0.5'
    >
      <StarIcon className='w-5 h-5 text-yellow-400' />
    </button>
  ) : (
    <button
      onClick={() => setIsStared(!isStared)}
      className='group-hover:opacity-100 group-focus:opacity-100 focus:opacity-100 opacity-80 pointer-hover:opacity-0 absolute p-1.5 rounded-full right-0.5'
    >
      <StarIcon className='w-5 h-5 text-primary-300 dark:text-primary-600' />
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
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: 'just' }}
      className='w-5/6 overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-primary-50 dark:bg-primary-800 shadow-primary-900/10 dark:shadow-primary-900/30 component'
    >
      <ul className='divide-y select-none divide-primary-200/50 dark:divide-primary-700/30'>
        <li className='flex justify-between px-2 py-1'>
          <h1 className='text-xs font-semibold text-primary-700 dark:text-primary-200'>
            Animal book
          </h1>
          <p className='text-xs text-primary-500/75 dark:text-primary-500'>
            33 animals
          </p>
        </li>
        {list.map(({ title, description, src, stared }) => (
          <li
            key={title}
            className='flex space-x-2 items-center px-2 py-1.5 relative group hover:bg-primary-200/30 focus:bgstone-200/30 dark:hover:bg-primary-600/30 dark:focus:bgstone-600/30'
            tabIndex={0}
          >
            <div className='w-8 h-8 min-w-[32px] rounded-full overflow-hidden relative'>
              <Image alt={title} src={src} layout='fill' />
            </div>
            <div className='flex-1 select-none'>
              <h3 className='text-sm font-semibold leading-4 md:!text-base text-primary-800 dark:text-primary-300'>
                {title}
              </h3>
              <p className='leading-none md:!leading-tight py-0.5 text-xs md:!text-sm text-primary-600/90 dark:text-primary-400/80 max-w-[80%] sm:max-w-[90%] line-clamp-2 md:!line-clamp-1'>
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
