import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

function CardStandardComponent({ setNotification, src = undefined, ...props }) {
  const contrastRing = `contrast-more:border contrast-more:border-gray-800 dark:contrast-more:border-gray-200`;
  return (
    <div
      className={`component card-bg w-full max-w-xs translate-x-0 transform overflow-hidden rounded-xl bg-gray-50 shadow dark:bg-gray-900 dark:contrast-more:bg-black ${contrastRing} ${
        props.className ? props.className : `aspect-[1/1.15]`
      } flex flex-col`}
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
                : `https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`
            }
          />
        </div>
      </div>
      <div className='flex h-full flex-grow flex-col px-4 pt-4 pb-2'>
        <div className='flex-grow'>
          <h2 className='text-xs text-gray-500 contrast-more:font-bold contrast-more:text-gray-700 dark:text-gray-500 dark:contrast-more:text-gray-300'>
            Subtitle
          </h2>
          <h1 className='font-semibold contrast-more:font-bold dark:text-gray-100'>
            Card Title
          </h1>
          <p className='pt-1.5 pb-2 text-sm leading-tight text-gray-600 contrast-more:font-medium contrast-more:text-gray-900 dark:text-gray-300 dark:contrast-more:text-gray-100'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className='flex items-center justify-between pt-1'>
          <button
            className={`rounded bg-gray-200 px-2 py-1 text-xs font-semibold uppercase text-gray-700 transition hover:bg-gray-700 hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100 contrast-more:py-2 contrast-more:px-3 contrast-more:font-bold dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-100 dark:focus:bg-gray-600 dark:focus:text-gray-100 dark:active:bg-gray-500 contrast-more:dark:bg-transparent ${contrastRing}`}
            onClick={() =>
              setNotification({
                enabled: true,
                message: 'Card Button',
              })
            }
          >
            Card Button
          </button>
          <div className='-mr-2 flex'>
            <button className='rounded-full p-2 hover:bg-gray-200/50 focus:bg-gray-200/50 contrast-more:ml-2 contrast-more:ring-1 contrast-more:ring-gray-800 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:contrast-more:ring-gray-200'>
              <span className='sr-only'>Share this post</span>
              <ShareIcon
                className='h-5 w-5 text-gray-400 contrast-more:text-gray-700 dark:contrast-more:text-gray-200'
                onClick={() =>
                  setNotification({
                    enabled: true,
                    message: 'Share Icon',
                    Icon: ShareIcon,
                  })
                }
              />
            </button>
            <button className='rounded-full p-2 hover:bg-gray-200/50 focus:bg-gray-200/50 contrast-more:ml-2 contrast-more:ring-1 contrast-more:ring-gray-800 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:contrast-more:ring-gray-200'>
              <span className='sr-only'>Fav this post</span>
              <HeartIcon
                className='h-5 w-5 text-gray-400 contrast-more:text-gray-700 dark:contrast-more:text-gray-200'
                onClick={() =>
                  setNotification({
                    enabled: true,
                    message: 'Heart Icon',
                    Icon: HeartIcon,
                  })
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardStandardComponent;
