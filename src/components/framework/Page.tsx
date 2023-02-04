import { AnimatePresence, motion } from 'framer-motion';

import Seo from '@/components/framework/Seo';
import { MotionPageProps } from '@/interfaces/framwork';
import clsxm from '@/lib/clsxm';
import { getBody, getBodyExcept } from '@/lib/getBody';

import { Footer, Navbar, Sidebar, SkipNavContent } from '.';

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
  meta?: any;
  motionProps?: MotionPageProps;
  hasMain?: boolean;
  [x: string]: any;
}) => {
  return (
    <>
      <Seo {...meta} category='index' />
      {hasMain && <SkipNavContent />}
      <div className='sticky top-0 z-50 flex flex-col md:!flex-col-reverse'>
        {header && (
          <Navbar
            sidebar={sidebar}
            className={clsxm(
              'motion-reduce:pointer-events-none motion-reduce:opacity-0',
              sidebar
                ? `md:!ml-[15.625rem] lg:ml-[13.5rem] xl:ml-[15.625rem] motion-safe:-translate-y-full`
                : ``
            )}
          />
        )}
        <Sidebar hideNav={sidebar ? false : true} />
      </div>
      <div className='flex'>
        <AnimatePresence mode='wait'>
          <motion.main
            className={clsxm(
              `w-full max-w-full`,
              sidebar && `md:!ml-[15.625rem] lg:ml-[13.5rem] xl:ml-[15.625rem]`,
              className
            )}
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
