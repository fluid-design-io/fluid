/* This example requires Tailwind CSS v2.0+ */
import { DocSearch } from '@docsearch/react';
import { Button } from '@fluid-design/fluid-ui';
import { Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Fragment, useRef } from 'react';
import { IoLogoGithub } from 'react-icons/io';

import { useScrolled } from '@/lib';
import { useThemeMode } from '@/lib/ThemeContext';
import clsxm from '@/lib/clsxm';

import { ThemeSwitch } from '../ThemeSwitch';
import { TOC } from '../mdx';
import AppLogo from '../ui/AppLogo';
import { SidebarMenu } from './Sidebar';

export const Navbar = ({ sidebar, ...props }) => {
  const { t } = useTranslation('navbar');
  const [mode, setMode] = useThemeMode(true);
  const handleModeChange = (mode: 'light' | 'dark') => {
    setMode(mode);
  };
  const menuBarRef = useRef<HTMLDivElement>(null);
  const [hasScrolled] = useScrolled();
  const navBarLinkClassName =
    'clickable text-gray-500 hover:text-gray-900 dark:text-gray-200 rounded';
  return (
    <Popover
      as={motion.nav}
      className={clsxm(
        `fixed right-0 top-0 z-50 transition-colors motion-safe:duration-300 motion-reduce:transition-opacity`,
        sidebar ? 'left-0 sm:left-56 2xl:left-64' : 'left-0',
        props.className
      )}
    >
      {({ open }) => (
        <Fragment>
          <motion.div
            className='bg-gray-100/80 backdrop-blur-xl backdrop-filter transition-colors contrast-more:bg-gray-100/90 dark:bg-gray-800/60 dark:contrast-more:bg-black/80'
            animate={{
              y: hasScrolled ? -menuBarRef.current?.offsetHeight || 0 : 0,
            }}
            initial={{
              y: 0,
            }}
            transition={{
              type: 'spring',
              bounce: 0,
            }}
          >
            <div
              className='flex items-center justify-between border-b border-b-gray-800/5 dark:border-b-gray-50/10 px-4 py-4 pr-[calc(1rem+env(safe-area-inset-right))] sm:!justify-start sm:!space-x-2.5 sm:px-6 sm:!py-2 sm:pr-[calc(1.2rem+env(safe-area-inset-right))] lg:px-[3.175rem]'
              ref={menuBarRef}
            >
              <div className='flex flex-grow items-center justify-between space-x-4 sm:!justify-start'>
                <AppLogo className={`${sidebar ? 'sm:!hidden' : ''}`} />
                {!sidebar && (
                  <div
                    aria-hidden={sidebar}
                    className={` hidden flex-shrink-0 sm:!block`}
                  >
                    <Link href='/'>
                      <a className='flex'>
                        <div className='flex font-rounded text-[1.175rem] font-bold text-gray-700 dark:text-gray-200'>
                          <p>Fluid Design</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                )}
                <DocSearch
                  apiKey={process.env.DOCSEARCH_API_KEY}
                  appId={process.env.DOCSEARCH_APP_ID}
                  indexName='fluid-design'
                />
              </div>
              <div className='-my-2 sm:!hidden'>
                <Popover.Button className='-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 contrast-more:text-gray-900 dark:hover:bg-gray-800 dark:contrast-more:text-gray-50'>
                  <span className='sr-only'>{t('Open menu')}</span>
                  <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                </Popover.Button>
              </div>
              <div className='hidden sm:!flex'>
                <div className='flex flex-shrink-0 items-center space-x-4 text-sm sm:!ml-12 lg:space-x-6'>
                  <Button
                    as='a'
                    className={clsxm('px-2 py-1 font-medium btn-clear-gray')}
                    color='red'
                    href='/docs'
                  >
                    {t('Docs')}
                  </Button>
                  <Button
                    as='a'
                    className={clsxm('px-2 py-1 font-medium btn-clear-gray')}
                    color='red'
                    href='https://fluid-color.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('Color Generator')}
                  </Button>
                  <div className='h-3 w-0.5 bg-gray-400 dark:bg-gray-500 rounded-full' />
                  <a
                    className={clsxm('px-1.5 py-1.5', navBarLinkClassName)}
                    href='https://github.com/fluid-design-io/fluid'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <IoLogoGithub aria-hidden='true' className='h-4 w-4' />
                  </a>
                  <ThemeSwitch
                    handleModeChange={handleModeChange}
                    mode={mode as 'light' | 'dark'}
                  />
                </div>
              </div>
            </div>
            <TOC.Mobile />
          </motion.div>
          <AnimatePresence>
            {open && (
              <Fragment>
                <motion.div
                  animate={{ x: 0 }}
                  className='fixed top-0 z-[61]'
                  exit={{ x: '-100%' }}
                  initial={{ x: '-100%' }}
                  key='mobile-sidbar-menu'
                  transition={{
                    type: 'spring',
                    bounce: 0.05,
                  }}
                >
                  <Popover.Panel
                    className='transition duration-300 sm:!relative sm:!z-40'
                    focus
                    static
                  >
                    <SidebarMenu className='sm:hidden' />
                  </Popover.Panel>
                </motion.div>
                <Popover.Overlay
                  animate={{ opacity: 1 }}
                  as={motion.div}
                  className='fixed inset-0 z-[60] bg-gray-900/30 sm:!hidden'
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  key='mobile-sidbar-menu-overlay'
                />
              </Fragment>
            )}
          </AnimatePresence>
        </Fragment>
      )}
    </Popover>
  );
};
