import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { AccordionExamples } from '@/components/accordion';
import { CardExamples } from '@/components/card';
import { MenuExamples } from '@/components/menu';
import { TabExamples } from '@/components/tab';

import clsxm from '../lib/clsxm';

const GridWrap = ({ title, href, children, router, ...props }) => {
  return (
    <div className={clsxm('relative flex flex-1 items-center justify-center')}>
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
  const router = useRouter();
  const [_, setNotification] = useState(undefined);
  const exampleComponents = [
    {
      title: 'Accordion',
      href: '/accordion',
      Component: AccordionExamples.Simple,
      className: '!w-full md:!w-full',
    },
    {
      title: 'Menu',
      href: '/menu',
      Component: MenuExamples.Default,
      className: '!w-full',
    },
    {
      title: 'Tab',
      href: '/tab',
      Component: TabExamples.Default,
      className: '!w-full',
    },
    {
      title: 'Card',
      href: '/card/#standard',
      Component: CardExamples.Standard,
      className: 'h-96',
    },
    {
      title: 'App Store',
      href: '/card/#app-store',
      Component: CardExamples.AppleStore,
    },
    /* {
      title: 'List', { ns: 'list' },
      href: '/list/#detail',
      Component: ListDetailComponent,
      className: 'max-w-md shadow-xl h-full !rounded-3xl example',
    }, */
  ];
  return (
    <>
      <div className='relative grid grid-cols-1 place-content-stretch place-items-stretch gap-6 sm:grid-cols-2 md:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-12'>
        {exampleComponents.map(({ className, Component, ...props }) => (
          <GridWrap key={`example.${props.title}`} router={router} {...props}>
            <Component
              {...{
                setNotification,
                className: clsxm(className, 'shadow-xl'),
                ...props,
              }}
            />
          </GridWrap>
        ))}
      </div>
    </>
  );
};
