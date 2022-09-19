import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

function CardStandardComponent({ setNotification, src = undefined, ...props }) {
  const { t } = useTranslation('image');
  const contrastRing = `contrast-more:border contrast-more:border-gray-800 dark:contrast-more:border-gray-200`;
  return (
    <div
      className={`w-full max-w-xs overflow-hidden transform translate-x-0 shadow component card-bg rounded-xl bg-gray-50 dark:bg-gray-900 dark:contrast-more:bg-black ${contrastRing} ${
        props.className ? props.className : `aspect-[1/1.15]`
      } flex flex-col`}
    >
      <div className='h-full'>
        <div className='relative w-full h-full overflow-hidden select-none pointer-events-none'>
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
      <div className='flex flex-col flex-grow h-full px-4 pt-4 pb-2'>
        <div className='flex-grow'>
          <h2 className='text-xs text-gray-500 dark:text-gray-500 contrast-more:text-gray-700 dark:contrast-more:text-gray-300 contrast-more:font-bold'>
            {t('Subtitle', { ns: 'common' })}
          </h2>
          <h1 className='font-semibold dark:text-gray-100 contrast-more:font-bold'>
            {t('Card Title', { ns: 'common' })}
          </h1>
          <p className='pt-1.5 pb-2 text-sm text-gray-600 dark:text-gray-300 leading-tight contrast-more:text-gray-900 dark:contrast-more:text-gray-100 contrast-more:font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className='flex items-center justify-between pt-1'>
          <button
            className={`px-2 py-1 text-xs font-semibold uppercase transition rounded bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500 dark:hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100 dark:focus:bg-gray-600 dark:focus:text-gray-100 contrast-more:py-2 contrast-more:px-3 contrast-more:dark:bg-transparent contrast-more:font-bold ${contrastRing}`}
            onClick={() =>
              setNotification({
                enabled: true,
                message: t(`Card Button`, { ns: 'card' }),
              })
            }
          >
            {t(`Card Button`, { ns: 'card' })}
          </button>
          <div className='flex -mr-2'>
            <button className='p-2 rounded-full hover:bg-gray-200/50 focus:bg-gray-200/50 dark:hover:bg-gray-600 dark:focus:bg-gray-600 contrast-more:ring-gray-800 dark:contrast-more:ring-gray-200 contrast-more:ring-1 contrast-more:ml-2'>
              <span className='sr-only'>Share this post</span>
              <ShareIcon
                className='w-5 h-5 text-gray-400 contrast-more:text-gray-700 dark:contrast-more:text-gray-200'
                onClick={() =>
                  setNotification({
                    enabled: true,
                    message: t(`Share Icon`),
                    Icon: ShareIcon,
                  })
                }
              />
            </button>
            <button className='p-2 rounded-full hover:bg-gray-200/50 focus:bg-gray-200/50 dark:hover:bg-gray-600 dark:focus:bg-gray-600 contrast-more:ring-gray-800 dark:contrast-more:ring-gray-200 contrast-more:ring-1 contrast-more:ml-2'>
              <span className='sr-only'>Fav this post</span>
              <HeartIcon
                className='w-5 h-5 text-gray-400 contrast-more:text-gray-700 dark:contrast-more:text-gray-200'
                onClick={() =>
                  setNotification({
                    enabled: true,
                    message: t(`Heart Icon`),
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
