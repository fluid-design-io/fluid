import slugConverter from '../../util/slug';
import DocSection from './DocSection';
import { Page } from './Page';
import ScrollSpy from '@/lib/ScrollSpy';
import { useTranslation } from 'next-i18next';
import React from 'react';

function Doc({ meta, title, description = '', sections, ...props }) {
  const { t } = useTranslation('common');
  const docNav = (
    <ul key={`docNav`} className='doc-nav-wrap'>
      <li className='doc-nav-header'>{t('On this page')}</li>
      {sections.map(({ title: { raw, transformed } }) => {
        const sectionSlug = slugConverter(raw);
        return (
          <li
            key={`${sectionSlug}`}
            className='doc-nav'
            data-to-scrollspy-id={sectionSlug}
          >
            <a href={`#${sectionSlug}`} className='w-full'>
              {transformed}
            </a>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Page
      meta={meta}
      docNav={docNav}
      className='flex min-h-screen space-x-4'
      hasMain={true}
    >
      <div className='mx-auto max-w-5xl flex-grow p-4 md:!px-16 lg:px-8 xl:px-16'>
        <div className='!hidden md:!block lg:!hidden'>{docNav}</div>
        <article title={t(`doc-for`, { title })}>
          <h1 className='capitalize md:!pt-12'>{title}</h1>
          <p className='pb-6 text-lg md:!text-xl'>{description}</p>
          <div key='content' className='mx-auto w-full flex-grow'>
            <ScrollSpy offsetBottom={500}>
              {sections.map((props) => (
                <DocSection
                  key={`${props.title.raw}`}
                  {...{ docTitle: title, ...props }}
                />
              ))}
            </ScrollSpy>
          </div>
        </article>
      </div>
      <div
        key='sidenav'
        className={`sticky top-0 z-20 !hidden h-screen min-w-[12rem] pr-4 pt-[61px] md:!pr-16 lg:!block xl:min-w-[14rem]`}
      >
        {docNav}
      </div>
    </Page>
  );
}

export default Doc;
