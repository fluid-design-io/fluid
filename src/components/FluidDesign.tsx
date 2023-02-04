import { Button, Tab } from '@fluid-design/fluid-ui';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineMail, HiPause, HiPlay } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getNextItem, getPrevItem } from '@/lib/arrayHelpers';
import clsxm from '@/lib/clsxm';

import { Card } from '@/components/framework/Card';
import { DynamicImage } from '@/components/framework/DynamicImage';
import UnstyledLink from '@/components/framework/UnstyledLink';
import VideoPlayer from '@/components/VideoPlayer';

import a11yDark from '~/assets/index/a11y-dark.webp';
import a11yLight from '~/assets/index/a11y-light.webp';
import designConceptDark from '~/assets/index/design-concept-dark.webp';
import designConceptLight from '~/assets/index/design-concept-light.webp';
import webMoveForwardDark from '~/assets/index/web-forward-dark.webp';
import webMoveForwardLight from '~/assets/index/web-forward-light.webp';

export const FluidDesign = () => {
  const shouldReduceMotion = useReducedMotion();
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [playAnimation, setPlayAnimation] = useState<boolean>(false);
  const [activeCompIndex, setActiveCompIndex] = useState<number>(0);
  const isAnimationInView = useInView(animationContainerRef);
  const overScrollRef = useRef<HTMLDivElement>(null);
  const { scrollX } = useScroll({ container: overScrollRef });
  const conceptOpacity = useTransform(scrollX, [20, 30], [0, 1]);
  const elegantDesignVideos = [
    {
      title: 'Fluid Design',
      description:
        'Beautiful UI that are responsive, supports features like dark mode and a11y with elegant transitions.',
      acitveClassName: 'aspect-square',
    },
    {
      title: 'Input Component',
      description: 'Clean input fields with validation and error states.',
    },
    {
      title: 'Menu Component',
      description:
        'Menu component supports keyboard navigation and screen readers.',
    },
  ];
  const intergrateCompList = [
    'Accordion',
    'Button',
    'Switch',
    'Menu',
    'Form',
    'Input',
    'Textarea',
    'Combobox',
  ];

  // play animation when in view, pause when out of view, always play when reduced motion
  useEffect(() => {
    if (!shouldReduceMotion) {
      if (isAnimationInView) {
        setPlayAnimation(true);
      } else {
        setPlayAnimation(false);
      }
    }
  }, [isAnimationInView, shouldReduceMotion]);

  useEffect(() => {
    // auto change tab index every 3 seconds, stops if  user is hovering over tabs
    // total 3 tabs
    const interval = setInterval(() => {
      if (shouldReduceMotion) {
        return;
      }
      setActiveTabIndex((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
      setActiveCompIndex((prev) => {
        const next = getNextItem(intergrateCompList, prev);
        return intergrateCompList.indexOf(next);
      });
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='layout mt-8 grid grid-cols-12 gap-4 md:col-span-2 md:gap-6 lg:mt-0 lg:gap-8'>
        <Card className='col-span-12 overflow-hidden lg:col-span-6'>
          <div className='p-4 md:p-6 lg:p-8'>
            <h4 className='card-title mb-2'>Elegant Design</h4>
            <p>
              Many UI libraries and component designs often only focus on the
              looks. While they cover the majority of users' needs. Fluid Design
              aims to create components that works for all users, making extra
              effort to make beautiful design accessible.
            </p>
          </div>

          <Swiper
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            navigation={true}
            slidesPerView='auto'
            spaceBetween={0}
            className={clsxm([
              'swiper-navigation relative',
              '[&_.swiper-button-next]:top-[40%] [&_.swiper-button-prev]:top-[40%]',
              '[&_.swiper-button-next]:right-[1.5rem] [&_.swiper-button-prev]:left-[1.5rem]',
            ])}
            pagination={{
              clickable: true,
            }}
          >
            {elegantDesignVideos.map((props, i) => (
              <SwiperSlide
                className='mx-2 aspect-square !w-4/5 shrink-0 pb-10 sm:!w-2/5 md:mx-3 md:!w-5/12 lg:mx-4 lg:!w-2/3'
                key={`elegant-design-${i}`}
              >
                <VideoPlayer
                  className='aspect-square'
                  containerClassName='p-0'
                  showTitle
                  src={{
                    light: `/assets/videos/fluid-design/elegant-light-${
                      i + 1
                    }.mp4`,
                    dark: `/assets/videos/fluid-design/elegant-dark-${
                      i + 1
                    }.mp4`,
                  }}
                  {...props}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Card>
        <Card className='relative col-span-12 overflow-hidden p-4 pb-[35vh] sm:col-span-7 sm:pb-40 md:p-6 lg:col-span-6 lg:p-8 lg:pb-0'>
          <div className='relative z-[2]'>
            <h4 className='card-title mb-2'>Built with a11y in mind.</h4>
            <p>
              Utilizing libraries like{' '}
              <a
                href='https://headlessui.dev/'
                rel='noopener noreferrer'
                target='_blank'
              >
                headlessui
              </a>{' '}
              to provide a11y features like focus management, keyboard
              navigation, and screen reader support. Fluid Design also adds
              support to high-contrast mode, reduce-motion, and light/dark mode.
            </p>
          </div>
          <DynamicImage
            alt='a11y icons'
            className='absolute inset-0 z-0 h-full w-full object-cover [object-position:center_65%]'
            src={{
              light: a11yLight,
              dark: a11yDark,
            }}
          />
        </Card>
        <Card className='card-padding col-span-12 sm:col-span-5 lg:col-span-4'>
          <div className=''>
            <h4 className='card-title mb-2'>Simple. But not simplistic.</h4>
            <p>
              In order to transform more websites into accessible websites, it
              is key to make the component intergration process as simple as
              possible. So anyone can adapt to it, even if they are not familiar
              with a11y. With no extra effort, you can create a beautiful and
              accessible website.
            </p>
          </div>
        </Card>
        <Card className='order-last col-span-12 py-4 md:col-span-7 md:py-6 lg:order-none lg:col-span-4 lg:py-8'>
          <Tab
            onChange={setActiveTabIndex as any}
            selectedIndex={activeTabIndex as any}
            tabClassName='w-full'
          >
            <Tab.List className='mx-4 justify-start overflow-x-auto md:mx-6 lg:mx-8'>
              <Tab.ListItem>Normal</Tab.ListItem>
              <Tab.ListItem>High Contrast</Tab.ListItem>
              <Tab.ListItem>RTL</Tab.ListItem>
            </Tab.List>
            <Tab.Panels className='mt-4 px-4 md:mt-6 md:px-6 lg:mt-8 lg:px-8'>
              <Tab.Panel tabPanelClassName='pb-[2px]'>
                <SimpleButtonWrap>
                  <Button
                    color='indigo'
                    iconEnd={MdSend}
                    label='Send'
                    weight='light'
                  />
                </SimpleButtonWrap>
              </Tab.Panel>
              <Tab.Panel tabPanelClassName=''>
                <SimpleButtonWrap className='contrast'>
                  <Button
                    color='indigo'
                    iconEnd={MdSend}
                    label='Send'
                    weight='light'
                  />
                </SimpleButtonWrap>
              </Tab.Panel>
              <Tab.Panel tabPanelClassName='pb-[2px]'>
                <SimpleButtonWrap dir='rtl'>
                  <Button
                    color='indigo'
                    iconEnd={MdSend}
                    label='Send'
                    weight='light'
                  />
                </SimpleButtonWrap>
              </Tab.Panel>
            </Tab.Panels>
          </Tab>
        </Card>
        <Card className='card-padding col-span-12 flex flex-col md:col-span-5 lg:col-span-4'>
          <p>
            The Button component is just one of the many components that are
            built with a11y in mind.
          </p>
          <code className='flex flex-1 flex-col justify-center'>
            <div style={{ display: 'inline-block' }}>
              <span style={{ opacity: '0.99' }}>
                <span> </span>
                <span className='text-gray-500 dark:text-gray-400'>&lt;</span>
                <span className='text-green-600 dark:text-green-500'>
                  Button
                </span>
                <br />
                {/* Segment */}
                <span> </span>
                <span className='pl-2.5 text-blue-500 dark:text-blue-400'>
                  label
                </span>
                <span className='text-gray-500 dark:text-gray-400'>=</span>
                <span className='text-orange-700 dark:text-amber-600'>
                  'Send'
                </span>
                <br />
                {/* Segment */}
                <span> </span>
                <span className='pl-2.5 text-blue-500 dark:text-blue-400'>
                  color
                </span>
                <span className='text-gray-500 dark:text-gray-400'>=</span>
                <span className='text-orange-700 dark:text-amber-600'>
                  'primary'
                </span>
                <br />
                {/* Segment */}
                <span> </span>
                <span className='pl-2.5 text-blue-500 dark:text-blue-400'>
                  weight
                </span>
                <span className='text-gray-500 dark:text-gray-400'>=</span>
                <span className='text-orange-700 dark:text-amber-600'>
                  'light'
                </span>
                <br />
                <span> </span>
                <span className='pl-2.5 text-blue-500 dark:text-blue-400'>
                  iconEnd
                </span>
                <span className='text-gray-500 dark:text-gray-400'>=</span>
                <span className='text-blue-700 dark:text-blue-600'>{'{'}</span>
                <span className='text-amber-600 dark:text-amber-400'>
                  MDSend
                </span>
                <span className='text-blue-700 dark:text-blue-600'>{'}'}</span>
                <br />
                <span> </span>
                <span> </span>
                <span className='text-gray-500 dark:text-gray-400'>/&gt;</span>
              </span>
              <br />
            </div>
          </code>
        </Card>
      </section>
      <section className='layout my-[calc(min(20vh,12rem))]'>
        <h1 className='legacy mb-6 md:mb-8'>
          It all starts with <br /> a simple idea.
        </h1>
        <p className='w-full max-w-4xl text-lg md:w-4/5'>
          The web is a powerful medium for communication and data exchange.
          However, not every website is created equal for every user. Some
          websites are difficult to use, and some are inaccessible to users with
          disabilities. Fluid Design is a set of tools that helps you build
          websites that are accessible, usable, and user-friendly.
        </p>
      </section>
      <section className='layout'>
        <h2 className='card-title mb-8 lg:text-4xl'>Component</h2>
        <div className='grid grid-cols-12 gap-4 md:col-span-2 md:gap-6 lg:gap-8'>
          <Card className='card-padding relative col-span-12'>
            <h4 className='card-title mb-2'>Packed with features</h4>
            <p className='w-full max-w-2xl md:w-4/5'>
              To design a beautiful resuable a11y component, it must be refined
              not only on the surface, but also under the hood. For example, a
              component can have states such as hover, focus, and active. It can
              also have different sizes, colors, weights and corner radius. It
              can also have disabled, loading, and error states. In addtion, it
              can have different variants such as outlined, ghost, and link,
              icons, orientation, cursor or pointer types... All of these needs
              to have a dark mode version as well. Not to mention the
              accessibility features that needed to be implemented.
            </p>
            <div className='relative'>
              <div
                className={clsxm(
                  'pointer-events-none absolute top-0 -right-0.5 bottom-0 z-[3] h-full w-8 [mask-image:linear-gradient(270deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
                  'bg-white dark:bg-gray-700 contrast:dark:bg-[rgb(22,23,30)]'
                )}
              />
              <motion.div
                className={clsxm(
                  'pointer-events-none absolute top-0 -left-0.5 bottom-0 z-[3] h-full w-8 [mask-image:linear-gradient(90deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
                  'bg-white dark:bg-gray-700 contrast:dark:bg-[rgb(22,23,30)]',
                  'transition-opacity duration-500'
                )}
                style={{
                  opacity: conceptOpacity,
                }}
              />
              <motion.div
                className='relative max-w-full overflow-x-auto overscroll-x-contain'
                layoutScroll
                ref={overScrollRef}
              >
                <div className='relative aspect-[2/1.2] w-full min-w-[53rem] md:min-w-[42rem]'>
                  <DynamicImage
                    alt='Design Concept'
                    src={{
                      light: designConceptLight,
                      dark: designConceptDark,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </Card>
          <Card className='card-padding col-span-12 sm:col-span-5 md:col-span-7'>
            <h4 className='card-title mb-2'>Transitions</h4>
            <p className='w-full max-w-2xl md:w-4/5'>
              Transitions are not just to make the component look pretty. They
              serves a purpose to help the user understand the state of the
              component. It also directs the user's attention without needing to
              add additional context. Fluid Design uses mordern spring animation
              techniques to create smooth and performant transitions.
            </p>
          </Card>
          <Card className='card-padding relative col-span-12 flex flex-col sm:col-span-7 md:col-span-5'>
            <div ref={animationContainerRef}>
              <Button
                className='absolute top-2 right-4 btn-outline-primary md:top-4 md:right-4'
                iconOnly
                onClick={() => setPlayAnimation(!playAnimation)}
                shape='pill'
                sr={playAnimation ? 'Pause Animation' : 'Play Animation'}
                weight='outline'
              >
                {playAnimation ? <HiPause /> : <HiPlay />}
              </Button>
              <div className='flex w-full flex-grow flex-col items-stretch justify-center'>
                <div className='mb-4'>
                  <h4 className='mb-1 font-rounded text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-400 md:text-sm'>
                    Linear
                  </h4>
                  <div className='relative h-10 w-[calc(100%-2.5rem)]'>
                    <div className='absolute left-[0.675rem] top-1/2 -mt-1.5 h-3 w-[calc(100%+1.25rem)] rounded-full bg-gray-100/70 dark:bg-black/20' />
                    {playAnimation ? (
                      <motion.div
                        className='contrast-border absolute h-8 w-8 rounded-full bg-gradient-to-r from-sky-300 to-sky-400 dark:from-sky-400 dark:to-sky-600 md:h-10 md:w-10'
                        initial={{ left: '0%' }}
                        layoutId='dot.linear'
                        animate={{
                          left: '100%',
                        }}
                        transition={{
                          duration: 2,
                          times: [0, 0.5, 1],
                          ease: 'linear',
                          repeat: Infinity,
                          repeatType: 'reverse',
                          repeatDelay: 2,
                        }}
                      />
                    ) : (
                      <motion.div
                        className='contrast-border absolute left-0 h-8 w-8 rounded-full bg-gradient-to-r from-sky-300 to-sky-400 dark:from-sky-400 dark:to-sky-600 md:h-10 md:w-10'
                        layoutId='dot.linear'
                        transition={{
                          type: 'spring',
                          bounce: 0,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className='mb-4'>
                  <h4 className='mb-1 font-rounded text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-400 md:text-sm'>
                    Ease In Out
                  </h4>
                  <div className='relative h-10 w-[calc(100%-2.5rem)]'>
                    <div className='absolute left-[0.675rem] top-1/2 -mt-1.5 h-3 w-[calc(100%+1.25rem)] rounded-full bg-gray-100/70 dark:bg-black/20' />
                    {playAnimation ? (
                      <motion.div
                        className='contrast-border absolute h-8 w-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-400 dark:to-blue-600 md:h-10 md:w-10'
                        initial={{ left: '0%' }}
                        layoutId='dot.easeInOut'
                        animate={{
                          left: '100%',
                        }}
                        transition={{
                          duration: 2,
                          times: [0, 0.5, 1],
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatType: 'reverse',
                          repeatDelay: 2,
                        }}
                      />
                    ) : (
                      <motion.div
                        className='contrast-border absolute left-0 h-8 w-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-400 dark:to-blue-600 md:h-10 md:w-10'
                        layoutId='dot.easeInOut'
                        transition={{
                          type: 'spring',
                          bounce: 0,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h4 className='mb-1 font-rounded text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-400 md:text-sm'>
                    Spring
                  </h4>
                  <div className='relative h-10 w-[calc(100%-2.5rem)]'>
                    <div className='absolute left-[0.675rem] top-1/2 -mt-1.5 h-3 w-[calc(100%+1.25rem)] rounded-full bg-gray-100/70 dark:bg-black/20' />
                    {playAnimation ? (
                      <motion.div
                        className='contrast-border absolute h-8 w-8 rounded-full bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-400 dark:to-primary-600 md:h-10 md:w-10'
                        initial={{ left: '0%' }}
                        layoutId='dot.spring'
                        animate={{
                          left: '100%',
                        }}
                        transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'mirror',
                          repeatDelay: 2,
                        }}
                      />
                    ) : (
                      <motion.div
                        className='contrast-border absolute left-0 h-8 w-8 rounded-full bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-400 dark:to-primary-600 md:h-10 md:w-10'
                        layoutId='dot.spring'
                        transition={{
                          type: 'spring',
                          bounce: 0,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className='card-padding relative order-last col-span-12 flex min-h-[11rem] flex-col overflow-hidden sm:-order-none sm:col-span-7 md:col-span-5 lg:col-span-4'>
            <div
              className={clsxm(
                'pointer-events-none absolute top-0 right-0 bottom-0 z-[3] h-full w-16 [mask-image:linear-gradient(270deg,rgba(255,255,255,1)_25%,rgba(255,255,255,0))]',
                'bg-white dark:bg-gray-700 contrast:dark:bg-[rgb(22,23,30)]'
              )}
            />
            <code className='flex flex-1 flex-grow flex-col items-stretch justify-center whitespace-nowrap'>
              <div className='relative inline-block max-w-full overflow-visible'>
                <span className='text-purple-600 dark:text-purple-400'>
                  import
                </span>
                <span> </span>
                <span className='text-gray-500 dark:text-gray-400'>{'{'}</span>
                <motion.div className='relative mx-1 inline-block rounded bg-gray-200/40 px-2 text-orange-600 dark:bg-black/30 dark:text-amber-400'>
                  <AnimatePresence mode='popLayout'>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      initial={{ opacity: 0, y: 24 }}
                      key={`intergrate.active.${activeCompIndex}`}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                      }}
                    >
                      {intergrateCompList[activeCompIndex]}
                    </motion.div>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className='absolute left-0 -top-12 px-2'
                      exit={{ opacity: 0, y: -22 }}
                      initial={{ opacity: 0, y: 22 }}
                      key={`intergrate.prev2.${activeCompIndex}`}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                      }}
                    >
                      <span className='opacity-20'>
                        {getPrevItem(intergrateCompList, activeCompIndex, 1)}
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className='absolute left-0 -top-6 px-2'
                      exit={{ opacity: 0, y: -22 }}
                      initial={{ opacity: 0, y: 24 }}
                      key={`intergrate.prev.${activeCompIndex}`}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                      }}
                    >
                      <span className='opacity-60'>
                        {getPrevItem(intergrateCompList, activeCompIndex)}
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className='absolute left-0 top-6 px-2'
                      exit={{ opacity: 0, y: -24 }}
                      initial={{ opacity: 0, y: 22 }}
                      key={`intergrate.next.${activeCompIndex}`}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                      }}
                    >
                      <span className='opacity-60'>
                        {getNextItem(intergrateCompList, activeCompIndex)}
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className='absolute left-0 top-12 px-2'
                      exit={{ opacity: 0, y: -22 }}
                      initial={{ opacity: 0, y: 22 }}
                      key={`intergrate.next2.${activeCompIndex}`}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                      }}
                    >
                      <span className='opacity-20'>
                        {getNextItem(intergrateCompList, activeCompIndex, 1)}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                <span className='text-gray-500 dark:text-gray-400'>{'}'}</span>
                <span> </span>
                <span className='text-purple-600 dark:text-purple-400'>
                  from
                </span>
                <span> </span>
                <span className='text-orange-600 dark:text-amber-600'>
                  '...'
                </span>
                <span className='text-gray-500 dark:text-gray-400'>;</span>
              </div>
            </code>
          </Card>
          <Card className='card-padding col-span-12 sm:col-span-5 md:col-span-7 lg:col-span-8'>
            <h4 className='card-title mb-2'>Effortless intergration</h4>
            <p className='w-full max-w-2xl md:w-4/5'>
              Fluid Design is designed to be used with any React project. The
              components are made to be as customizable as possible. It handles
              a11y by default, so you can use the components as is - with little
              or no required props, or you can customize them, add refs,
              changing the wrapper type to fit your needs.
            </p>
          </Card>
        </div>
      </section>
      <section className='relative mx-auto w-full max-w-[1920px] py-[calc(min(20vh,12rem))] lg:aspect-[2.4/1]'>
        <div className='layout relative z-[2]'>
          <h1 className='legacy mb-6 md:mb-8'>
            Aims to move the web <br /> forward with a11y.
          </h1>
          <p className='w-full max-w-lg font-medium md:w-4/5'>
            It's an ambitious goal, but it's one that we believe is possible. We
            believe that by pre-pack all these features and deliver to
            developers in a simple and easy to use package, we can help move the
            web forward with a11y.
          </p>
          <Button
            as={UnstyledLink}
            className='mt-8 inline-block btn-primary'
            href='/docs'
            label='Visit Docs'
          />
          <Button
            as='a'
            className='mx-4 mt-8 inline-block btn-outline-primary'
            href='mailto:oliver@image-vision.co?subject=Fluid Design Collaboration'
            iconEnd={HiOutlineMail}
            label='Collaborate'
          />
        </div>
        <div
          className={clsxm(
            'relative w-full',
            '-mt-6 aspect-[2/1.5] [&_img]:!object-[right_top]',
            'sm:-mt-36 sm:[&_img]:!object-[65%_top]',
            'md:-mt-52 md:[&_img]:!object-[70%_top]',
            'lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto lg:h-[52rem] lg:[&_img]:!object-[30%_top]',
            'xl:h-[56rem] xl:[&_img]:!object-[left_center]'
          )}
        >
          <div
            className={clsxm([
              'hidden 2xl:block',
              'absolute inset-y-0 right-0 z-[2] h-full w-1/4',
              '[mask-image:linear-gradient(270deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
              'bg-gray-100 dark:bg-gray-800 contrast:dark:bg-[rgb(22,23,30)]',
            ])}
          />
          <DynamicImage
            alt='Web forward'
            src={{
              light: webMoveForwardLight,
              dark: webMoveForwardDark,
            }}
          />
        </div>
      </section>
    </>
  );
};

const SimpleButtonWrap = ({ className = '', children, ...props }) => (
  <div
    className={clsxm(
      'inline-block w-full rounded-xl bg-gray-100/70 p-4 dark:bg-gray-900/30',
      className
    )}
    {...props}
  >
    <div className=''>
      <div className='flex flex-col gap-6 pb-8'>
        <motion.div className='self-start rounded-lg bg-gray-200 px-20 py-4 dark:bg-gray-600/80' />
        <motion.div className='self-end rounded-lg bg-white px-20 py-4 dark:bg-gray-500' />
      </div>
      <motion.div className='flex justify-between gap-4'>
        <div className='flex-1 flex-shrink-0 rounded-lg border border-gray-200 dark:border-gray-600' />
        <div>{children}</div>
      </motion.div>
    </div>
  </div>
);
