/* This example requires Tailwind CSS v2.0+ */
import { ThemeSwitch } from '../ThemeSwitch';
import { TOC } from '../mdx';
import AppLogo from '../ui/AppLogo';
import { SidebarMenu } from './Sidebar';
import { useScrolled } from '@/lib';
import { useThemeMode } from '@/lib/ThemeContext';
import clsxm from '@/lib/clsxm';
import { DocSearch } from '@docsearch/react';
import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Fragment, useRef } from 'react';
import { IoLogoGithub } from 'react-icons/io';

export const Navbar = ({ sidebar, ...props }) => {
  const { t } = useTranslation('navbar');
  const [mode, setMode] = useThemeMode(true);
  const menuBarRef = useRef<HTMLDivElement>(null);
  const handleModeChange = (mode: 'light' | 'dark') => {
    setMode(mode);
  };
  const [hasScrolled] = useScrolled();
  const navBarLinkClassName =
    'clickable text-primary-500 hover:text-primary-900 dark:text-primary-200 rounded';
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
            className='bg-primary-100/80 backdrop-blur-xl backdrop-filter transition-colors contrast-more:bg-primary-100/90 dark:bg-primary-800/60 dark:contrast-more:bg-black/80'
            initial={{
              y: 0,
            }}
            animate={{
              y: hasScrolled ? -menuBarRef.current?.offsetHeight || 0 : 0,
            }}
            transition={{
              type: 'spring',
              bounce: 0,
            }}
          >
            <div
              ref={menuBarRef}
              className='flex items-center justify-between border-b border-b-primary-800/5 dark:border-b-primary-50/10 px-4 py-4 pr-[calc(1rem+env(safe-area-inset-right))] sm:!justify-start sm:!space-x-2.5 sm:px-6 sm:!py-2 sm:pr-[calc(1.2rem+env(safe-area-inset-right))] lg:px-[3.175rem]'
            >
              <div
                className={`flex flex-grow items-center justify-between space-x-4 sm:!justify-start`}
              >
                <AppLogo className={`${sidebar ? 'sm:!hidden' : ''}`} />
                {!sidebar && (
                  <div
                    className={` hidden flex-shrink-0 sm:!block`}
                    aria-hidden={sidebar}
                  >
                    <Link href={'/'}>
                      <a className='flex'>
                        <div className='flex font-rounded text-[1.175rem] font-bold text-primary-700 dark:text-primary-200'>
                          <p>Fluid Design</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                )}
                <DocSearch
                  indexName='fluid-design'
                  appId={process.env.DOCSEARCH_APP_ID}
                  apiKey={process.env.DOCSEARCH_API_KEY}
                />
              </div>
              <div className='-my-2 sm:!hidden'>
                <Popover.Button className='-mr-2 inline-flex items-center justify-center rounded-md p-2 text-primary-400 hover:bg-primary-100 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 contrast-more:text-primary-900 dark:hover:bg-primary-800 dark:contrast-more:text-primary-50'>
                  <span className='sr-only'>{t('Open menu')}</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <div className='hidden sm:!flex'>
                <div className='flex flex-shrink-0 items-center space-x-4 text-sm sm:!ml-12 lg:space-x-6'>
                  <Link href='/docs'>
                    <a
                      className={clsxm(
                        'px-2 py-1 font-medium',
                        navBarLinkClassName
                      )}
                    >
                      {t('Docs')}
                    </a>
                  </Link>
                  <div className='h-3 w-0.5 bg-primary-400 dark:bg-primary-500 rounded-full' />
                  <a
                    className={clsxm('px-1.5 py-1.5', navBarLinkClassName)}
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/fluid-design-io/fluid'
                  >
                    <IoLogoGithub className='h-4 w-4' aria-hidden='true' />
                  </a>
                  <ThemeSwitch
                    mode={mode as 'light' | 'dark'}
                    handleModeChange={handleModeChange}
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
                  key={'mobile-sidbar-menu'}
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  className='fixed top-0 z-[61]'
                  transition={{
                    type: 'spring',
                    bounce: 0.05,
                  }}
                >
                  <Popover.Panel
                    focus
                    static
                    className={`transition duration-300 sm:!relative sm:!z-40`}
                  >
                    <SidebarMenu />
                  </Popover.Panel>
                </motion.div>
                <Popover.Overlay
                  key='mobile-sidbar-menu-overlay'
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`fixed inset-0 z-[60] bg-primary-900/30 sm:!hidden`}
                />
              </Fragment>
            )}
          </AnimatePresence>
        </Fragment>
      )}
    </Popover>
  );
};
