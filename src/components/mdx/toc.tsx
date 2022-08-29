import { ActiveAnchor, useActiveAnchor } from '../contexts';
import { useScrolled } from '@/lib';
import clsxm from '@/lib/clsxm';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

export function getHeadingText(heading: any) {
  return heading?.text ? heading.text : '';
}

function OrdedListItem({
  heading,
  text,
  slug,
  activeAnchor,
}: {
  heading: any;
  text: string;
  slug: string;
  activeAnchor: ActiveAnchor;
}): ReactElement {
  const state = activeAnchor[slug];
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    const [toc] = document.getElementsByClassName('fluid-toc');
    if (state?.isActive && el && toc) {
      scrollIntoView(el, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'always',
        boundary: toc,
      });
    }
  }, [state?.isActive]);
  return (
    <li
      className={cn(
        'scroll-my-6 scroll-py-6',
        {
          1: '',
          2: '',
          3: 'ml-4',
          4: 'ml-8',
          5: 'ml-12',
          6: 'ml-16',
        }[heading.depth || 1]
      )}
      ref={ref}
    >
      <a
        href={`#${slug}`}
        className={cn(
          'contrast-more:hocus:contrast-bg contrast-more:hocus:contrast-text inline-block rounded px-1 py-0.5 no-underline',
          heading?.depth === 2 && 'font-semibold',
          state?.isActive
            ? 'contrast-more:contrast-ring contrast-more:contrast-bg contrast-more:contrast-text text-primary-800 subpixel-antialiased dark:text-primary-100'
            : 'text-primary-500 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300'
        )}
      >
        {text}
      </a>
    </li>
  );
}

const ListItem = ({
  heading,
  slug,
  text,
  activeAnchor,
  handleClose,
}: {
  heading: any;
  slug: string;
  text: string;
  activeAnchor: ActiveAnchor;
  handleClose: () => void;
}) => {
  const state = activeAnchor[`${slug}`];
  return (
    <li
      className={cn(
        'doc-nav',
        {
          1: '',
          2: '',
          3: 'ml-4',
          4: 'ml-8',
          5: 'ml-12',
          6: 'ml-16',
        }[heading.depth || 1]
      )}
    >
      <a
        href={`#${slug}`}
        className={clsxm(
          '-mx-2 -my-0.5 w-full rounded-md px-2 py-0.5 capitalize transition hocus:bg-primary-50/75 dark:hocus:bg-primary-900/75',
          state?.isActive &&
            'font-medium text-primary-800 dark:text-primary-100'
        )}
        aria-selected={state?.isActive}
        onClick={handleClose}
      >
        {text}
      </a>
    </li>
  );
};

const Desktop = () => {
  const { t } = useTranslation('common');
  const anchors = useActiveAnchor();

  const headings = Object.keys(anchors).map((anchor) => ({
    index: anchors[anchor].index,
    depth: anchors[anchor].depth,
    value: anchor,
    text: anchors[anchor]?.text,
  }));

  const hasHeadings = headings.length > 0;

  return (
    <>
      <div className='fluid-toc order-last hidden flex-shrink-0 pr-4 text-sm xl:block xl:w-44 2xl:w-64'>
        <div className='fluid-toc-content sticky top-16 -mr-4 max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto pr-4 pt-8'>
          {hasHeadings && (
            <ul className='space-y-2'>
              <p className='mb-4 font-semibold tracking-tight'>
                {t(`On this page`)}
              </p>
              {headings.map((heading) => {
                return (
                  <OrdedListItem
                    heading={heading}
                    activeAnchor={anchors}
                    slug={heading.value}
                    text={heading.text}
                    key={heading.value}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

const Mobile = () => {
  const { t } = useTranslation('common');
  const anchors = useActiveAnchor();
  const [showMoblieDoc, setShowMoblieDoc] = useState(false);
  const [hasScrolled] = useScrolled();

  const headings = Object.keys(anchors).map((anchor) => ({
    index: anchors[anchor].index,
    depth: anchors[anchor].depth,
    value: anchor,
    text: anchors[anchor]?.text,
  }));

  const hasHeadings = headings.length > 0;

  const activeHeading = (hasHeadings &&
    headings.find((heading) => {
      return anchors[heading.value]?.isActive;
    })) || {
    index: 0,
    depth: 1,
    text: t('On this page'),
  };

  if (headings.length === 0) {
    return null;
  }
  return (
    <Popover
      as={motion.div}
      className='fluid-toc-mobile relative z-30 order-first w-full border-b border-b-primary-800/5 dark:border-b-primary-50/10 xl:hidden'
    >
      {({ open, close }) => (
        <Fragment>
          <Popover.Button
            role={`button`}
            as={motion.button}
            className='mobile-doc-nav focus-ring flex w-full flex-shrink-0 items-center justify-between px-4 text-sm [-webkit-tap-highlight-color:transparent] sm:px-4 md:px-8 lg:px-14'
            onClick={() => setShowMoblieDoc(!showMoblieDoc)}
            animate={{
              paddingTop: hasScrolled ? '1rem' : '0.375rem',
              paddingBottom: hasScrolled ? '1rem' : '0.375rem',
            }}
            transition={{
              type: 'spring',
              bounce: 0,
            }}
          >
            <span className='sr-only'>{t(`Expand section list`)}</span>
            <p className='relative min-w-[6rem] text-left rtl:text-right'>
              <span
                className={clsxm(
                  showMoblieDoc ? 'opacity-0' : 'opacity-100',
                  'transition-opacity delay-300'
                )}
              >
                {getHeadingText(activeHeading)}
              </span>
              <span
                className={clsxm(
                  showMoblieDoc ? 'opacity-100' : 'opacity-0',
                  'absolute left-0 top-0 bottom-0 w-full text-primary-800 transition-opacity delay-300 dark:text-primary-50'
                )}
              >
                {t(`On this page`)}
              </span>
            </p>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: showMoblieDoc ? -180 : 0 }}
              transition={{
                type: 'spring',
                bounce: 0,
              }}
              className='mr-[env(safe-area-inset-right)]'
            >
              <ChevronDownIcon className='h-5 w-5 text-primary-500 contrast-more:text-primary-800 dark:text-primary-300 dark:contrast-more:text-primary-200' />
            </motion.span>
          </Popover.Button>
          <AnimatePresence>
            {showMoblieDoc && (
              <Popover.Panel
                static
                as={motion.div}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                }}
                className='doc-nav-expand overflow-hidden px-4 contrast-more:font-semibold sm:px-6 lg:px-14'
              >
                <div className='mt-1.5 pb-4'>
                  {headings.map((heading) => {
                    return (
                      <ListItem
                        heading={heading}
                        activeAnchor={anchors}
                        slug={heading.value}
                        text={heading.text}
                        handleClose={() => setShowMoblieDoc(false)}
                        key={`${heading.value}-mobile`}
                      />
                    );
                  })}
                </div>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </Fragment>
      )}
    </Popover>
  );
};

Desktop.displayName = 'TOCDesktop';
Mobile.displayName = 'TOCMobile';

export const TOC = Object.assign({}, { Desktop, Mobile });
