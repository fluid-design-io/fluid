import { Button } from '@fluid-design/fluid-ui';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export const CardStandardComponent = ({ src = undefined, ...props }) => {
  const { t } = useTranslation('image');
  const contrastRing = `contrast-more:border contrast-more:border-gray-800 dark:contrast-more:border-gray-200`;
  return (
    <div
      className={clsxm(
        `component card-bg flex w-full max-w-xs translate-x-0 transform flex-col overflow-hidden rounded-xl bg-gray-50 shadow  dark:bg-gray-900 dark:contrast-more:bg-black`,
        contrastRing,
        props.className ? props.className : `aspect-[1/1.15]`
      )}
    >
      <div className='h-full'>
        <div className='pointer-events-none relative h-full w-full select-none overflow-hidden'>
          <Image
            alt='Sunrise in the national park Gantrisch in Bern, Switzerland. By Alain from Unsplash.'
            layout='fill'
            objectFit='cover'
            src={
              src
                ? src
                : `https://images.unsplash.com/photo-1612993239130-c5e816a63d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`
            }
          />
        </div>
      </div>
      <div className='flex h-full flex-grow flex-col px-4 pt-4 pb-2'>
        <div className='flex-grow'>
          <h2 className='text-xs text-gray-500 contrast-more:font-bold contrast-more:text-gray-700 dark:text-gray-500 dark:contrast-more:text-gray-300'>
            France
          </h2>
          <h1 className='font-semibold contrast-more:font-bold dark:text-gray-100'>
            Chamonix Centre-ville
          </h1>
          <p className='pt-1.5 pb-2 text-sm leading-tight text-gray-600 contrast-more:font-medium contrast-more:text-gray-900 dark:text-gray-300 dark:contrast-more:text-gray-100'>
            A photo shot by Guillaume Marques on Unsplash.
          </p>
        </div>
        <div className='flex items-center justify-between pt-1'>
          <Button color='blue' size='xs' weight='light'>
            {t(`Card Button`, { ns: 'card' })}
          </Button>
          <div className='-mr-2 flex'>
            <Button
              className='text-gray-500 hocus:text-inherit dark:text-gray-400'
              color='sky'
              iconOnly
              shape='pill'
              weight='clear'
            >
              <span className='sr-only'>Share this post</span>
              <ShareIcon className='h-5 w-5' />
            </Button>
            <Button
              className='text-gray-500 hocus:text-inherit dark:text-gray-400'
              color='rose'
              iconOnly
              shape='pill'
              weight='clear'
            >
              <span className='sr-only'>Fav this post</span>
              <HeartIcon className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStandardComponent;
