/* This example requires Tailwind CSS v2.0+ */
import { Button } from '@fluid-design/fluid-ui';
import { motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';

import { useScrolled } from '@/lib';
import clsxm from '@/lib/clsxm';

import { MobileSearch, Search } from '@/components/framework/Search';
import { MobileSidebar } from '@/components/framework/Sidebar';

import { TOC } from '../mdx';
import { ThemeSwitch } from '../ThemeSwitch';
import AppLogo from '../ui/AppLogo';

export const Navbar = ({ sidebar, ...props }) => {
  const menuBarRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, scrollY] = useScrolled();
  const bgOpacityLight = useTransform(scrollY, [0, 128], [0.5, 0.9]);
  const bgOpacityDark = useTransform(scrollY, [0, 128], [0, 0.8]);
  const [isWithinTop, setWithinTop] = useState(true);
  const scrollHandler = () => {
    setWithinTop(window.scrollY < 100);
  };
  useEffect(() => {
    return scrollY.on('change', scrollHandler);
  }, [scrollY]);
  return (
    <nav
      className={clsxm(
        `fixed right-0 top-0 z-50 transition-colors duration-300 motion-reduce:transition-opacity`,
        sidebar ? 'left-0 sm:left-56 2xl:left-64' : 'left-0',
        props.className
      )}
    >
      <motion.div
        className={clsxm(
          'backdrop-blur-sm backdrop-filter transition-colors dark:backdrop-blur',
          'contrast-more:bg-gray-100/90 dark:contrast-more:bg-black/80',
          'bg-gray-100/[var(--bg-opacity-light)] dark:bg-gray-900/[var(--bg-opacity-dark)]'
        )}
        animate={{
          y:
            hasScrolled && !isWithinTop
              ? -menuBarRef.current?.offsetHeight || 0
              : 0,
        }}
        initial={{
          y: 0,
        }}
        transition={{
          type: 'spring',
          bounce: 0,
        }}
        style={
          {
            '--bg-opacity-light': bgOpacityLight,
            '--bg-opacity-dark': bgOpacityDark,
          } as any
        }
      >
        <div
          className='flex items-center justify-between border-b border-b-gray-800/5 px-4 py-4 pr-[calc(1rem+env(safe-area-inset-right))] dark:border-b-gray-50/10 sm:!justify-start sm:!space-x-2.5 sm:px-6 sm:!py-2 sm:pr-[calc(1.2rem+env(safe-area-inset-right))] lg:px-[3.175rem]'
          ref={menuBarRef}
        >
          <div className='flex flex-grow items-center justify-between space-x-4 sm:!justify-start'>
            <AppLogo className={`${sidebar ? 'sm:!hidden' : ''}`} />
            {!sidebar && (
              <div
                aria-hidden='true'
                className={` hidden flex-shrink-0 sm:!block`}
              >
                <Link href='/' className='flex'>
                  <div className='flex font-rounded text-[1.175rem] font-bold text-gray-700 dark:text-gray-200'>
                    <p>Fluid Design</p>
                  </div>
                </Link>
              </div>
            )}
            <div className='flex flex-grow lg:hidden'>
              <MobileSearch />
            </div>
            <Search sidebar={sidebar} />
          </div>
          <div className='-my-2 sm:hidden'>
            <MobileSidebar />
          </div>
          <div className='hidden sm:!flex'>
            <div className='flex flex-shrink-0 items-center space-x-4 text-sm sm:!ml-12 lg:space-x-6'>
              <Button
                as='a'
                className={clsxm('px-2 py-1 font-medium')}
                color='gray'
                weight='clear'
                href='/docs'
              >
                Docs
              </Button>
              <Button
                as='a'
                className={clsxm('px-2 py-1 font-medium')}
                color='gray'
                weight='clear'
                href='https://fluid-color.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Color Generator
              </Button>
              <div className='h-3 w-0.5 rounded-full bg-gray-400 dark:bg-gray-500' />
              <Button
                as='a'
                color='gray'
                weight='clear'
                href='https://github.com/fluid-design-io/fluid'
                rel='noreferrer'
                target='_blank'
                icon={IoLogoGithub}
                iconOnly
                aria-label='GitHub repository'
              />
              <ThemeSwitch />
            </div>
          </div>
        </div>
        <TOC.Mobile {...{ hasScrolled, isWithinTop }} />
      </motion.div>
    </nav>
  );
};
