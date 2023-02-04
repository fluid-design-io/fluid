import { Button } from '@fluid-design/fluid-ui';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { featuresList } from '@/lib/index/data';

import { FluidDesign } from '@/components/FluidDesign';
import { Page } from '@/components/framework';
import UnstyledLink from '@/components/framework/UnstyledLink';
import IndexCanvas from '@/components/index/IndexCanvas';
import IndexDemoWindow from '@/components/index/IndexDemoWindow';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Home() {
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
            Modern UI components with smooth transitions.
          </h1>
          <p className='mx-auto mt-6 max-w-2xl px-4 text-gray-500 dark:text-gray-300 md:!text-center md:!text-xl'>
            Beautiful React UI that are <span>responsive</span>, supports
            features like <span>dark mode</span> and <span>a11y</span> with
            elegant transitions.
          </p>
          <div className='mt-8 flex w-full justify-center'>
            <Button
              weight='outline'
              label='Get Started'
              iconEnd={ArrowRightIcon}
              as={UnstyledLink}
              href='/docs/'
            />
          </div>
          <IndexDemoWindow />
        </div>
      </section>
      <section
        className='mx-auto mt-16 mb-8 max-w-7xl text-center sm:px-8 lg:mb-24'
        id='features'
      >
        <h1 className='not-prose'>Looks right' isn't enough.</h1>
        <blockquote className='px-4 sm:px-0'>
          <p className='mx-auto mt-6 max-w-2xl px-4 lg:text-lg'>
            Many UI libraries and component designs often only focus on the
            design and bare functionalities. They cover the majority of users'
            needs. However, some component designs may not suit users who rely
            on accessibility features like screen reader, high-contrast, and
            reduce-motion. Fluid Design aims to create components that works for
            all users.
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
