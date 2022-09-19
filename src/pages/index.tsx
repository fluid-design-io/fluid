import { AnimatePresence } from 'framer-motion';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { SplitPane } from 'react-multi-split-pane';

import bgDark from '~/assets/index-bg-dark.jpg';
import bgLight from '~/assets/index-bg-light.jpg';

import WindowFrame from '../components/WindowFrame';
import { Page } from '../components/framework';
import IndexIphoneFrame from '../components/instance/IndexIphoneFrame';
import FeatureCard from '../components/ui/FeatureCard';
import { featuresList, indexElements } from '../lib/index/data';
import Code from '../util/Code';
import { rawResponsiveCard } from './examples/responsive-card';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index', 'navbar'])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState('Card');
  const [isDragging, setIsDragging] = useState(false);
  const selectedStyle = (item) => {
    return selected === item
      ? `text-gray-900 dark:text-gray-800 bg-white dark:bg-gray-300 shadow`
      : `text-gray-500/80 dark:text-gray-400 contrast-more:text-gray-600 dark:contrast-more:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 hover:bg-gray-50/80 dark:hover:bg-gray-300/10 focus:text-gray-600 dark:focus:text-gray-100 focus:bg-gray-50/80 dark:focus:bg-gray-300/10`;
  };
  const selectedComponent = (selected) => {
    let match = [];
    indexElements.forEach(
      (item) =>
        (match = match.concat(
          item.lists.filter((list) => list.name === selected)
        ))
    );
    return match[0]?.component;
  };
  const selectionBody = indexElements.map((item) => (
    <ul
      className='space-y-1 border-t border-gray-50/60 px-2 py-1 text-sm dark:border-gray-500/30 md:!text-base'
      key={item.category}
    >
      <li className='pointer-events-none px-2 font-semibold text-gray-600 dark:text-gray-300'>
        {t(item.category)}
      </li>
      {item.lists.map((list) => (
        <li key={`body.${list.name}`}>
          <button
            className={`${selectedStyle(
              list.name
            )} w-full overflow-hidden rounded-md px-2 py-1 text-left transition focus:outline-none focus:ring-1 focus:ring-gray-200/50 dark:focus:ring-gray-50`}
            onClick={() => {
              setSelected(list.name);
            }}
          >
            {t(list.name)}
          </button>
        </li>
      ))}
    </ul>
  ));

  const meta = {
    title: 'Fluid Design',
    description:
      'Beautiful React components that are responsive, supports features like dark mode and a11y with elegant transitions.',
  };

  return (
    <Page className='' meta={meta} sidebar={false}>
      <section className='relative pb-20 md:!pb-40'>
        <div className='pointer-events-none absolute inset-0 z-0 hidden w-full overflow-hidden blur-xl filter dark:!block'>
          <Image
            alt='background blur'
            className='w-full'
            layout='responsive'
            src={bgDark}
          />
        </div>
        <div className='pointer-events-none absolute inset-0 z-0 block w-full overflow-hidden blur-xl filter dark:hidden'>
          <Image
            alt='background blur'
            className='w-full'
            layout='responsive'
            src={bgLight}
          />
        </div>
        <div className='relative z-[1]'>
          <h5 className='ml-0 mr-auto block px-4 pt-20 font-[Nunito] text-base font-semibold opacity-70 dark:text-gray-100 md:!hidden'>
            Fluid Design
          </h5>
          <h1 className='w-4/5 max-w-4xl px-4 pt-2 text-3xl font-bold dark:text-gray-100 md:!mx-auto md:!w-auto md:!pt-48 md:!text-center md:!text-6xl'>
            {t('slogan')}
          </h1>
          <p className='mx-auto mt-6 max-w-2xl px-4 text-gray-500 dark:text-gray-300 md:!text-center md:!text-xl'>
            <Trans
              i18nKey='site-desc'
              ns='common'
              components={{
                span: (
                  <span className='font-mono font-medium text-gray-900 dark:text-gray-50' />
                ),
              }}
            />
          </p>
          <WindowFrame
            className='mx-auto mt-24 hidden w-[80%] max-w-[680px] justify-center md:!flex'
            sidebar={selectionBody}
            content={
              <AnimatePresence mode='wait'>
                {selectedComponent(selected)}
              </AnimatePresence>
            }
          />
          <IndexIphoneFrame
            selected={selected}
            selectedComponent={selectedComponent}
            selectedStyle={selectedStyle}
            setSelected={setSelected}
          />
        </div>
      </section>
      <section
        className='mx-auto mt-8 max-w-7xl text-center sm:px-8'
        id='features'
      >
        <h1 className='not-prose legacy'>
          <Trans
            components={{ br: <br className='block sm:!hidden' /> }}
            i18nKey='looks-right-isnt-enough.title'
            ns='index'
          />
        </h1>
        <blockquote className='px-4 sm:px-0'>
          <p className='mx-auto mt-6 max-w-2xl px-4 lg:text-lg'>
            {t('looks-right-isnt-enough.body', { ns: 'index' })}
          </p>
        </blockquote>
        <div className='mt-12 sm:mt-16 lg:mt-20'>
          <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6'>
            {featuresList.map((list) => (
              <FeatureCard {...list} key={list.title} />
            ))}
          </div>
        </div>
      </section>
      <section
        className='mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-8 md:!mt-40'
        id='demo'
      >
        <h1 className='text-left legacy'>
          {t('see-it-live', { ns: 'index' })}
        </h1>
        <p className='mt-4 max-w-2xl text-gray-500 dark:text-gray-300 lg:text-lg'>
          <Trans
            i18nKey='powered-by'
            ns='index'
            components={{
              span: (
                <span className='font-mono font-medium text-gray-900 dark:text-gray-50' />
              ),
            }}
          />
        </p>
        <Link href='/docs'>
          <button className='primary-button mt-6'>{t('browse-more')}</button>
        </Link>
        <div className='mt-8'>
          <SplitPane
            onDragStarted={() => setIsDragging(true)}
            split='vertical'
            onDragFinished={() => setIsDragging(false)}
            // defaultSizes={[1, 0]}
            minSize={[336, 24]}
            className='!relative mx-auto !flex-col !overflow-visible sm:!flex-row'
            // maxSize={"calc(100% - 16px)"}
          >
            <WindowFrame
              className='mx-auto w-full shadow dark:!bg-[#353330]'
              content={
                <iframe
                  src='/examples/responsive-card'
                  className={`h-[496px] w-full ${
                    isDragging ? 'pointer-events-none' : ''
                  }`}
                />
              }
            />
            <div></div>
          </SplitPane>

          <Code
            className='mt-4 h-[35vh] max-w-[calc(100vw-2rem)] overflow-x-auto rounded-xl bg-gray-800 pt-6 contrast-more:!bg-black dark:bg-gray-900 sm:mt-[-1rem] md:!ml-[-0.875rem] md:!h-[320px]'
            content={rawResponsiveCard}
          />
        </div>
      </section>
    </Page>
  );
}
