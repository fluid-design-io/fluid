import { Button } from '@fluid-design/fluid-ui';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FluidDesign } from '@/components/FluidDesign';
import { Page } from '@/components/framework';
import UnstyledLink from '@/components/framework/UnstyledLink';
import IndexCanvas from '@/components/index/IndexCanvas';
import IndexDemoWindow from '@/components/index/IndexDemoWindow';
import FeatureCard from '@/components/ui/FeatureCard';
import { featuresList } from '@/lib/index/data';

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

  const meta = {
    title: 'Fluid Design',
    description:
      'Beautiful React components that are responsive, supports features like dark mode and a11y with elegant transitions.',
  };

  return (
    <Page className='' meta={meta} sidebar={false}>
      <section className='relative pb-20 md:!pb-40'>
        <IndexCanvas />
        <div className='relative z-[1] md:pt-48'>
          <h5 className='ml-0 mr-auto block px-4 pt-20 font-[Nunito] text-base font-semibold opacity-70 dark:text-gray-100 md:!hidden'>
            Fluid Design
          </h5>
          <h1 className='w-4/5 max-w-4xl px-4 pt-2 text-3xl font-bold dark:text-gray-100 md:!mx-auto md:!w-auto md:!text-center md:!text-6xl'>
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
          <IndexDemoWindow />
        </div>
      </section>
      <section
        className='mx-auto mt-16 max-w-7xl text-center sm:px-8 mb-8 lg:mb-24'
        id='features'
      >
        <h1 className='not-prose'>
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
