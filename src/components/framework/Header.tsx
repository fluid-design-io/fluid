import { SiteMeta } from '@/interfaces/framwork';
import Head from 'next/head';

export const Header = (meta: SiteMeta) => (
  <Head>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, viewport-fit=cover'
    />
    <meta charSet='utf-8' />
    <title>{meta?.title ?? 'Fluid Design'}</title>

    <meta property='og:title' content={meta?.title ?? 'Fluid Design'} />
    <meta property='og:url' content={meta?.url ?? 'https://fluid-design.io'} />
    <meta property='og:title' content={meta?.title ?? 'Fluid Design'} />
    <meta
      property='og:description'
      content={
        meta?.description ?? 'A collection of beautifully designed components'
      }
    />
    <meta property='og:image' content={meta?.imageUrl ?? '/assets/share.jpg'} />

    <meta name='twitter:card' content='summary_large_image' />
    <meta
      property='twitter:url'
      content={meta?.url ?? 'https://fluid-design.io'}
    />
    <meta
      property='twitter:title'
      content={`${meta?.title ?? 'Fluid Design'}`}
    />
    <meta name='twitter:title' content={`${meta?.title ?? 'Fluid Design'}`} />
    <meta
      property='twitter:description'
      content={
        meta?.description ?? 'A collection of beautifully designed components'
      }
    />
    <meta
      name='twitter:description'
      content={
        meta?.description ?? 'A collection of beautifully designed components'
      }
    />
    <meta
      property='twitter:image'
      content={meta?.imageUrl ?? '/assets/share.jpg'}
    />
  </Head>
);
