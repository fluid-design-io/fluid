import { Button } from '@fluid-design/fluid-ui';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { AnimatePresence } from 'framer-motion';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FluidDesign } from '@/components/FluidDesign';
import UnstyledLink from '@/components/framework/UnstyledLink';

import bgDark from '~/assets/index-bg-dark.webp';
import bgLight from '~/assets/index-bg-light.webp';

import WindowFrame from '../components/WindowFrame';
import { Page } from '../components/framework';
import IndexIphoneFrame from '../components/instance/IndexIphoneFrame';
import FeatureCard from '../components/ui/FeatureCard';
import { featuresList, indexElements } from '../lib/index/data';

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
          <div className='w-full flex justify-center mt-8'>
            <Button
              weight='outline'
              label={t('get-started')}
              iconEnd={ArrowRightIcon}
              as={UnstyledLink}
              href='/docs/'
            />
          </div>
          <WindowFrame
            className='mx-auto mt-16 hidden w-[80%] max-w-[680px] justify-center md:!flex'
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
        className='mx-auto mt-16 max-w-7xl text-center sm:px-8 mb-8 lg:mb-24'
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
      <FluidDesign />
    </Page>
  );
}
