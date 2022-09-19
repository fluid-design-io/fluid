import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import clsxm from '../lib/clsxm';
import { CardASLargeImageComponent, CardStandardComponent } from './card';
import { ListDetailComponent } from './list';

const GridWrap = ({
  title,
  href,
  children,
  router,
  rowSpan = undefined,
  colSpan = undefined,
  ...props
}) => {
  return (
    <div
      className={clsxm(
        'grid-wrap rounded-3x relative flex items-center justify-center',
        rowSpan ? `row-span-1` : `row-span-2`,
        colSpan
      )}
    >
      <button
        aria-label={`Navigate to this ${title} component.`}
        className='dark:contrast-more:border-sonte-200 grid-title absolute -left-2 -top-1.5 z-10 flex items-center justify-start space-x-0 rounded-full border border-gray-50/50 bg-gray-100/60 px-2 py-1 font-semibold uppercase tracking-wide text-gray-900 shadow-md shadow-gray-900/5 backdrop-blur-md backdrop-brightness-110 backdrop-filter transition hover:bg-gray-100 contrast-more:top-0.5 contrast-more:border-gray-800 contrast-more:bg-gray-50/90 dark:border-gray-50/20 dark:bg-gray-900/30 dark:text-gray-200 dark:hover:bg-gray-900 dark:contrast-more:bg-gray-900/90'
        onClick={() => router.push(`/docs${href}`)}
      >
        <span className='text-xs contrast-more:text-sm'>{title}</span>
        <ChevronRightIcon className='h-3.5 w-3.5' />
      </button>
      {children}
    </div>
  );
};

export const Examples = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const title = t('Examples');
  const [notification, setNotification] = useState(undefined);
  const exampleComponents = [
    {
      title: t('Card'),
      href: '/card/#standard',
      Component: CardStandardComponent,
      src: 'https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: t('App Store.title', { ns: 'card' }),
      href: '/card/#app-store',
      Component: CardASLargeImageComponent,
      srcs: [
        'https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1628432436663-9e588806592a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540760938999-077b8231d890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      ],
    },
    {
      title: t('List', { ns: 'list' }),
      href: '/list/#detail',
      Component: ListDetailComponent,
      className: 'max-w-md shadow-xl h-full !rounded-3xl example',
    },
  ];
  return (
    <>
      <div className='relative mx-auto grid max-w-xs grid-flow-row-dense grid-cols-1 items-stretch gap-6 lg:max-w-2xl lg:grid-cols-2 lg:gap-8 xl:max-w-none xl:grid-cols-3 xl:gap-12'>
        {exampleComponents.map(({ className, Component, ...props }) => (
          <GridWrap key={`example.${props.title}`} router={router} {...props}>
            <Component
              {...{
                setNotification,
                className:
                  className ||
                  'max-w-md shadow-xl h-full aspect-[1/1.16] rounded-3xl',
                ...props,
              }}
            />
          </GridWrap>
        ))}
      </div>
    </>
  );
};
