import { Header, Footer, Sidebar, Navbar } from '.';
import { MotionPageProps, SiteMeta } from '@/interfaces/framwork';
import { getBody, getBodyExcept } from '@/lib/getBody';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

export const Page = ({
  header = true,
  sidebar = true,
  children,
  className,
  meta,
  motionProps,
  hasMain,
  ...props
}: {
  header?: boolean;
  sidebar?: boolean;
  children?: any;
  className?: string;
  meta?: SiteMeta;
  motionProps?: MotionPageProps;
  hasMain?: boolean;
  [x: string]: any;
}) => {
  const { asPath } = useRouter();
  const [hideNav, setHideNav] = useState(false);
  const enableMotion =
    typeof motionProps?.enable === 'undefined' || motionProps?.enable === true
      ? true
      : false;

  useEffect(() => {
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var checkScroll = function () {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
      if (direction === 2 && curScroll > 120) {
        //replace 52 with the height of your header in px
        setHideNav(true);
        prevDirection = direction;
      } else if (direction === 1) {
        setHideNav(false);
        prevDirection = direction;
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  return (
    <>
      <Header {...meta} />
      {hasMain && (
        <a className='skip-main' href='#main'>
          Skip to main content
        </a>
      )}
      <div className='sticky top-0 z-50 flex flex-col md:!flex-col-reverse'>
        {header && (
          <Navbar
            sidebar={sidebar}
            className={`
            ${
              sidebar
                ? `md:!ml-[15.625rem] lg:ml-[13.5rem] xl:ml-[15.625rem]`
                : ``
            } 
            ${
              hideNav
                ? 'motion-safe:-translate-y-full motion-reduce:pointer-events-none motion-reduce:opacity-0'
                : 'motion-reduce:opacity-100'
            }`}
          />
        )}
        {sidebar && (
          <Sidebar hideNav={hideNav} docNav={props?.docNav || undefined} />
        )}
      </div>
      <div className='flex'>
        <AnimatePresence mode='wait'>
          <motion.main
            key={`page-${asPath}`}
            initial={enableMotion ? { opacity: 0 } : {}}
            animate={enableMotion ? { opacity: 1 } : {}}
            exit={enableMotion ? { opacity: 0 } : {}}
            transition={enableMotion ? { duration: 0.65 } : {}}
            className={`w-full max-w-full overflow-x-hidden ${
              className ? className : ``
            }  ${
              sidebar
                ? `md:!ml-[15.625rem] lg:ml-[13.5rem] xl:ml-[15.625rem]`
                : ``
            }`}
          >
            {getBodyExcept(children, 'sidenav')}
          </motion.main>
          {getBody(children, 'sidenav')}
        </AnimatePresence>
      </div>
      <div
        className={`${
          sidebar ? `md:!ml-[15.625rem] lg:ml-[13.5rem] xl:ml-[15.625rem]` : ``
        }`}
      >
        <Footer />
      </div>
    </>
  );
};
