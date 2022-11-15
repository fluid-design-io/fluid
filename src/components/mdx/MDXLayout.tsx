import { CH } from '@code-hike/mdx/components';
import { MDXProvider } from '@mdx-js/react';
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
            {sidebar && (
              <Sidebar docNav={props?.docNav || undefined} hideNav={false} />
            )}
            <div className='flex-1'>
              {header && <Navbar sidebar={sidebar} />}
              <div className='flex w-full flex-1 flex-col xl:flex-row'>
                <main
                  className='prose prose-stone mx-auto mt-28 sm:mt-24 md:mt-[4.5rem] lg:mt-12 xl:mt-8 w-full max-w-6xl flex-grow p-4 pr-[calc(1rem+env(safe-area-inset-right))] prose-headings:font-primary prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-gray-900 prose-p:font-primary prose-p:text-gray-800 dark:prose-invert dark:prose-h1:text-gray-50 dark:prose-p:text-gray-300 sm:prose-h1:text-6xl md:p-8 md:pr-[calc(2rem+env(safe-area-inset-right))] lg:p-14 2xl:p-16'
                  id='main'
                >
                  <MDXRemote
                    {...props.source}
                    components={{
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
