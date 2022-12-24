import { CH } from '@code-hike/mdx/components';
import { motion } from 'framer-motion';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { CodeFrame, ExternalLink, Table, getComponents } from '@/components';
import Seo from '@/components/framework/Seo';
import clsxm from '@/lib/clsxm';

import { TOC } from '.';
import { ActiveAnchorProvider } from '../contexts';
import { Footer, Navbar, Sidebar, SkipNavContent } from '../framework';

export const MDXLayout: (props) => React.ReactElement = ({
  header = true,
  sidebar = true,
  components = {},
  ...props
}) => {
  const meta = props.meta || {};
  return (
    <>
      <Seo {...meta} category='doc' />
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
            {sidebar && <Sidebar hideNav={false} />}
            <div className='flex-1'>
              {header && <Navbar sidebar={sidebar} />}
              <div className='flex w-full flex-1 flex-col xl:flex-row'>
                <main
                  className={clsxm(
                    'prose prose-stone',
                    'mx-auto mt-28 sm:mt-24 md:mt-[6.5rem] lg:mt-12 xl:mt-8',
                    'w-full max-w-6xl flex-grow p-4 pr-[calc(1rem+env(safe-area-inset-right))]',
                    'prose-headings:font-primary sm:prose-h1:text-4xl lg:prose-h1:text-6xl',
                    'prose-p:font-primary prose-p:text-gray-800 dark:prose-invert dark:prose-p:text-gray-300',
                    'md:px-4 md:pr-[calc(2rem+env(safe-area-inset-right))] lg:p-14 2xl:p-16'
                  )}
                  id='main'
                >
                  <MDXRemote
                    {...props.source}
                    components={{
                      ...getComponents({}),
                      CH,
                      CodeFrame,
                      motion,
                      Table,
                      ExternalLink,
                      ...components,
                    }}
                  />
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
