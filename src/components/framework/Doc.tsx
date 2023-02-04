import React from 'react';

import { Page } from './Page';
import slugConverter from '../../util/slug';

function Doc({ meta, title, description = '', sections, ...props }) {
  const docNav = (
    <ul className='doc-nav-wrap' key='docNav'>
      <li className='doc-nav-header'>On this page</li>
      {sections.map(({ title: { raw, transformed } }) => {
        const sectionSlug = slugConverter(raw);
        return (
          <li
            className='doc-nav'
            data-to-scrollspy-id={sectionSlug}
            key={`${sectionSlug}`}
          >
            <a className='w-full' href={`#${sectionSlug}`}>
              {transformed}
            </a>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Page
      className='flex min-h-screen space-x-4'
      docNav={docNav}
      hasMain={true}
      meta={meta}
    >
      <div className='mx-auto max-w-5xl flex-grow p-4 md:!px-16 lg:px-8 xl:px-16'>
        <div className='!hidden md:!block lg:!hidden'>{docNav}</div>
        <article title='Doc for'>
          <h1 className='capitalize md:!pt-12'>{title}</h1>
          <p className='pb-6 text-lg md:!text-xl'>{description}</p>
          <div className='mx-auto w-full flex-grow' key='content'></div>
        </article>
      </div>
      <div
        className='sticky top-0 z-20 !hidden h-screen min-w-[12rem] pr-4 pt-[61px] md:!pr-16 lg:!block xl:min-w-[14rem]'
        key='sidenav'
      >
        {docNav}
      </div>
    </Page>
  );
}

export default Doc;
