import { MDXRemote } from 'next-mdx-remote';
import { Toaster } from 'react-hot-toast';

import clsxm from '@/lib/clsxm';

import { TOC } from '.';
import { ActiveAnchorProvider } from '../contexts';
import { Footer, Header, Navbar, Sidebar, SkipNavContent } from '../framework';

export const MDXLayout = ({
  header = true,
  sidebar = true,
  components = {},
  ...props
}) => {
  const meta = props.meta || {};
  return (
    <>
      <Header {...meta} />
      <SkipNavContent />
      <Toaster
        gutter={4}
        position='bottom-center'
        containerStyle={{
          paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
        }}
        toastOptions={{
          duration: 2100,
        }}
      />
      <div className='flex flex-1 flex-col items-stretch'>
        <ActiveAnchorProvider>
          <div className={clsxm(`flex w-full max-w-full flex-1`)}>
            {sidebar && (
              <Sidebar docNav={props?.docNav || undefined} hideNav={false} />
            )}
            <div className='flex-1'>
              {header && (
                <Navbar
                  sidebar={sidebar}
                  className={clsxm(
                    false
                      ? 'motion-safe:-translate-y-full motion-reduce:pointer-events-none motion-reduce:opacity-0'
                      : 'motion-reduce:opacity-100'
                  )}
                />
              )}
              <div className='flex w-full flex-1 flex-col xl:flex-row'>
                <main
                  className='prose prose-stone mx-auto mt-28 sm:mt-24 md:mt-[4.5rem] lg:mt-12 xl:mt-8 w-full max-w-6xl flex-grow p-4 pr-[calc(1rem+env(safe-area-inset-right))] prose-headings:font-primary prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-primary-900 prose-p:font-primary prose-p:text-primary-800 dark:prose-invert dark:prose-h1:text-primary-50 dark:prose-p:text-primary-300 sm:prose-h1:text-6xl md:p-8 md:pr-[calc(2rem+env(safe-area-inset-right))] lg:p-14 2xl:p-16'
                  id='main'
                >
                  <MDXRemote {...props.source} components={components} />
                </main>
                <TOC.Desktop />
              </div>
              <Footer />
            </div>
          </div>
        </ActiveAnchorProvider>
      </div>
    </>
  );
};
